import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source directories
const rootDir = path.resolve(__dirname, '..');
const srcAssetsDir = path.join(rootDir, 'src', 'assets');
const projectingDir = path.join(srcAssetsDir, 'projecting');
const hdIconsDir = path.join(srcAssetsDir, 'icon', 'hd');
const profileImgPath = path.join(srcAssetsDir, 'image.png');
const faviconSrcPath = path.join(srcAssetsDir, 'Photos', 'Ajay.ico');
const techImagesDir = path.join(srcAssetsDir, 'Images');

// Define output directories under public/
const publicDir = path.join(rootDir, 'public');
const optimizedDir = path.join(publicDir, 'optimized');
const optimizedProjectingDir = path.join(optimizedDir, 'projecting');
const optimizedHdIconsDir = path.join(optimizedDir, 'icon', 'hd');

// Ensure output directories exist
function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

async function optimizeImages() {
  try {
    console.log('--- Starting Image Optimization System ---');

    ensureDirExists(optimizedDir);
    ensureDirExists(optimizedProjectingDir);
    ensureDirExists(optimizedHdIconsDir);

    // 1. Optimize Profile Image
    if (fs.existsSync(profileImgPath)) {
      console.log('Optimizing profile image...');
      await sharp(profileImgPath)
        .resize({ width: 640, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(optimizedDir, 'profile.webp'));
      console.log('✅ Profile image optimized to WebP successfully!');
    } else {
      console.warn(`⚠️ Profile image not found at: ${profileImgPath}`);
    }

    // 2. Optimize Project Screenshots
    if (fs.existsSync(projectingDir)) {
      console.log('Optimizing project screenshots...');
      const projectFiles = fs.readdirSync(projectingDir);
      for (const file of projectFiles) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const srcPath = path.join(projectingDir, file);
          const nameWithoutExt = path.basename(file, ext);
          const destPath = path.join(optimizedProjectingDir, `${nameWithoutExt}.webp`);

          await sharp(srcPath)
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 75 })
            .toFile(destPath);
          console.log(`✅ Optimized project image: ${file} -> ${nameWithoutExt}.webp`);
        }
      }
    } else {
      console.warn(`⚠️ Project screenshots directory not found at: ${projectingDir}`);
    }

    // 3. Optimize HD Icons
    if (fs.existsSync(hdIconsDir)) {
      console.log('Optimizing HD background orbiting icons...');
      const iconFiles = fs.readdirSync(hdIconsDir);
      for (const file of iconFiles) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const srcPath = path.join(hdIconsDir, file);
          const nameWithoutExt = path.basename(file, ext);
          const destPath = path.join(optimizedHdIconsDir, `${nameWithoutExt}.webp`);

          await sharp(srcPath)
            .resize({ width: 128, height: 128, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .webp({ quality: 80 })
            .toFile(destPath);
          console.log(`✅ Optimized HD icon: ${file} -> ${nameWithoutExt}.webp`);
        }
      }
    } else {
      console.warn(`⚠️ HD icons directory not found at: ${hdIconsDir}`);
    }

    // 3.5. Optimize Tech Stack Logos (Resize large 512x512 PNGs in place to 64x64/96x96 for extreme FCP/LCP size reductions)
    if (fs.existsSync(techImagesDir)) {
      console.log('Optimizing tech stack logos in-place...');
      const techFiles = fs.readdirSync(techImagesDir);
      for (const file of techFiles) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const srcPath = path.join(techImagesDir, file);
          console.log(`Processing tech logo: ${file}...`);
          try {
            const buffer = await sharp(srcPath)
              .resize({ width: 96, height: 96, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
              .png({ compressionLevel: 9, quality: 80 })
              .toBuffer();
            await fs.promises.writeFile(srcPath, buffer);
            console.log(`✅ Compressed in-place: ${file} to 96x96px`);
          } catch (err) {
            console.error(`❌ Failed to compress tech logo ${file}:`, err);
          }
        }
      }
    } else {
      console.warn(`⚠️ Tech images directory not found at: ${techImagesDir}`);
    }

    // 4. Optimize Favicon (Extract first layer or convert from logo/profile)
    console.log('Optimizing Favicon...');
    let faviconProcessed = false;

    // Try processing source favicon Ajay.ico
    if (fs.existsSync(faviconSrcPath)) {
      try {
        // ICO might fail depending on sharp's installation config, so we wrap it
        await sharp(faviconSrcPath)
          .resize(32, 32)
          .png()
          .toFile(path.join(publicDir, 'favicon-32x32.png'));

        await sharp(faviconSrcPath)
          .resize(32, 32)
          .toFile(path.join(publicDir, 'favicon.ico'));

        console.log('✅ Favicon optimized successfully from Ajay.ico!');
        faviconProcessed = true;
      } catch (err) {
        console.warn('⚠️ Sharp failed to parse Ajay.ico. Falling back to profile image for favicon...');
      }
    }

    // Fallback: Use profile image if Ajay.ico failed or is missing
    if (!faviconProcessed && fs.existsSync(profileImgPath)) {
      try {
        await sharp(profileImgPath)
          .resize(32, 32)
          .png()
          .toFile(path.join(publicDir, 'favicon-32x32.png'));

        // Output standard lightweight ico
        await sharp(profileImgPath)
          .resize(32, 32)
          .toFile(path.join(publicDir, 'favicon.ico'));

        console.log('✅ Favicon generated from profile image successfully!');
      } catch (err) {
        console.error('❌ Failed to generate fallback favicon:', err);
      }
    }

    console.log('--- Image Optimization System Complete! ---');
  } catch (error) {
    console.error('❌ Critical error during image optimization:', error);
  }
}

optimizeImages();
