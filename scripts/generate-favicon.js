import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

function wrapPngInIco(pngBuffer, width = 32, height = 32) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(1, 4); // Number of images

  const directory = Buffer.alloc(16);
  directory.writeUInt8(width, 0);
  directory.writeUInt8(height, 1);
  directory.writeUInt8(0, 2); // Color count
  directory.writeUInt8(0, 3); // Reserved
  directory.writeUInt16LE(1, 4); // Color planes
  directory.writeUInt16LE(32, 6); // Bits per pixel
  directory.writeUInt32LE(pngBuffer.length, 8); // Image size in bytes
  directory.writeUInt32LE(22, 12); // Offset of image data

  return Buffer.concat([header, directory, pngBuffer]);
}

async function generateFavicon() {
  try {
    console.log('--- Generating Favicons from Fav Icon.svg ---');

    const srcSvgPath = path.join(publicDir, 'Fav Icon.svg');
    const destSvgPath = path.join(publicDir, 'favicon.svg');

    // 1. Copy source SVG to favicon.svg
    if (fs.existsSync(srcSvgPath)) {
      fs.copyFileSync(srcSvgPath, destSvgPath);
      console.log('✅ Copied Fav Icon.svg to favicon.svg');
    } else {
      console.error('❌ Source Fav Icon.svg not found!');
      return;
    }

    const svgBuffer = fs.readFileSync(destSvgPath);

    // 2. Save 32x32 PNG favicon
    const png32Buffer = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32Buffer);
    console.log('✅ Generated public/favicon-32x32.png');

    // 3. Save 16x16 PNG favicon
    const png16Buffer = await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16Buffer);
    console.log('✅ Generated public/favicon-16x16.png');

    // 4. Save standard Windows ICO file
    const icoBuffer = wrapPngInIco(png32Buffer, 32, 32);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('✅ Generated public/favicon.ico');

    console.log('--- Favicon Generation Complete ---');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
  }
}

generateFavicon();
