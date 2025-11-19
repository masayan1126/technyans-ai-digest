# WebP Conversion Best Practices

## Quality Guidelines by Use Case

### High-Fidelity Images (Quality 90-100)

**Use for**:
- Logos and brand assets
- Icons in hero sections
- Product detail images (e-commerce)
- Portfolio photography
- Images that will be viewed at large sizes

**Settings**:
```javascript
{
  quality: 95,
  alphaQuality: 100,  // Perfect transparency for logos
  reductionEffort: 6   // Extra compression effort
}
```

**Expected results**:
- 80-90% file size reduction vs. PNG
- No visible quality loss
- Suitable for 4K displays

**Example**:
```javascript
// Company logo conversion
sharp('logo.png')
  .webp({ quality: 95, alphaQuality: 100 })
  .toFile('logo.webp');
```

### Standard Quality Images (Quality 80-90)

**Use for**:
- General website photos
- Blog post images
- Team member photos
- Case study visuals
- Header backgrounds

**Settings**:
```javascript
{
  quality: 85,        // Sweet spot for photos
  reductionEffort: 4  // Balanced speed/size
}
```

**Expected results**:
- 90-95% file size reduction vs. PNG
- Imperceptible quality loss
- Fast encoding speed

**Example**:
```javascript
// Hero image conversion
sharp('hero.png')
  .webp({ quality: 85 })
  .toFile('hero.webp');
```

### Acceptable Quality (Quality 70-80)

**Use for**:
- Background images
- Thumbnails
- Grid view images
- Non-critical decorative images
- Images displayed at small sizes

**Settings**:
```javascript
{
  quality: 75,
  reductionEffort: 4
}
```

**Expected results**:
- 95-97% file size reduction
- Slight quality loss (usually acceptable)
- Very small file sizes

**Example**:
```javascript
// Background pattern
sharp('background.png')
  .webp({ quality: 75 })
  .toFile('background.webp');
```

### Low Quality / Placeholder (Quality 50-70)

**Use for**:
- Blur-up placeholders (progressive loading)
- Tiny thumbnails
- Extreme optimization scenarios

**Settings**:
```javascript
{
  quality: 60,
  reductionEffort: 6
}
```

**Expected results**:
- 97-98% file size reduction
- Visible artifacts on close inspection
- Ultra-small files

**Example**:
```javascript
// Blur placeholder (displayed small, then replaced)
sharp('photo.jpg')
  .resize(40, 30)  // Tiny size
  .webp({ quality: 50 })
  .toFile('placeholder.webp');
```

## Alpha Channel Optimization

### When to Use High alphaQuality

**Scenario 1: Logo with complex transparency**
```javascript
sharp('complex-logo.png')
  .webp({
    quality: 90,
    alphaQuality: 100  // Perfect transparency edges
  })
  .toFile('complex-logo.webp');
```

**Scenario 2: UI elements with semi-transparency**
```javascript
sharp('glass-effect.png')
  .webp({
    quality: 85,
    alphaQuality: 95  // Maintain smooth transparency gradient
  })
  .toFile('glass-effect.webp');
```

### When Lower alphaQuality is Acceptable

**Scenario 1: Simple transparency mask**
```javascript
sharp('icon.png')
  .webp({
    quality: 85,
    alphaQuality: 75  // Simple yes/no transparency
  })
  .toFile('icon.webp');
// Saves 10-20% additional file size
```

**Scenario 2: Background with irrelevant alpha**
```javascript
// If image has alpha channel but you don't need it
sharp('photo.png')
  .removeAlpha()  // Remove alpha channel entirely
  .webp({ quality: 85 })
  .toFile('photo.webp');
// Significant size savings
```

## File Size Optimization Strategies

### Strategy 1: Dimension Reduction

Often more effective than quality reduction:

```javascript
// Instead of: quality 60 at 2000×1500 (150KB)
// Try: quality 85 at 1200×900 (80KB) with better quality!

sharp('large-photo.jpg')
  .resize(1200, 900, { fit: 'inside' })
  .webp({ quality: 85 })
  .toFile('optimized.webp');
```

**Rule of thumb**:
- Hero images: Max 1920×1080
- Content images: Max 1200×800
- Thumbnails: Max 400×300
- Icons: Actual display size (e.g., 64×64)

### Strategy 2: Effort Investment

For build-time conversions, invest CPU for smaller files:

```javascript
sharp('photo.jpg')
  .webp({
    quality: 85,
    reductionEffort: 6,  // Maximum effort
    minSize: true         // Additional optimization
  })
  .toFile('photo.webp');
```

**Typical savings**: 5-15% smaller vs. default effort
**Cost**: 2-4× longer encoding time (acceptable for builds)

### Strategy 3: Smart Cropping

Remove unnecessary background before conversion:

