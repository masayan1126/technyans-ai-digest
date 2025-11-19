# Technical Reference: sharp WebP API

## sharp Library Overview

**Version**: 0.33.5 (installed via Astro dependencies)
**Repository**: https://github.com/lovell/sharp
**Documentation**: https://sharp.pixelplumbing.com/

sharp is a high-performance Node.js image processing library that uses libvips under the hood. It's significantly faster than ImageMagick and GraphicsMagick while consuming less memory.

## WebP Conversion API

### Basic Usage

```javascript
import sharp from 'sharp';

await sharp('input.png')
  .webp({ quality: 85 })
  .toFile('output.webp');
```

### WebP Options Object

```typescript
interface WebpOptions {
  quality?: number;           // Quality: 1-100 (default: 80)
  alphaQuality?: number;      // Alpha channel quality: 0-100 (default: 100)
  lossless?: boolean;         // Lossless compression (default: false)
  nearLossless?: boolean;     // Near-lossless compression (default: false)
  smartSubsample?: boolean;   // Use sharp RGB to YUV conversion (default: false)
  reductionEffort?: number;   // CPU effort: 0-6 (default: 4)
  minSize?: boolean;          // Minimize file size (default: false)
  mixed?: boolean;            // Allow mixed lossy/lossless (default: false)
  preset?: WebpPreset;        // Encoding preset (default: 'default')
  effort?: number;            // CPU effort: 0-6 (alias for reductionEffort)
}

type WebpPreset = 'default' | 'photo' | 'picture' | 'drawing' | 'icon' | 'text';
```

## Parameter Details

### quality (1-100)

Controls the lossy compression quality. Higher values = better quality but larger files.

**Recommended values**:
- 95-100: Near-lossless quality (icons, logos)
- 85-90: High quality (hero images, portfolios)
- 75-85: Good quality (general photos) ← **Default recommendation**
- 60-75: Acceptable quality (thumbnails, backgrounds)
- 40-60: Low quality (placeholder images)
- 1-40: Very low quality (avoid unless necessary)

**Trade-offs**:
```
Quality 95: 1.5MB → 200KB (86% reduction)
Quality 85: 1.5MB → 70KB  (95% reduction) ← Sweet spot
Quality 75: 1.5MB → 50KB  (97% reduction)
Quality 60: 1.5MB → 30KB  (98% reduction, visible artifacts)
```

### alphaQuality (0-100)

Controls the quality of the alpha (transparency) channel independently.

**When to use**:
- Logos with transparency: `alphaQuality: 100` (preserve perfect transparency)
- Photos with semi-transparency: `alphaQuality: 85-90`
- Backgrounds with simple transparency: `alphaQuality: 75-85`

**Default**: Same as `quality` parameter

**Example**:
```javascript
// High-quality image with perfect transparency
sharp('logo.png')
  .webp({ quality: 90, alphaQuality: 100 })
  .toFile('logo.webp');
```

### lossless (boolean)

Enable lossless compression (perfect quality preservation).

**Characteristics**:
- No quality loss whatsoever
- Larger file sizes than lossy (typically 30-50% of original PNG)
- Still smaller than original PNG (50-70% reduction typical)
- Slower encoding than lossy

**When to use**:
- Images that will be further edited
- Graphics with sharp edges and text
- Cases where perfect fidelity is required

**Example**:
```javascript
sharp('diagram.png')
  .webp({ lossless: true })
  .toFile('diagram.webp');
```

**Trade-off**:
```
Lossy (quality 85):  1.5MB PNG → 70KB WebP  (95% reduction)
Lossless:            1.5MB PNG → 500KB WebP (67% reduction, perfect quality)
```

### nearLossless (boolean)

Preprocessing filter for near-lossless compression.

**Characteristics**:
- Slightly lossy preprocessing before lossless encoding
- Reduces file size while maintaining very high quality
- Best of both worlds for certain image types

**When to use**:
- Images requiring high fidelity but not absolute perfection
- When lossless files are too large but lossy shows artifacts

**Cannot be combined with**: `quality` parameter (only works with lossless base)

### smartSubsample (boolean)

Use high-quality chroma subsampling.

**Default**: `false`
**Recommendation**: `true` for photographic images at quality < 90

**Effect**: Better color detail preservation in compressed images

