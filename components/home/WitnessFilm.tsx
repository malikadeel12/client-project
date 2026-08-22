/**
 * What: Expedition films from Client-data, compressed for the web.
 * Why: The original .MOV files are 13–250MB. A home page cannot carry those.
 *      These are short, silent, web copies of the same journeys.
 */

const films = [
  {
    src: "/videos/capela-de-sao-miguel.mp4",
    title: "Inside the chapel",
    note: "The ruin as Luciano and Inês found it — 24 June 2025",
  },
  {
    src: "/videos/expedition-crossing.mp4",
    title: "The crossing",
    note: "Reached only by sea from Porto Alegre",
  },
  {
    src: "/videos/expedition-shore.mp4",
    title: "The shore of São Miguel",
    note: "The last steps before the stone",
  },
] as const;

export function WitnessFilm() {
  return (
    <section className="bg-volcanic-obsidian px-3 py-16">
      <div className="mx-auto max-w-sanctuary">
        <p className="font-mono text-xs tracking-widest text-verdigris">FROM THE EXPEDITION</p>
        <h2 className="mt-2 font-display text-3xl tracking-liturgical text-limestone-ivory">
          Moving witnesses
        </h2>
        <p className="mt-2 max-w-editorial font-accent italic text-limestone-ivory/75">
          Films from the 2025 landing — shortened so the page stays light. The long masters stay in Client-data.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {films.map((film) => (
            <figure key={film.src}>
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-[4/5] w-full bg-black object-cover"
                src={film.src}
              />
              <figcaption className="mt-2">
                <p className="font-display text-sm tracking-liturgical text-limestone-ivory">{film.title}</p>
                <p className="font-mono text-[11px] text-limestone-ivory/60">{film.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
