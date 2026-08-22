/**
 * What: Receives the unfurling-scroll letters.
 * Why: There is no public inbox in the client files — we keep the letter server-side
 *      and optionally forward it when CONTACT_INBOX is set.
 */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "The scroll is incomplete." }, { status: 400 });
  }

  console.info("[chapel-letter]", { name, email, subject, message });
  return NextResponse.json({ ok: true });
}
