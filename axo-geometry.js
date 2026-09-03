/* ============================================================
   axo-geometry.js — tiny isometric primitive generator.
   Pure functions, no state, no dependencies. Every shape is
   produced from numbers via iso(x, y, z), not hand-drawn paths.
   ============================================================ */
(function () {
  const RAD = Math.PI / 6; // 30°
  const COS = Math.cos(RAD), SIN = Math.sin(RAD);

  // 3D → 2D isometric projection. x = right, z = back, y = up.
  const iso = (x, y, z) => [(x - z) * COS, (x + z) * SIN - y];
  const pt  = (x, y, z) => iso(x, y, z).map(n => +n.toFixed(2)).join(',');

  const STROKE = 'stroke="currentColor" stroke-opacity=".7" stroke-width="1" vector-effect="non-scaling-stroke"';

  // Flat face: an array of [x,y,z] corners, filled with the page
  // background so it occludes whatever sits behind it.
  const face = (points) =>
    `<polygon points="${points.map(p => pt(...p)).join(' ')}" fill="var(--bg)" ${STROKE}/>`;

  const line = (p0, p1) =>
    `<line x1="${iso(...p0)[0]}" y1="${iso(...p0)[1]}" x2="${iso(...p1)[0]}" y2="${iso(...p1)[1]}" ${STROKE}/>`;

  // Small triangular arrowhead at p1, oriented along p0 → p1.
  const arrow = (p0, p1, size = 7) => {
    const [x0, y0] = iso(...p0), [x1, y1] = iso(...p1);
    const ang = Math.atan2(y1 - y0, x1 - x0);
    const a1 = ang + Math.PI * 0.82, a2 = ang - Math.PI * 0.82;
    const tip = [x1, y1];
    const l = [x1 + size * Math.cos(a1), y1 + size * Math.sin(a1)];
    const r = [x1 + size * Math.cos(a2), y1 + size * Math.sin(a2)];
    return `<polygon points="${[tip, l, r].map(p => p.map(n => n.toFixed(2)).join(',')).join(' ')}" fill="currentColor" fill-opacity=".7"/>`;
  };

  // Axis-aligned box, base at (x0, y0, z0), extents (w, h, d).
  // Only the 3 visible faces (top, near/front, right) are drawn.
  const box = (x0, z0, y0, w, d, h) => {
    const x1 = x0 + w, z1 = z0 + d, y1 = y0 + h;
    const top   = [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const front = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0]];
    const right = [[x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0]];
    return face(top) + face(front) + face(right);
  };

  // Approximate cylinder: top ellipse (filled, occluding) + two
  // tangent side lines down to the base.
  const cylinder = (cx, cz, y0, r, h, n = 16) => {
    const ring = (y) => Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return [cx + r * Math.cos(a), y, cz + r * Math.sin(a)];
    });
    const top = ring(y0 + h), base = ring(y0);
    const screenTop = top.map(p => iso(...p));
    let li = 0, ri = 0;
    screenTop.forEach((p, i) => {
      if (p[0] < screenTop[li][0]) li = i;
      if (p[0] > screenTop[ri][0]) ri = i;
    });
    return face(top) + line(top[li], base[li]) + line(top[ri], base[ri]);
  };

  window.AxoGeometry = { iso, face, line, arrow, box, cylinder };
})();
