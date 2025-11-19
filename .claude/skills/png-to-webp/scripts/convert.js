#!/usr/bin/env node

/**
 * PNG to WebP Conversion Script
 *
 * Converts image files (PNG, JPEG, TIFF, etc.) to WebP format using sharp.
 *
 * Usage:
 *   node convert.js [options]
 *
 * Options:
 *   -s, --source <path>       Source directory (default: public/technyans/png)
 *   -t, --target <path>       Target directory (default: public/technyans/webp)
 *   -q, --quality <number>    WebP quality 0-100 (default: 85)
 *   -a, --alpha-quality <num> Alpha channel quality 0-100 (default: same as quality)
 *   -l, --lossless            Use lossless compression
 *   -e, --effort <number>     Reduction effort 0-6 (default: 4)
 *   --min-size                Minimize file size (max effort)
 *   --skip-existing           Skip files that already exist in target
 *   -f, --formats <list>      Comma-separated input formats (default: png,jpg,jpeg)
 *   --preset <name>           WebP preset: default,photo,picture,drawing,icon,text
 *   -h, --help                Show help
 *
 * Examples:
 *   node convert.js
 *   node convert.js --source public/images --target public/images-webp
 *   node convert.js --quality 95 --alpha-quality 100
 *   node convert.js --lossless
 *   node convert.js --skip-existing --effort 6
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default configuration
const DEFAULT_CONFIG = {
  sourceDir: path.join(__dirname, '../../../public/technyans/png'),
  targetDir: path.join(__dirname, '../../../public/technyans/webp'),
  quality: 85,
  alphaQuality: null, // null = same as quality
  lossless: false,
  reductionEffort: 4,
  minSize: false,
  skipExisting: false,
  formats: ['png', 'jpg', 'jpeg'],
  preset: 'default'
};

// Parse command line arguments
function parseArgs(args) {
  const config = { ...DEFAULT_CONFIG };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const next = args[i + 1];

    switch (arg) {
      case '-h':
      case '--help':
        printHelp();
        process.exit(0);
        break;

      case '-s':
      case '--source':
        config.sourceDir = path.resolve(next);
        i++;
        break;

      case '-t':
      case '--target':
        config.targetDir = path.resolve(next);
        i++;
        break;

      case '-q':
      case '--quality':
        config.quality = parseInt(next, 10);
        if (config.quality < 0 || config.quality > 100) {
          console.error('Error: Quality must be between 0 and 100');
          process.exit(1);
        }
        i++;
        break;

      case '-a':
      case '--alpha-quality':
        config.alphaQuality = parseInt(next, 10);
        if (config.alphaQuality < 0 || config.alphaQuality > 100) {
          console.error('Error: Alpha quality must be between 0 and 100');
          process.exit(1);
        }
        i++;
        break;

      case '-l':
      case '--lossless':
        config.lossless = true;
        break;

      case '-e':
      case '--effort':
        config.reductionEffort = parseInt(next, 10);
        if (config.reductionEffort < 0 || config.reductionEffort > 6) {
          console.error('Error: Reduction effort must be between 0 and 6');
          process.exit(1);
        }
        i++;
        break;

      case '--min-size':
        config.minSize = true;
        break;

      case '--skip-existing':
        config.skipExisting = true;
        break;

      case '-f':
      case '--formats':
        config.formats = next.split(',').map(f => f.trim().toLowerCase());
        i++;
        break;

      case '--preset':
        const validPresets = ['default', 'photo', 'picture', 'drawing', 'icon', 'text'];
        if (!validPresets.includes(next)) {
          console.error(`Error: Invalid preset. Choose from: ${validPresets.join(', ')}`);
          process.exit(1);
        }
        config.preset = next;
        i++;
        break;
    }
  }

  return config;
}

function printHelp() {
  console.log(`
PNG to WebP Conversion Script

Usage:
  node convert.js [options]

Options:
  -s, --source <path>       Source directory (default: public/technyans/png)
  -t, --target <path>       Target directory (default: public/technyans/webp)
  -q, --quality <number>    WebP quality 0-100 (default: 85)
  -a, --alpha-quality <num> Alpha channel quality 0-100 (default: same as quality)
  -l, --lossless            Use lossless compression
  -e, --effort <number>     Reduction effort 0-6 (default: 4)
  --min-size                Minimize file size (max effort)
  --skip-existing           Skip files that already exist in target
  -f, --formats <list>      Comma-separated input formats (default: png,jpg,jpeg)
  --preset <name>           WebP preset: default,photo,picture,drawing,icon,text
  -h, --help                Show this help

Examples:
  # Basic usage (uses defaults)
  node convert.js

  # Custom source and target directories
  node convert.js --source public/images --target public/images-webp

  # High-quality conversion for logos
  node convert.js --quality 95 --alpha-quality 100

  # Lossless conversion
  node convert.js --lossless

  # Maximum compression effort
  node convert.js --effort 6 --min-size

  # Skip already converted files
  node convert.js --skip-existing

  # Convert only PNG files
  node convert.js --formats png

  # Use photo preset
  node convert.js --preset photo --quality 85
`);
}

async function convertToWebp(config) {
  console.log('🖼️  PNG to WebP Conversion Starting...\n');

  // Display configuration
  console.log('Configuration:');
  console.log(`  Source:      ${config.sourceDir}`);
  console.log(`  Target:      ${config.targetDir}`);
  console.log(`  Quality:     ${config.lossless ? 'lossless' : config.quality}`);
  if (config.alphaQuality !== null && !config.lossless) {
    console.log(`  Alpha:       ${config.alphaQuality}`);
  }
  console.log(`  Effort:      ${config.reductionEffort}`);
  console.log(`  Preset:      ${config.preset}`);
  console.log(`  Formats:     ${config.formats.join(', ')}`);
  if (config.skipExisting) {
    console.log(`  Mode:        Skip existing files`);
  }
  if (config.minSize) {
    console.log(`  Optimize:    Minimize file size`);
  }
  console.log('');

  try {
    // Check if source directory exists
    if (!fs.existsSync(config.sourceDir)) {
      console.error(`❌ Error: Source directory does not exist: ${config.sourceDir}`);
      process.exit(1);
    }

    // Create target directory if it doesn't exist
    if (!fs.existsSync(config.targetDir)) {
      fs.mkdirSync(config.targetDir, { recursive: true });
      console.log(`📁 Created target directory: ${config.targetDir}\n`);
    }

    // Get list of files
    const files = fs.readdirSync(config.sourceDir);

    // Filter by supported formats
    const formatPattern = new RegExp(`\\.(${config.formats.join('|')})$`, 'i');
    const imageFiles = files.filter(file => formatPattern.test(file));

    if (imageFiles.length === 0) {
      console.log(`⚠️  No ${config.formats.join('/')} files found in ${config.sourceDir}`);
      process.exit(0);
    }

    console.log(`Found ${imageFiles.length} image file(s) to process\n`);

    let totalOriginalSize = 0;
    let totalConvertedSize = 0;
    let successCount = 0;
    let skippedCount = 0;
    let failedCount = 0;

    // Build sharp WebP options
    const webpOptions = {
      quality: config.lossless ? undefined : config.quality,
      alphaQuality: config.alphaQuality,
      lossless: config.lossless,
      reductionEffort: config.reductionEffort,
      preset: config.preset
    };

    if (config.minSize) {
      webpOptions.effort = 6;
    }

    // Remove null/undefined values
    Object.keys(webpOptions).forEach(key => {
      if (webpOptions[key] === null || webpOptions[key] === undefined) {
        delete webpOptions[key];
      }
    });

    // Process each file
    for (const file of imageFiles) {
      const sourcePath = path.join(config.sourceDir, file);
      const targetFileName = file.replace(/\.\w+$/, '.webp');
      const targetPath = path.join(config.targetDir, targetFileName);

      try {
        // Skip if target exists and skipExisting is true
        if (config.skipExisting && fs.existsSync(targetPath)) {
          console.log(`⏭️  ${file} (already exists)`);
          skippedCount++;
          continue;
        }

        // Get original file size
        const originalStats = fs.statSync(sourcePath);
        totalOriginalSize += originalStats.size;

        // Convert to WebP
        await sharp(sourcePath)
          .webp(webpOptions)
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
        failedCount++;
      }
    }

    // Summary
    console.log('═══════════════════════════════════════════════════');
    console.log('📊 Conversion Summary');
    console.log('═══════════════════════════════════════════════════');
    console.log(`Total files found:    ${imageFiles.length}`);
    console.log(`Successfully converted: ${successCount}`);
    if (skippedCount > 0) {
      console.log(`Skipped (existing):    ${skippedCount}`);
    }
    if (failedCount > 0) {
      console.log(`Failed:               ${failedCount}`);
    }

    if (successCount > 0) {
      console.log(`Original total size:  ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`Converted total size: ${(totalConvertedSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`Total reduction:      ${((1 - totalConvertedSize / totalOriginalSize) * 100).toFixed(1)}%`);
      console.log(`Space saved:          ${((totalOriginalSize - totalConvertedSize) / 1024 / 1024).toFixed(2)}MB`);
    }
    console.log('═══════════════════════════════════════════════════');

    // Exit code based on results
    if (failedCount > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }

  } catch (error) {
    console.error('\n❌ Error during conversion:', error);
    process.exit(1);
  }
}

// Export for programmatic usage
export { convertToWebp };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const config = parseArgs(process.argv.slice(2));
  convertToWebp(config);
}