```javascript
// Remove whitespace/padding
sharp('product.png')
  .trim()  // Auto-crop to content
  .webp({ quality: 90 })
  .toFile('product.webp');
```

### Strategy 4: Lossless for Specific Cases

Lossless is smaller than PNG but larger than lossy WebP:

```javascript
// Vector-style graphics with sharp edges
sharp('diagram.png')
  .webp({ lossless: true })
  .toFile('diagram.webp');

// Result: 1.5MB PNG → 500KB WebP (lossless) → 70KB WebP (quality 85)
// Choose lossless if quality 85 shows visible artifacts
```

**When to use lossless**:
- Screenshots with text
- Diagrams and flowcharts
- Pixel art
- Images requiring perfect reproduction

## Performance Optimization

### Batch Processing Pattern

**Sequential (Memory-Safe)**:
```javascript
// Process one file at a time
for (const file of files) {
  await sharp(file)
    .webp({ quality: 85 })
    .toFile(output);
}
```

**Parallel (Faster, More Memory)**:
```javascript
// Process multiple files simultaneously
await Promise.all(
  files.map(file =>
    sharp(file)
      .webp({ quality: 85 })
      .toFile(output)
  )
);
```

**Chunked (Best Balance)**:
```javascript
// Process in batches of 10
for (let i = 0; i < files.length; i += 10) {
  const chunk = files.slice(i, i + 10);
  await Promise.all(
    chunk.map(file =>
      sharp(file).webp({ quality: 85 }).toFile(output)
    )
  );
}
```

**Recommendation**: Use sequential for >100 files or memory-constrained environments

### Memory Management

```javascript
import sharp from 'sharp';

// Disable cache for large batches (reduces memory usage)
sharp.cache(false);

// Limit concurrency (default: detected CPU cores)
sharp.concurrency(2);  // Process max 2 images simultaneously

// Re-enable after batch
sharp.cache(true);
sharp.concurrency(0);  // Auto-detect
```

### Streaming for Large Files

For very large source images (>10MB):

```javascript
import { createReadStream, createWriteStream } from 'fs';

createReadStream('huge-image.tiff')
  .pipe(sharp().webp({ quality: 85 }))
  .pipe(createWriteStream('huge-image.webp'));
```

**Benefits**: Constant memory usage regardless of file size

## Quality Assurance

### Visual Comparison Checklist

After conversion, check:

1. **Edges and text**: Ensure no visible artifacting around sharp edges
2. **Gradients**: Verify smooth transitions (no banding)
3. **Transparency**: Check alpha channel fidelity
4. **Color accuracy**: Compare color reproduction
5. **Dark areas**: Ensure detail preserved in shadows

### Automated Quality Checks

```javascript
import sharp from 'sharp';

async function qualityCheck(original, converted) {
  const [origMeta, convMeta] = await Promise.all([
    sharp(original).metadata(),
    sharp(converted).metadata()
  ]);

  // Verify dimensions match
  if (origMeta.width !== convMeta.width || origMeta.height !== convMeta.height) {
    console.warn('Dimension mismatch!');
  }

  // Verify reasonable file size
  const fs = require('fs');
  const origSize = fs.statSync(original).size;
  const convSize = fs.statSync(converted).size;
  const ratio = convSize / origSize;

  if (ratio > 0.8) {
    console.warn('Insufficient compression (>80% of original)');
  } else if (ratio < 0.05) {
    console.warn('Excessive compression (<5% of original), check quality');
  }
}
```

### Browser Testing

Test WebP images in:
- ✅ Chrome/Edge (native support)
- ✅ Firefox (native support)
- ✅ Safari 14+ (native support)
- ⚠️ Safari 13 and below (fallback needed)
- ⚠️ IE 11 (fallback needed)

## Fallback Strategies

### HTML Picture Element

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

**Benefits**: Browser automatically selects supported format

### JavaScript Detection

```javascript
function supportsWebP() {
  const elem = document.createElement('canvas');
  return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

if (supportsWebP()) {
  // Use .webp files
} else {
  // Use .jpg or .png fallback
}
```

### Server-Side Detection

```javascript
// Express.js example
app.get('/images/:filename', (req, res) => {
  const supportsWebP = req.headers.accept?.includes('image/webp');
  const ext = supportsWebP ? '.webp' : '.jpg';
  res.sendFile(`/images/${req.params.filename}${ext}`);
});
```

## Directory Structure Best Practices

### Recommended Structure

```
public/
├── images/
│   ├── src/              # Original PNGs (keep for editing)
│   │   ├── hero.png
│   │   └── logo.png
│   ├── webp/             # Converted WebP (for web)
│   │   ├── hero.webp
│   │   └── logo.webp
│   └── fallback/         # JPEG fallbacks (optional)
│       ├── hero.jpg
│       └── logo.jpg
```

