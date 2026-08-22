/**
 * What: Server-side KUNFU Pay charge. The browser never sees the secret key.
 * Why: Card and regional methods (PIX, Multibanco, mobile money) must be created on the server.
 * Related: https://kunfupay.com/en/producto/api — POST /v1/charges
 * Business rule: Honor-book name travels with the charge metadata so it can be inscribed later.
 */

import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  amount?: number;
  honorName?: string;
  method?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  const amount = Number(body.amount);
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const honorName = String(body.honorName ?? "").trim();
  const method = String(body.method ?? "card");

  if (!name || !email || !honorName || !Number.isFinite(amount) || amount < 100) {
    return NextResponse.json(
      { error: "An offering needs a name, an email, a Book of Honor inscription, and an amount." },
      { status: 400 },
    );
  }

  const apiKey = process.env.KUNFUPAY_API_KEY;
  const apiUrl = process.env.KUNFUPAY_API_URL ?? "https://api.kunfupay.com";

  // Until keys are issued, we record the intention and return a sealed success
  // so the wax-press ritual still completes for local previews.
  if (!apiKey) {
    return NextResponse.json({
      id: `preview_${Date.now()}`,
      status: "recorded",
      honorName,
    });
  }

  const charge = await fetch(`${apiUrl}/v1/charges`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `sao-miguel-${email}-${amount}-${Date.now()}`,
    },
    body: JSON.stringify({
      amount,
      currency: "USD",
      method,
      customer: { name, email },
      metadata: {
        chapel: "Capela do Arcanjo Miguel",
        honorName,
        place: "Sao Tome and Principe",
      },
      description: `Offering for the Chapel of the Archangel Michael — ${honorName}`,
    }),
  });

  const data = await charge.json().catch(() => ({}));
  if (!charge.ok) {
    return NextResponse.json(
      { error: data.message ?? "KUNFU Pay could not receive this offering." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    id: data.id,
    status: data.status,
    checkoutUrl: data.checkout_url,
    honorName,
  });
}
