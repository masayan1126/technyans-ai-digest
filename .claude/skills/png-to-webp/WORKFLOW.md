# PNG to WebP Conversion Workflow

## Pre-execution Checklist

Before starting the conversion process, verify:

1. **Source directory exists** and contains image files
2. **Target directory** is specified or will be created
3. **sharp library** is available (already installed via Astro dependencies)
4. **Disk space** is sufficient for converted files
5. **File permissions** allow reading source and writing target

## Conversion Parameters Selection

### Quality Settings

Choose quality based on image usage:

| Use Case | Recommended Quality | Description |
|----------|-------------------|-------------|
| Icons & logos | 90-95 | Highest quality for small, detailed images |
| Photos & hero images | 80-85 | Balanced quality and size for photographs |
| Background images | 75-80 | Lower quality acceptable for backgrounds |
| Thumbnails | 70-75 | Smaller size priority |

### Alpha Channel Handling

- **alphaQuality**: Set separately from main quality (default: same as quality)
- **lossless**: Use `true` for images requiring perfect transparency

### Format Support

Input formats supported by sharp:
- PNG (most common)
- JPEG/JPG
- TIFF
- GIF (first frame only)
- SVG (rasterized)
- WebP (re-encoding)
- AVIF

## Execution Flow

### Method 1: Using the Conversion Script

#### Basic Usage
```bash
node .claude/skills/png-to-webp/scripts/convert.js
```

#### Custom Parameters
```bash
# Specify source and target directories
node .claude/skills/png-to-webp/scripts/convert.js \
  --source public/images/png \
  --target public/images/webp \
  --quality 85

# High-quality conversion for icons
node .claude/skills/png-to-webp/scripts/convert.js \
  --source public/icons \
  --target public/icons-webp \
  --quality 95

# Lossless conversion (perfect quality, larger files)
node .claude/skills/png-to-webp/scripts/convert.js \
  --source public/photos \
  --target public/photos-webp \
  --lossless
```

#### Available Options
- `--source, -s`: Source directory (default: `public/technyans/png`)
- `--target, -t`: Target directory (default: `public/technyans/webp`)
- `--quality, -q`: WebP quality 0-100 (default: 85)
- `--alpha-quality, -a`: Alpha channel quality 0-100 (default: same as quality)
- `--lossless, -l`: Use lossless compression (flag)
- `--skip-existing`: Skip files that already exist in target (flag)
- `--formats, -f`: Comma-separated input formats (default: "png,jpg,jpeg")

### Method 2: Via npm Script

Add to `package.json`:
```json
{
  "scripts": {
    "convert:webp": "node .claude/skills/png-to-webp/scripts/convert.js",
    "convert:webp:hq": "node .claude/skills/png-to-webp/scripts/convert.js --quality 95",
    "convert:webp:lossless": "node .claude/skills/png-to-webp/scripts/convert.js --lossless"
  }
}
```

Then run:
```bash
npm run convert:webp
```

### Method 3: Programmatic Usage

```javascript
import { convertToWebp } from './.claude/skills/png-to-webp/scripts/convert.js';

await convertToWebp({
  sourceDir: 'public/images',
  targetDir: 'public/images-webp',
  quality: 85,
  alphaQuality: 90,
  skipExisting: true
});
```

## Step-by-Step Process

1. **Preparation**
   - Create target directory if it doesn't exist
   - Scan source directory for supported image files
   - Calculate total files to process

2. **Conversion Loop**
   - For each image file:
     - Load source image with sharp
     - Apply WebP conversion with specified parameters
     - Save to target directory with `.webp` extension
     - Track original vs. converted file size
     - Log progress and statistics

3. **Post-Processing**
   - Display conversion summary:
     - Total files processed
     - Success/failure count
     - Total size before/after
     - Compression ratio
     - Space saved

4. **Verification** (optional)
   - Verify all target files exist
   - Check file sizes are reasonable
   - Validate image dimensions match

## Error Handling

### Common Errors and Solutions

#### "Cannot find module 'sharp'"
**Solution**: Sharp is already installed via Astro. Ensure you're running from project root.

#### "ENOENT: no such file or directory"
**Solution**: Verify source directory path is correct. Use absolute path or relative from project root.

#### "EACCES: permission denied"
**Solution**: Check file/directory permissions. Ensure write access to target directory.

#### "Input file is missing"
**Solution**: File may be corrupted or not a valid image. Skip and continue with remaining files.

#### Memory errors with large batches
**Solution**: Process files in smaller batches or increase Node.js memory limit:
```bash
node --max-old-space-size=4096 .claude/skills/png-to-webp/scripts/convert.js
```

### Error Recovery Strategy

The conversion script implements robust error handling:
- Individual file failures don't stop batch processing
- Each error is logged with filename and reason
- Summary includes success/failure counts
- Exit code reflects overall success (0) or partial failure (1)

## Integration with CI/CD

### Git Pre-commit Hook

Auto-convert PNG files on commit:

```bash
# .git/hooks/pre-commit
#!/bin/bash
node .claude/skills/png-to-webp/scripts/convert.js --skip-existing
git add public/*/webp/
```

### GitHub Actions Workflow

```yaml
name: Convert Images to WebP
on:
  push:
    paths:
      - 'public/**/png/**'
jobs:
  convert:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: node .claude/skills/png-to-webp/scripts/convert.js
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Auto-convert images to WebP"
```

## Best Practices

1. **Keep originals**: Always maintain source PNG files for future editing
2. **Version control**: Commit both source and WebP files (or use git-lfs)
3. **Naming convention**: Maintain same filename with `.webp` extension
4. **Directory structure**: Mirror source structure in target directory
5. **Quality testing**: Test different quality settings on sample images first
6. **Fallback strategy**: Ensure browsers without WebP support have fallbacks

## Performance Optimization

- **Parallel processing**: Script processes files sequentially by default (safe for memory)
- **Batch size**: Process in groups of 50-100 files for large directories
- **Skip existing**: Use `--skip-existing` to avoid re-processing
- **Format filtering**: Only process necessary formats with `--formats` option

## Next Steps

After conversion:
1. Update HTML/JSX to use WebP files
2. Implement fallback for older browsers (optional)
3. Verify visual quality in target browsers
4. Measure actual performance improvements
5. Consider adding `<picture>` elements for progressive enhancement

See [BEST_PRACTICES.md](./BEST_PRACTICES.md) for quality optimization guidelines.