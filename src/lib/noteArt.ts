/**
 * One small figure per thank-you note, in the same hand-built style as the plates in Selected work.
 * Keyed by the slug of the person's `##` heading ("Dr. Zhao" -> "dr-zhao"). Add one entry per person;
 * a person without an entry simply gets no figure. See rehypeNoteArt.ts for how they reach the page.
 */

const W = 600;
const H = 320;

// Stops text from sinking into the lines drawn behind it.
const halo = 'stroke="#E5DDCC" stroke-width="5" paint-order="stroke"';

const frame = (label: string, body: string) => `
<figure class="note-art group relative my-10 aspect-[15/8] overflow-hidden bg-sand" aria-hidden="true">
  <svg viewBox="0 0 ${W} ${H}" class="h-full w-full" focusable="false">${body}</svg>
  <span class="eyebrow absolute left-4 top-4 text-graphite">${label}</span>
</figure>`;

/** Dr. Zhao: the flight home from Lawrence to Brownsville in February 2012, and the five years that followed. */
function zhao(label: string) {
  const p0 = { x: 110, y: 250 }; // Brownsville
  const c = { x: 190, y: 70 };
  const p2 = { x: 470, y: 80 }; // Lawrence
  const at = (t: number) => ({
    x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * c.x + t ** 2 * p2.x,
    y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * c.y + t ** 2 * p2.y,
  });
  const mid = at(0.5);
  const dx = 2 * 0.5 * (c.x - p0.x) + 2 * 0.5 * (p2.x - c.x);
  const dy = 2 * 0.5 * (c.y - p0.y) + 2 * 0.5 * (p2.y - c.y);
  const angle = ((Math.atan2(dy, dx) * 180) / Math.PI).toFixed(1);

  const graticule = [0, 1, 2, 3, 4]
    .map((j) => `<path d="M 0 ${50 + j * 62} Q 300 ${50 + j * 62 + (j - 2) * 26} 600 ${50 + j * 62}" />`)
    .join('');
  const meridians = [0, 1, 2, 3, 4, 5, 6]
    .map((i) => `<path d="M ${i * 100} 0 Q ${i * 100 + (i - 3) * 14} 160 ${i * 100} 320" />`)
    .join('');
  const years = [0, 1, 2, 3, 4]
    .map((i) => `<rect x="${330 + i * 48}" y="262" width="44" height="10" class="fill-ember" opacity="${(0.3 + i * 0.175).toFixed(2)}" />`)
    .join('');

  return frame(
    label,
    `
  <g class="fill-none stroke-ink" stroke-width="0.8" opacity="0.15">${graticule}${meridians}</g>
  <path d="M ${p0.x} ${p0.y} Q ${c.x} ${c.y} ${p2.x} ${p2.y}" class="fill-none stroke-ember" stroke-width="2.4" stroke-dasharray="2 9" stroke-linecap="round" />
  <g transform="translate(${mid.x.toFixed(1)} ${mid.y.toFixed(1)}) rotate(${angle})">
    <path d="M 16 0 L -11 -9 L -6 0 L -11 9 Z" class="fill-ink transition-transform duration-[900ms] ease-out motion-safe:group-hover:translate-x-3" />
  </g>
  <circle cx="${p0.x}" cy="${p0.y}" r="9" class="fill-paper stroke-ink" stroke-width="1.5" />
  <circle cx="${p2.x}" cy="${p2.y}" r="26" class="origin-center fill-none stroke-ember [transform-box:fill-box] transition-transform duration-700 ease-out motion-safe:group-hover:scale-125" stroke-width="1.2" stroke-dasharray="4 5" />
  <circle cx="${p2.x}" cy="${p2.y}" r="10" class="fill-ember stroke-ink" stroke-width="1.5" />
  <g class="fill-graphite font-mono" font-size="15">
    <text x="${p0.x}" y="${p0.y + 34}" text-anchor="middle" ${halo}>Brownsville</text>
    <text x="${p2.x}" y="${p2.y - 40}" text-anchor="middle" ${halo}>Lawrence</text>
    <text x="${(mid.x + 22).toFixed(1)}" y="${(mid.y + 40).toFixed(1)}" ${halo}>February 2012</text>
    <text x="570" y="298" text-anchor="end" ${halo}>five years</text>
  </g>
  ${years}`,
  );
}

/** Peymon: the cross and the header, drawn on a pitch. */
function peymon(label: string) {
  const start = { x: 430, y: 288 };
  const c = { x: 260, y: 0 };
  const end = { x: 118, y: 160 };
  const at = (t: number) => ({
    x: (1 - t) ** 2 * start.x + 2 * (1 - t) * t * c.x + t ** 2 * end.x,
    y: (1 - t) ** 2 * start.y + 2 * (1 - t) * t * c.y + t ** 2 * end.y,
  });
  const balls = [0.18, 0.38, 0.58, 0.78]
    .map((t) => {
      const b = at(t);
      return `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="4.5" class="fill-ink" opacity="0.55" />`;
    })
    .join('');

  return frame(
    label,
    `
  <g class="fill-none stroke-ink" stroke-width="1.2" opacity="0.4">
    <rect x="30" y="30" width="540" height="260" />
    <path d="M 300 30 V 290" />
    <circle cx="300" cy="160" r="46" />
    <rect x="30" y="80" width="110" height="160" />
    <rect x="30" y="125" width="40" height="70" />
    <rect x="460" y="80" width="110" height="160" />
    <rect x="530" y="125" width="40" height="70" />
  </g>
  <rect x="20" y="140" width="10" height="40" class="fill-ink" />
  <path d="M ${start.x} ${start.y} Q ${c.x} ${c.y} ${end.x} ${end.y}" class="fill-none stroke-ink" stroke-width="1.6" stroke-dasharray="3 7" stroke-linecap="round" />
  ${balls}
  <circle cx="${start.x}" cy="${start.y}" r="7" class="fill-paper stroke-ink" stroke-width="1.5" />
  <circle cx="${end.x}" cy="${end.y}" r="20" class="origin-center fill-none stroke-ember [transform-box:fill-box] transition-transform duration-700 ease-out motion-safe:group-hover:scale-125" stroke-width="1.2" stroke-dasharray="4 5" />
  <circle cx="${end.x}" cy="${end.y}" r="9" class="fill-paper stroke-ink" stroke-width="1.5" />
  <path d="M ${end.x - 12} 160 H 52" class="fill-none stroke-ember transition-all duration-500 ease-out motion-safe:group-hover:[stroke-width:6]" stroke-width="3.5" stroke-linecap="round" />
  <circle cx="44" cy="160" r="8" class="fill-ember stroke-ink" stroke-width="1.5" />
  <g class="fill-graphite font-mono" font-size="15">
    <text x="${start.x - 18}" y="${start.y - 14}" text-anchor="end" ${halo}>the cross</text>
    <text x="${end.x + 24}" y="${end.y - 24}" ${halo}>the header</text>
  </g>`,
  );
}

const art: Record<string, (label: string) => string> = {
  'dr-zhao': zhao,
  peymon,
};

/** The figure for a person's heading slug, or null when none has been drawn yet. */
export function noteArt(slug: string, label: string): string | null {
  return art[slug]?.(label) ?? null;
}
