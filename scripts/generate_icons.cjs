'use strict';
// Kitap ikonu + "EN" yazısı → icon-192.png ve icon-512.png
const sharp = require('sharp');
const path  = require('path');
const OUT   = path.join(__dirname, '..', 'public');

// SVG: koyu lacivert zemin, beyaz açık kitap, sarı "EN" yazısı
const svgTemplate = (size) => {
  const s = size;
  const r = Math.round(s * 0.18); // köşe yuvarlaklığı
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
  <!-- arka plan -->
  <rect width="${s}" height="${s}" rx="${r}" fill="#1e1b4b"/>

  <!-- sol sayfa -->
  <path d="M${s*.18} ${s*.28} Q${s*.42} ${s*.22} ${s*.5} ${s*.30}
           L${s*.5} ${s*.74} Q${s*.42} ${s*.66} ${s*.18} ${s*.72} Z"
        fill="#e0e7ff" stroke="#a5b4fc" stroke-width="${s*.012}"/>

  <!-- sağ sayfa -->
  <path d="M${s*.82} ${s*.28} Q${s*.58} ${s*.22} ${s*.5} ${s*.30}
           L${s*.5} ${s*.74} Q${s*.58} ${s*.66} ${s*.82} ${s*.72} Z"
        fill="#c7d2fe" stroke="#a5b4fc" stroke-width="${s*.012}"/>

  <!-- orta çizgi (cilt) -->
  <line x1="${s*.5}" y1="${s*.30}" x2="${s*.5}" y2="${s*.74}"
        stroke="#818cf8" stroke-width="${s*.015}"/>

  <!-- satır çizgileri sol sayfa -->
  <line x1="${s*.22}" y1="${s*.41}" x2="${s*.46}" y2="${s*.39}" stroke="#a5b4fc" stroke-width="${s*.008}" opacity=".7"/>
  <line x1="${s*.22}" y1="${s*.49}" x2="${s*.46}" y2="${s*.47}" stroke="#a5b4fc" stroke-width="${s*.008}" opacity=".7"/>
  <line x1="${s*.22}" y1="${s*.57}" x2="${s*.46}" y2="${s*.55}" stroke="#a5b4fc" stroke-width="${s*.008}" opacity=".7"/>

  <!-- "EN" yazısı -->
  <text x="${s*.5}" y="${s*.885}"
        font-family="Arial Black, Arial, sans-serif"
        font-weight="900"
        font-size="${s*.22}"
        fill="#fbbf24"
        text-anchor="middle"
        letter-spacing="${s*.01}">EN</text>
</svg>`;
};

async function makeIcon(size, filename) {
  const svg = Buffer.from(svgTemplate(size));
  await sharp(svg)
    .png()
    .toFile(path.join(OUT, filename));
  console.log(`Oluşturuldu: ${filename} (${size}x${size})`);
}

(async () => {
  await makeIcon(192, 'icon-192.png');
  await makeIcon(512, 'icon-512.png');
  console.log('İkonlar hazır!');
})();