### Alternative: Co-location

```
public/
├── images/
│   ├── hero.png          # Original
│   ├── hero.webp         # Converted
│   ├── logo.png          # Original
│   └── logo.webp         # Converted
```

**Recommendation**: Separate directories for clarity, co-location for convenience

## CI/CD Integration

### Pre-commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

changed_images=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(png|jpe?g)$')

if [ -n "$changed_images" ]; then
  echo "Converting images to WebP..."
  node .claude/skills/png-to-webp/scripts/convert.js --skip-existing
  git add public/*/webp/
fi
```

### GitHub Actions

```yaml
name: Optimize Images
on:
  push:
    paths: ['public/**/*.png', 'public/**/*.jpg']

jobs:
  convert:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: node .claude/skills/png-to-webp/scripts/convert.js
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: 'chore: auto-convert images to WebP'
```

## Common Pitfalls to Avoid

### ❌ Pitfall 1: Converting already-compressed JPEGs at high quality

```javascript
// Don't do this
sharp('photo.jpg')  // Already compressed
  .webp({ quality: 95 })  // High quality doesn't help much
  .toFile('photo.webp');  // Marginal savings

// Do this instead
sharp('photo.jpg')
  .webp({ quality: 80 })  // Lower quality is fine for JPEGs
  .toFile('photo.webp');  // Better savings
```

**Reason**: JPEG is already lossy; high WebP quality doesn't recover lost detail

### ❌ Pitfall 2: Not considering viewing size

```javascript
// Don't do this
sharp('thumbnail.png')  // Will display at 100×100
  .webp({ quality: 95 })  // Overkill quality
  .toFile('thumbnail.webp');

// Do this instead
sharp('thumbnail.png')
  .resize(100, 100)  // Match display size
  .webp({ quality: 75 })  // Lower quality acceptable
  .toFile('thumbnail.webp');
```

### ❌ Pitfall 3: Converting the same files repeatedly

```javascript
// Use --skip-existing flag or check before converting
const fs = require('fs');
if (!fs.existsSync(outputPath)) {
  await sharp(inputPath).webp().toFile(outputPath);
}
```

### ❌ Pitfall 4: Not preserving originals

Always keep source files:
- PNG/PSD for editing
- Commit both source and WebP to git
- Or use git-lfs for large source files

### ❌ Pitfall 5: Ignoring metadata when needed

```javascript
// If copyright/EXIF matters, preserve it
sharp('photo.jpg')
  .webp({ quality: 85 })
  .withMetadata({
    exif: {
      IFD0: { Copyright: 'Your Name' }
    }
  })
  .toFile('photo.webp');
```

## Quality vs. Size Decision Matrix

| Image Type | Recommended Quality | Typical Reduction | Rationale |
|------------|-------------------|------------------|-----------|
| Logos | 95 | 85% | Brand integrity |
| Icons | 90 | 90% | Small details matter |
| Hero images | 85 | 92% | First impression |
| Content photos | 85 | 93% | Sweet spot |
| Thumbnails | 75 | 95% | Displayed small |
| Backgrounds | 75 | 96% | Less critical |
| Placeholders | 50-60 | 98% | Temporary display |

## Testing and Validation

### Visual Comparison Tool

```bash
# Open both images side-by-side in browser
open original.png converted.webp
```

### File Size Report

```bash
ls -lh original.png converted.webp

# Or use the conversion script's built-in reporting
node .claude/skills/png-to-webp/scripts/convert.js
```

### Lighthouse Audit

Run Lighthouse to verify image optimization:
- Open DevTools → Lighthouse
- Check "Serve images in next-gen formats"
- Verify WebP usage is detected

## Further Optimization

After WebP conversion, consider:

1. **CDN caching**: Set long cache headers for WebP files
2. **Lazy loading**: Load images only when needed
3. **Responsive images**: Serve different sizes for different screens
4. **HTTP/2 Server Push**: Preload critical images
5. **Image CDN**: Use services like Cloudinary, ImageKit for automatic optimization

## Summary: Quick Decision Guide

**Need perfect quality?** → Lossless WebP (quality: N/A, lossless: true)
**Logo/icon?** → Quality 90-95, alphaQuality 100
**Photo/hero image?** → Quality 85 (default recommendation)
**Thumbnail/background?** → Quality 75
**Build-time conversion?** → reductionEffort 6, minSize true
**Runtime conversion?** → reductionEffort 4 (default)
**Large batch (>100 files)?** → Sequential processing
**Small batch (<50 files)?** → Parallel processing

## Resources

- [WebP compression study](https://developers.google.com/speed/webp/docs/webp_study)
- [Image optimization guide](https://web.dev/fast/#optimize-your-images)
- [sharp performance tips](https://sharp.pixelplumbing.com/performance)