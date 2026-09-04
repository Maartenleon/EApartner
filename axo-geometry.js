/* ============================================================
   axo-geometry.js — tiny isometric primitive generator.
   Pure functions, no state except a running bounds tracker used
   to size the SVG viewBox from whatever gets drawn. Every shape
   is produced from numbers via iso(x, y, z), not hand-drawn paths.

   World axes: x, y = horizontal plane, z = up. One world unit
   (u) = 18px, baked into iso() so callers work in plain u values.
   ============================================================ */
(function () {
  const RAD = Math.PI / 6; // 30°
  const COS = Math.cos(RAD), SIN = Math.sin(RAD);
  const U = 18; // px per world unit

  // 3D → 2D true-isometric projection.
  const iso = (x, y, z) => [(x - y) * COS * U, (x + y) * SIN * U - z * U];

  /* ── Bounds tracking, so the SVG viewBox is computed, not hardcoded ── */
  let bounds = null;
  const resetBounds = () => { bounds = null; };
  const getBounds = () => bounds;
  const track = (sx, sy) => {
    if (!bounds) bounds = { minX: sx, maxX: sx, minY: sy, maxY: sy };
    else {
      if (sx < bounds.minX) bounds.minX = sx;
      if (sx > bounds.maxX) bounds.maxX = sx;
      if (sy < bounds.minY) bounds.minY = sy;
      if (sy > bounds.maxY) bounds.maxY = sy;
    }
  };
  const proj = (x, y, z) => { const p = iso(x, y, z); track(p[0], p[1]); return p; };
  const pt   = (x, y, z) => proj(x, y, z).map(n => +n.toFixed(2)).join(',');

  // Stroke opacity is controlled per-layer by the component (default /
  // active / inactive), via CSS on the enclosing <g data-layer>. Faces
  // stay fully opaque so hidden-line removal always reads correctly.
  const STROKE = 'stroke="currentColor" stroke-width="1" vector-effect="non-scaling-stroke"';
  const face = (points) =>
    `<polygon points="${points.map(p => pt(...p)).join(' ')}" fill="var(--bg)" ${STROKE}/>`;
  // Same outline, no fill — used for the back/left faces, which sit
  // behind the solid ones. Drawing them un-filled and first means the
  // solid faces still occlude the overlapping part, but the edges that
  // stick out beyond the solid silhouette remain visible as a wireframe.
  const wireface = (points) =>
    `<polygon points="${points.map(p => pt(...p)).join(' ')}" fill="none" ${STROKE}/>`;

  // Axis-aligned box: base at (x0, y0, z0), extents (w, d, h) along
  // x, y, z. Top, front (y0) and right (x0+w) are drawn solid, each
  // face's opaque fill occluding whatever sits behind it (painter's
  // algorithm: draw back-to-front, and callers order calls to box()
  // accordingly). Back (y0+d) and left (x0) are drawn first, as bare
  // outlines, so the box reads as a full wireframe cube rather than
  // just its 3 visible faces.
  const box = (x0, y0, z0, w, d, h) => {
    const x1 = x0 + w, y1 = y0 + d, z1 = z0 + h;
    const top   = [[x0,y0,z1], [x1,y0,z1], [x1,y1,z1], [x0,y1,z1]];
    const front = [[x0,y0,z0], [x1,y0,z0], [x1,y0,z1], [x0,y0,z1]];
    const right = [[x1,y0,z0], [x1,y1,z0], [x1,y1,z1], [x1,y0,z1]];
    const back  = [[x1,y1,z0], [x0,y1,z0], [x0,y1,z1], [x1,y1,z1]];
    const left  = [[x0,y1,z0], [x0,y0,z0], [x0,y0,z1], [x0,y1,z1]];
    return wireface(back) + wireface(left) + face(top) + face(front) + face(right);
  };

  window.AxoGeometry = { iso, box, face, resetBounds, getBounds };
})();
