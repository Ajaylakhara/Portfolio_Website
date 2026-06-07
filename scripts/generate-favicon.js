import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function generateFavicon() {
  try {
    console.log('--- Generating Custom Favicon ---');

    // Create SVG with a premium dark round-rect background and a white handwritten "Aj"
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
        <rect width="512" height="512" rx="128" fill="#060612" />
        <circle cx="256" cy="256" r="230" fill="none" stroke="#FF6321" stroke-width="16" opacity="0.8" />
        <text 
          x="256" 
          y="290" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          font-family="'Caveat', 'Segoe UI', cursive, sans-serif" 
          font-weight="bold" 
          font-size="280" 
          fill="#ffffff"
        >Aj</text>
      </svg>
    `;

    const svgBuffer = Buffer.from(svg);

    // Save 32x32 PNG favicon
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✅ Generated public/favicon-32x32.png');

    // Save 16x16 PNG favicon for smaller sizes (optional but nice)
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✅ Generated public/favicon-16x16.png');

    // Save ICO favicon
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✅ Generated public/favicon.ico');

    console.log('--- Favicon Generation Complete ---');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
  }
}

generateFavicon();
