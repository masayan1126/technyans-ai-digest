import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../public/technyans/png');
const targetDir = path.join(__dirname, '../public/technyans/webp');

async function convertPngToWebp() {
  console.log('🖼️  PNG to WebP Conversion Starting...\n');

  try {
    const files = fs.readdirSync(sourceDir);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to convert\n`);

    let totalOriginalSize = 0;
    let totalConvertedSize = 0;
    let successCount = 0;

    for (const file of pngFiles) {
      const sourcePath = path.join(sourceDir, file);
      const targetFileName = file.replace(/\.png$/i, '.webp');
      const targetPath = path.join(targetDir, targetFileName);

      try {
        // Get original file size
        const originalStats = fs.statSync(sourcePath);
        totalOriginalSize += originalStats.size;

        // Convert to WebP
        await sharp(sourcePath)
          .webp({ quality: 85 })
          .toFile(targetPath);

        // Get converted file size
        const convertedStats = fs.statSync(targetPath);
        totalConvertedSize += convertedStats.size;

        const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
        const convertedSizeMB = (convertedStats.size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - convertedStats.size / originalStats.size) * 100).toFixed(1);

        console.log(`✅ ${file}`);
        console.log(`   ${originalSizeMB}MB → ${convertedSizeMB}MB (${reduction}% reduction)\n`);

        successCount++;
      } catch (error) {
        console.error(`❌ Failed to convert ${file}:`, error.message);
      }
    }

    // Summary
    console.log('═══════════════════════════════════════════════════');
    console.log('📊 Conversion Summary');
    console.log('═══════════════════════════════════════════════════');
    console.log(`Total files converted: ${successCount}/${pngFiles.length}`);
    console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Converted total size: ${(totalConvertedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Total reduction: ${((1 - totalConvertedSize / totalOriginalSize) * 100).toFixed(1)}%`);
    console.log(`Space saved: ${((totalOriginalSize - totalConvertedSize) / 1024 / 1024).toFixed(2)}MB`);
    console.log('═══════════════════════════════════════════════════');

  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

convertPngToWebp();
