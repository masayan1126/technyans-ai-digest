import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

const sizes = [
  { width: 192, height: 192, name: 'pwa-192x192.png' },
  { width: 512, height: 512, name: 'pwa-512x512.png' },
  { width: 180, height: 180, name: 'apple-touch-icon.png' },
];

async function generateIcons() {
  const inputPath = path.join(publicDir, 'technyan.webp');

  if (!fs.existsSync(inputPath)) {
    console.error('Error: technyan.webp not found in public directory');
    process.exit(1);
  }

  console.log('Generating PWA icons from technyan.webp...\n');

  for (const size of sizes) {
    const outputPath = path.join(publicDir, size.name);

    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'contain',
        background: { r: 255, g: 246, b: 208, alpha: 1 }, // #FFF6D0
      })
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated: ${size.name} (${size.width}x${size.height})`);
  }

  console.log('\n✨ All PWA icons generated successfully!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
