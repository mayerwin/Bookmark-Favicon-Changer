/**
 * Generate extension icons (valid PNGs) using pure Node.js — no deps.
 * Run with: node generate_icons.js
 *
 * Design: a classic bookmark ribbon on a transparent background,
 * with a vertical coral-to-crimson gradient and a small white gear
 * wheel accent on the larger sizes (32+) to signal "customize".
 * Anti-aliased edges via supersampling so the shape reads cleanly
 * at every size.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Ribbon gradient stops (top → bottom)
const TOP    = [244, 63, 94];   // #F43F5E rose-500
const BOTTOM = [190, 18, 60];   // #BE123C rose-700
const STAR   = [255, 255, 255]; // white

function createPNG(width, height, pixels) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  const rawData = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    rawData[y * (1 + width * 4)] = 0;
    for (let x = 0; x < width; x++) {
      const s = (y * width + x) * 4;
      const d = y * (1 + width * 4) + 1 + x * 4;
      rawData[d]     = pixels[s];
      rawData[d + 1] = pixels[s + 1];
      rawData[d + 2] = pixels[s + 2];
      rawData[d + 3] = pixels[s + 3];
    }
  }
  const idatChunk = makeChunk('IDAT', zlib.deflateSync(rawData));
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeB = Buffer.from(type, 'ascii');
  const crc = crc32(Buffer.concat([typeB, data]));
  const crcB = Buffer.alloc(4);
  crcB.writeUInt32BE(crc, 0);
  return Buffer.concat([len, typeB, data, crcB]);
}

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      table[i] = c;
    }
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

/** Signed distance inside a rectangle with rounded top corners. */
function insideRibbon(fx, fy, size) {
  // Ribbon geometry as fractions of size
  const x0 = size * 0.22;
  const x1 = size * 0.78;
  const yTop = size * 0.10;
  const yBottom = size * 0.90;
  const r = size * 0.10;           // rounded top corners
  const notchDepth = size * 0.26;  // V-notch depth from bottom

  if (fx < x0 || fx > x1 || fy < yTop || fy > yBottom) return false;

  // Rounded top-left corner
  if (fx < x0 + r && fy < yTop + r) {
    const dx = fx - (x0 + r), dy = fy - (yTop + r);
    if (dx * dx + dy * dy > r * r) return false;
  }
  // Rounded top-right corner
  if (fx > x1 - r && fy < yTop + r) {
    const dx = fx - (x1 - r), dy = fy - (yTop + r);
    if (dx * dx + dy * dy > r * r) return false;
  }
  // V-notch at bottom
  const notchStart = yBottom - notchDepth;
  if (fy > notchStart) {
    const t = (fy - notchStart) / notchDepth;
    const cx = (x0 + x1) / 2;
    const halfGap = ((x1 - x0) / 2) * t;
    if (fx > cx - halfGap && fx < cx + halfGap) return false;
  }
  return true;
}

/**
 * Gear wheel — solid disc of radius `baseR`, with `teeth` trapezoidal teeth
 * extending out to `outerR`, and a circular hole of radius `holeR` cut from
 * the center. Returns true if the given point is part of the gear.
 */
function insideGear(fx, fy, cx, cy, outerR, baseR, holeR, teeth) {
  const dx = fx - cx, dy = fy - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < holeR) return false;
  if (dist > outerR) return false;
  if (dist <= baseR) return true;
  // In the tooth zone — check angular position within one tooth period.
  let angle = Math.atan2(dy, dx);
  if (angle < 0) angle += Math.PI * 2;
  const period = (Math.PI * 2) / teeth;
  const local = (angle % period) / period;    // 0..1 within this period
  const toothSpan = 0.5;                      // tooth occupies first half
  if (local >= toothSpan) return false;       // gap between teeth
  const slope = 0.12;                         // fraction of period spent on each slope
  let heightFrac;
  if (local < slope) {
    heightFrac = local / slope;               // ramp up
  } else if (local > toothSpan - slope) {
    heightFrac = (toothSpan - local) / slope; // ramp down
  } else {
    heightFrac = 1;                           // flat top
  }
  const toothLimit = baseR + (outerR - baseR) * heightFrac;
  return dist <= toothLimit;
}

function blendInto(pixels, size, x, y, rgb, coverage) {
  if (x < 0 || x >= size || y < 0 || y >= size || coverage <= 0) return;
  const idx = (y * size + x) * 4;
  const existingA = pixels[idx + 3] / 255;
  const srcA = coverage;
  const outA = srcA + existingA * (1 - srcA);
  if (outA <= 0) return;
  pixels[idx]     = Math.round((rgb[0] * srcA + pixels[idx]     * existingA * (1 - srcA)) / outA);
  pixels[idx + 1] = Math.round((rgb[1] * srcA + pixels[idx + 1] * existingA * (1 - srcA)) / outA);
  pixels[idx + 2] = Math.round((rgb[2] * srcA + pixels[idx + 2] * existingA * (1 - srcA)) / outA);
  pixels[idx + 3] = Math.round(outA * 255);
}

/** Render a bookmark icon at the given size using 4x supersampling for AA. */
function drawBookmark(size) {
  const pixels = new Uint8Array(size * size * 4); // transparent
  const SS = 4;                                   // supersample factor
  const samples = SS * SS;
  // Gear shown at 32+; at 16 there isn't enough room for recognizable teeth.
  const drawGear = size >= 32;
  const teeth = size >= 48 ? 8 : 6;
  const gearCX = size * 0.50;
  const gearCY = size * 0.42;
  const gearOuter = size * 0.20;
  const gearBase = size * 0.15;
  const gearHole = size * 0.065;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let ribbonHits = 0;
      let gearHits = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const fx = x + (sx + 0.5) / SS;
          const fy = y + (sy + 0.5) / SS;
          if (insideRibbon(fx, fy, size)) {
            ribbonHits++;
            if (drawGear && insideGear(fx, fy, gearCX, gearCY, gearOuter, gearBase, gearHole, teeth)) {
              gearHits++;
            }
          }
        }
      }
      if (ribbonHits === 0) continue;
      // Ribbon color: vertical gradient based on pixel center
      const t = y / (size - 1);
      const r = Math.round(TOP[0] + (BOTTOM[0] - TOP[0]) * t);
      const g = Math.round(TOP[1] + (BOTTOM[1] - TOP[1]) * t);
      const b = Math.round(TOP[2] + (BOTTOM[2] - TOP[2]) * t);
      const ribbonCov = (ribbonHits - gearHits) / samples;
      blendInto(pixels, size, x, y, [r, g, b], ribbonCov);
      if (gearHits > 0) {
        blendInto(pixels, size, x, y, STAR, gearHits / samples);
      }
    }
  }
  return pixels;
}

const sizes = [16, 32, 48, 128];
const outDir = path.join(__dirname, 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

for (const size of sizes) {
  const pixels = drawBookmark(size);
  const png = createPNG(size, size, pixels);
  const filePath = path.join(outDir, `icon${size}.png`);
  fs.writeFileSync(filePath, png);
  console.log(`Generated ${filePath} (${png.length} bytes)`);
}

console.log('All icons generated successfully.');