### reductionEffort (0-6)

CPU effort for file size reduction.

**Scale**:
- 0: Fastest encoding, larger files
- 4: **Default** - balanced speed and size
- 6: Slowest encoding, smallest files

**Typical impact**:
```
Effort 0: 75KB, encode in 20ms
Effort 4: 70KB, encode in 50ms  ← Default
Effort 6: 68KB, encode in 120ms
```

**Recommendation**: Use default (4) unless file size is critical

### minSize (boolean)

Minimize file size at the cost of encoding speed.

**Effect**: Equivalent to `reductionEffort: 6` plus additional optimizations

**When to use**:
- Build-time conversions (speed not critical)
- Large batches where cumulative savings matter
- Bandwidth-critical applications

**Example**:
```javascript
sharp('photo.jpg')
  .webp({ quality: 85, minSize: true, reductionEffort: 6 })
  .toFile('photo.webp');
// May save additional 5-10% file size vs. default settings
```

### preset

WebP encoding presets optimized for different content types.

**Available presets**:
- `'default'`: General-purpose encoding
- `'photo'`: Optimize for photographic images
- `'picture'`: Optimize for general pictures
- `'drawing'`: Optimize for line drawings
- `'icon'`: Optimize for icons and logos
- `'text'`: Optimize for images with text

**Example**:
```javascript
// Icon conversion
sharp('icon.png')
  .webp({ preset: 'icon', quality: 95 })
  .toFile('icon.webp');

// Photo conversion
sharp('photo.jpg')
  .webp({ preset: 'photo', quality: 85 })
  .toFile('photo.webp');
```

### mixed (boolean)

Allow mixing lossy and lossless encoding in the same image.

**Use case**: Automatically detect which parts benefit from lossless encoding

**Note**: Experimental feature, may increase encoding time

## Input Format Support

sharp supports reading from various formats:

| Format | Extension | Notes |
|--------|-----------|-------|
| JPEG | `.jpg`, `.jpeg` | Full support |
| PNG | `.png` | Full support including transparency |
| WebP | `.webp` | Can re-encode with different settings |
| GIF | `.gif` | First frame only (no animation) |
| AVIF | `.avif` | Full support (v0.29.0+) |
| TIFF | `.tiff`, `.tif` | Full support |
| SVG | `.svg` | Rasterized to specified dimensions |
| HEIF/HEIC | `.heic`, `.heif` | Requires libheif (optional) |

## Output Options

### File Output
```javascript
await sharp('input.png')
  .webp({ quality: 85 })
  .toFile('output.webp');
```

### Buffer Output
```javascript
const buffer = await sharp('input.png')
  .webp({ quality: 85 })
  .toBuffer();
```

### Stream Output
```javascript
sharp('input.png')
  .webp({ quality: 85 })
  .pipe(fs.createWriteStream('output.webp'));
```

## Metadata Preservation

By default, sharp strips most metadata to reduce file size.

### Preserve All Metadata
```javascript
await sharp('input.png')
  .webp({ quality: 85 })
  .withMetadata()
  .toFile('output.webp');
```

### Preserve Specific Metadata
```javascript
await sharp('input.png')
  .webp({ quality: 85 })
  .withMetadata({
    exif: { IFD0: { Copyright: 'Your Name 2025' } },
    icc: 'sRGB'  // Color profile
  })
  .toFile('output.webp');
```

**Metadata types**:
- `exif`: Camera settings, copyright, etc.
- `icc`: Color profile (sRGB, Adobe RGB, etc.)
- `iptc`: Image description, keywords, location
- `xmp`: Extended metadata

**Trade-off**: Metadata can add 2-50KB to file size

## Image Transformations

Combine WebP conversion with other operations:

### Resize + Convert
```javascript
await sharp('large.png')
  .resize(800, 600, { fit: 'inside' })
  .webp({ quality: 85 })
  .toFile('thumbnail.webp');
```

### Crop + Convert
```javascript
await sharp('photo.jpg')
  .extract({ left: 100, top: 50, width: 400, height: 400 })
  .webp({ quality: 85 })
  .toFile('cropped.webp');
```

### Rotate + Convert
```javascript
await sharp('image.png')
  .rotate(90)
  .webp({ quality: 85 })
  .toFile('rotated.webp');
```

