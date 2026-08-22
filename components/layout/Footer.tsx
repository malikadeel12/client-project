/**
 * What: Closing stone with solid dusk colour so every word stays readable.
 * Why: A live chapel photograph behind the type made the ivory text vanish.
 *      Contrast comes first; the moss line still ties the bar to São Miguel.
 */

import Link from "next/link";
import { site } from "@/content/site";
import { ArchangelShield } from "@/components/svg/icons";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#14110F] px-3 py-10 text-limestone-ivory">
      <div className="stone-grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-verdigris" />

      <div className="relative z-[1] mx-auto flex max-w-sanctuary flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-editorial">
          <p className="flex items-center gap-1.5 font-display text-lg tracking-liturgical text-limestone-ivory">
            <ArchangelShield className="h-4 w-3 text-verdigris" />
            {site.wordmark}
          </p>
          <p className="mt-2 font-body text-sm text-limestone-ivory/90">
            {site.namePt} · {site.contact.location}
          </p>
          <p className="mt-3 font-accent italic text-limestone-ivory/85">{site.inscription}</p>
          <p className="mt-4 font-body text-sm text-limestone-ivory/70">
            An independent call by {site.people.luciano.name} — no church or government funding.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-verdigris">Visit</p>
            <ul className="mt-2 space-y-1.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-body text-sm text-limestone-ivory hover:text-verdigris">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-verdigris">Follow</p>
            <ul className="mt-2 space-y-1.5 font-body text-sm">
              <li>
                <a
                  href={site.social.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-limestone-ivory hover:text-verdigris"
                >
                  Instagram {site.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-limestone-ivory hover:text-verdigris"
                >
                  Facebook
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-limestone-ivory hover:text-verdigris">
                  Write to us
                </Link>
              </li>
            </ul>
            <Link
              href="/donate"
              className="mt-4 inline-block rounded-button bg-verdigris px-3 py-1.5 font-body text-sm text-limestone-ivory hover:bg-copper-raw"
            >
              Make an Offering
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[1] mx-auto mt-8 max-w-sanctuary border-t border-limestone-ivory/20 pt-4">
        <p className="font-mono text-xs text-limestone-ivory/60">
          © {site.year} {site.name} — {site.place}
        </p>
      </div>
    </footer>
  );
}
