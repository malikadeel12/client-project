/**
 * What: Sticky fundraising ring + stone-marked breakdown.
 * Business rule: Raised amount is 0 until the first real offering is recorded.
 */
import { site } from "@/content/site";
import { StoneChip } from "@/components/svg/icons";

export function ImpactSidebar() {
  const pct = Math.round((site.donate.raisedUsd / site.donate.goalUsd) * 100);
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <aside className="sticky top-[140px] hidden w-[240px] shrink-0 lg:block">
      <svg viewBox="0 0 140 140" className="mx-auto h-[160px] w-[160px]">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#E8E0D4" strokeWidth="8" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#4A7C6F"
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="butt"
          transform="rotate(-90 70 70)"
        />
        <text x="70" y="74" textAnchor="middle" fill="#3D2817" fontFamily="IBM Plex Mono, monospace" fontSize="16">
          {pct}%
        </text>
      </svg>
      <p className="mt-2 text-center font-mono text-xs text-moss-stone">
        ${site.donate.raisedUsd.toLocaleString()} of ${site.donate.goalUsd.toLocaleString()}
      </p>
      <p className="mt-2 font-body text-sm text-cocoa-bean">{site.donate.goalNote}</p>
      <ul className="mt-5 space-y-2">
        {site.donate.breakdown.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5 font-mono text-xs text-volcanic-obsidian">
            <StoneChip className="h-3 w-3 text-verdigris" />
            {item.label} · {item.share}%
          </li>
        ))}
      </ul>
      <p className="mt-5 font-accent italic text-cocoa-bean">{site.donate.sidebarQuote}</p>
    </aside>
  );
}