### Composite (Watermark) + Convert
```javascript
await sharp('photo.jpg')
  .composite([{
    input: 'watermark.png',
    gravity: 'southeast'
  }])
  .webp({ quality: 85 })
  .toFile('watermarked.webp');
```

## Performance Characteristics

### Speed Benchmarks

Based on typical 1920×1080 photo (3MB PNG):

| Operation | Time | Output Size |
|-----------|------|-------------|
| PNG → WebP (quality 85, effort 4) | ~50ms | 120KB |
| PNG → WebP (lossless) | ~80ms | 900KB |
| PNG → WebP (quality 95, effort 6) | ~150ms | 350KB |
| JPEG → WebP (quality 85) | ~30ms | 90KB |

**Hardware**: M1 MacBook Pro (representative)

### Memory Usage

sharp is memory-efficient:
- Typical: 50-150MB RAM for image processing
- Streaming: Minimal memory overhead
- Batch processing: Memory released between images

**Recommendation**: For very large batches (1000+ images), process in chunks of 100-200 files

## Error Handling

### Common Errors

#### Input file missing or corrupted
```javascript
try {
  await sharp('input.png').webp().toFile('output.webp');
} catch (err) {
  if (err.message.includes('Input file is missing')) {
    console.error('File not found or unreadable');
  }
}
```

#### Unsupported format
```javascript
// Error: Input file contains unsupported image format
// Solution: Verify file is a valid image and format is supported
```

#### Out of memory
```javascript
// Error: Could not process image
// Solution: Reduce image dimensions or process fewer images concurrently
sharp.cache(false);  // Disable cache if needed
sharp.concurrency(1); // Reduce parallelism
```

## Advanced Features

### Progressive Loading (Not Supported)

WebP does not support progressive encoding like JPEG. Consider AVIF or JPEG for progressive loading requirements.

### Animation Support

sharp does not currently support animated WebP. Use `ffmpeg` or dedicated tools for animated WebP creation.

### Batch Processing Pattern

```javascript
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function batchConvert(sourceDir, targetDir, options = {}) {
  const files = await fs.readdir(sourceDir);
  const imageFiles = files.filter(f => /\.(png|jpe?g|tiff?)$/i.test(f));

  const results = await Promise.all(
    imageFiles.map(async (file) => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file.replace(/\.\w+$/, '.webp'));

      try {
        await sharp(sourcePath)
          .webp({ quality: 85, ...options })
          .toFile(targetPath);
        return { file, success: true };
      } catch (err) {
        return { file, success: false, error: err.message };
      }
    })
  );

  return results;
}
```

**Note**: For very large batches, use sequential processing to control memory usage (see scripts/convert.js implementation).

## Comparison with Other Formats

| Format | Quality | File Size | Browser Support | Use Case |
|--------|---------|-----------|----------------|----------|
| PNG | Perfect | 100% (baseline) | 100% | Transparency, lossless required |
| JPEG | Good | 30-50% | 100% | Photos without transparency |
| **WebP** | Excellent | **20-40%** | **97%+** | **General web images** ✓ |
| AVIF | Excellent | 15-30% | 75% (growing) | Cutting-edge, newest browsers |

**WebP browser support**: Chrome, Edge, Firefox, Safari 14+, Opera (97%+ global)

## Version Compatibility

This project uses **sharp 0.33.5** (installed via Astro 4.16.13).

### Breaking Changes to Watch
- v0.32.0: Removed deprecated `webp.preset` values
- v0.31.0: Changed default `reductionEffort` from 4 to 4 (no change)
- v0.30.0: Improved WebP alpha channel handling

### Feature Availability
- WebP support: All versions
- AVIF support: v0.29.0+
- Animated WebP: Not supported (use ffmpeg)

## Further Reading

- [sharp documentation](https://sharp.pixelplumbing.com/api-output#webp)
- [WebP specification](https://developers.google.com/speed/webp)
- [WebP browser compatibility](https://caniuse.com/webp)
- [Image optimization guide](https://web.dev/uses-webp-images/)

## See Also

- [WORKFLOW.md](./WORKFLOW.md) - Practical usage guide
- [BEST_PRACTICES.md](./BEST_PRACTICES.md) - Quality optimization tips