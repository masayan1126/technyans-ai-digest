#!/usr/bin/env node

/**
 * 静的OGP画像生成スクリプト
 *
 * レトロ・テック・ミニマリズムデザインのOGP画像（1200x630px）を生成します。
 *
 * 使用方法:
 *   node scripts/generate-og-image.js
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// OGP画像のサイズ
const WIDTH = 1200;
const HEIGHT = 630;

// レトロ・テック・ミニマリズムのカラースキーム
const CREAM = '#FFF6D0';
const NAVY = '#0C2340';

async function generateOGImage() {
  try {
    console.log('🎨 Generating default OG image...');

    // SVGテンプレートを作成
    const svg = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <!-- 背景 -->
        <rect width="${WIDTH}" height="${HEIGHT}" fill="${CREAM}"/>

        <!-- ヘッダーライン -->
        <rect x="0" y="0" width="${WIDTH}" height="3" fill="${NAVY}"/>
        <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="${NAVY}"/>

        <!-- メインテキスト -->
        <text
          x="${WIDTH / 2}"
          y="${HEIGHT / 2 - 60}"
          font-family="monospace"
          font-size="72"
          font-weight="bold"
          fill="${NAVY}"
          text-anchor="middle">
          Technyan's AI Digests
        </text>

        <!-- サブテキスト -->
        <text
          x="${WIDTH / 2}"
          y="${HEIGHT / 2 + 20}"
          font-family="monospace"
          font-size="32"
          fill="${NAVY}"
          text-anchor="middle"
          opacity="0.8">
          Your daily AI learning partner
        </text>

        <!-- URL -->
        <text
          x="${WIDTH / 2}"
          y="${HEIGHT - 40}"
          font-family="monospace"
          font-size="24"
          fill="${NAVY}"
          text-anchor="middle"
          opacity="0.6">
          technyanai.com
        </text>

        <!-- 装飾ボーダー -->
        <rect
          x="60"
          y="60"
          width="${WIDTH - 120}"
          height="${HEIGHT - 120}"
          fill="none"
          stroke="${NAVY}"
          stroke-width="2"/>
      </svg>
    `;

    // SVGをPNGに変換
    const outputPath = join(__dirname, '../public/og-default.png');

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log('✅ Default OG image generated at:', outputPath);
    console.log('📏 Size: 1200x630px');
    console.log('🎨 Design: Retro Tech Minimalism');

    // Technyan付きバージョンも生成（オプション）
    await generateOGImageWithTechnyan();

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

async function generateOGImageWithTechnyan() {
  try {
    console.log('🐱 Generating OG image with Technyan...');

    // Technyan画像を読み込み
    const technyansPath = join(__dirname, '../public/technyan.webp');

    // Technyan画像をリサイズ
    const technyansImage = await sharp(technyansPath)
      .resize(200, 200, { fit: 'contain' })
      .png()
      .toBuffer();

    // SVGテンプレートを作成
    const svg = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <!-- 背景 -->
        <rect width="${WIDTH}" height="${HEIGHT}" fill="${CREAM}"/>

        <!-- ヘッダーライン -->
        <rect x="0" y="0" width="${WIDTH}" height="3" fill="${NAVY}"/>
        <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="${NAVY}"/>

        <!-- メインテキスト -->
        <text
          x="600"
          y="250"
          font-family="monospace"
          font-size="64"
          font-weight="bold"
          fill="${NAVY}"
          text-anchor="middle">
          Technyan's AI Digests
        </text>

        <!-- サブテキスト -->
        <text
          x="600"
          y="320"
          font-family="monospace"
          font-size="28"
          fill="${NAVY}"
          text-anchor="middle"
          opacity="0.8">
          Your daily AI learning partner
        </text>

        <!-- URL -->
        <text
          x="600"
          y="${HEIGHT - 40}"
          font-family="monospace"
          font-size="24"
          fill="${NAVY}"
          text-anchor="middle"
          opacity="0.6">
          technyanai.com
        </text>

        <!-- 装飾ボーダー -->
        <rect
          x="60"
          y="60"
          width="${WIDTH - 120}"
          height="${HEIGHT - 120}"
          fill="none"
          stroke="${NAVY}"
          stroke-width="2"/>
      </svg>
    `;

    // Technyan画像を配置する位置を計算
    const outputPath = join(__dirname, '../public/og-with-technyan.png');

    await sharp(Buffer.from(svg))
      .composite([
        {
          input: technyansImage,
          top: 215,
          left: 900,
        }
      ])
      .png()
      .toFile(outputPath);

    console.log('✅ OG image with Technyan generated at:', outputPath);

  } catch (error) {
    console.error('⚠️  Could not generate OG image with Technyan:', error.message);
    console.log('💡 This is optional, continuing...');
  }
}

// スクリプトを実行
generateOGImage();
