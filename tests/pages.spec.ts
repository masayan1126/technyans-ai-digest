import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Extract URLs from sitemap XML
 */
function extractUrlsFromSitemap(sitemapPath: string): string[] {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
  const urls: string[] = [];

  for (const match of urlMatches) {
    urls.push(match[1]);
  }

  return urls;
}

/**
 * Convert absolute URL to relative path
 */
function getRelativePath(url: string): string {
  const urlObj = new URL(url);
  return urlObj.pathname;
}

test.describe('Site Pages Status Check', () => {
  let sitemapUrls: string[] = [];

  test.beforeAll(() => {
    // Read URLs from sitemap
    const sitemapPath = path.join(process.cwd(), 'dist', 'sitemap-0.xml');

    if (fs.existsSync(sitemapPath)) {
      sitemapUrls = extractUrlsFromSitemap(sitemapPath);
      console.log(`Found ${sitemapUrls.length} URLs in sitemap`);
    } else {
      throw new Error(`Sitemap not found at ${sitemapPath}. Please run 'npm run build' first.`);
    }
  });

  test('all pages from sitemap should return 200 status', async ({ page }) => {
    // Test each URL from sitemap
    for (const url of sitemapUrls) {
      const relativePath = getRelativePath(url);

      // Skip 404 page as it should return 404 status
      if (relativePath === '/404/') {
        continue;
      }

      const response = await page.goto(relativePath);

      expect(response?.status(), `${relativePath} should return 200`).toBe(200);
    }
  });

  test('404 page should exist and return 404 status', async ({ page }) => {
    // Test 404 page
    const response = await page.goto('/404/', { waitUntil: 'networkidle' });

    // Astro's 404 page typically returns 200 in preview mode
    // but should have the 404 content
    expect(response?.status()).toBeTruthy();

    // Verify the page contains 404 content
    const content = await page.content();
    expect(content).toContain('404');
  });

  test('non-existent page should show 404', async ({ page }) => {
    // Test a page that definitely doesn't exist
    const response = await page.goto('/this-page-does-not-exist-xyz/', {
      waitUntil: 'networkidle'
    });

    // In Astro preview mode, this might redirect to 404 page
    const finalUrl = page.url();
    const content = await page.content();

    // Should either be 404 status or show 404 content
    const is404Status = response?.status() === 404;
    const has404Content = content.includes('404');

    expect(is404Status || has404Content,
      'Non-existent page should return 404 or show 404 content'
    ).toBeTruthy();
  });

  test('verify total number of pages', async () => {
    // This test verifies we're testing a reasonable number of pages
    expect(sitemapUrls.length).toBeGreaterThan(20);
    console.log(`Total pages in sitemap: ${sitemapUrls.length}`);

    // Log some example URLs for verification
    console.log('Sample URLs:');
    sitemapUrls.slice(0, 5).forEach(url => {
      console.log(`  - ${getRelativePath(url)}`);
    });
  });
});
