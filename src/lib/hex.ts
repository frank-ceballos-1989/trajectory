/** Geometry helpers for the hand-built SVG figures. */

export function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + Math.PI / 6; // pointy-top
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
}

/** Honeycomb lattice as polygon point-strings. */
export function hexGrid(cols: number, rows: number, r: number, ox = 0, oy = 0): string[] {
  const w = Math.sqrt(3) * r;
  const h = 1.5 * r;
  const out: string[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      out.push(hexPoints(ox + i * w + (j % 2 ? w / 2 : 0), oy + j * h, r));
    }
  }
  return out;
}

/** Small deterministic PRNG so generated figures are identical on every build. */
export function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
