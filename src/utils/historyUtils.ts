import type { CollectionEntry } from 'astro:content';

export interface ArticleWithLocale extends CollectionEntry<'articles'> {
  data: CollectionEntry<'articles'>['data'];
}

export interface GroupedByYear {
  year: number;
  months: GroupedByMonth[];
}

export interface GroupedByMonth {
  year: number;
  month: number;
  monthName: string;
  articles: ArticleWithLocale[];
}

export interface ArticleWithImpact extends ArticleWithLocale {
  impactScore: number;
}

/**
 * Calculate impact score for an article
 * Based on: tags count, technyan comment presence, category weight
 */
export function calculateImpactScore(article: ArticleWithLocale): number {
  let score = 50; // Base score

  // Tags contribute to impact
  const tagCount = article.data.tags?.length || 0;
  score += tagCount * 10;

  // Technyan comment indicates notable article
  if (article.data.technyanComment) {
    score += 30;
  }

  // Category weights
  const categoryWeights: Record<string, number> = {
    'Research': 20,
    'ChatGPT': 15,
    'Claude': 15,
    'Gemini': 15,
    'Grok': 15,
    'Image Generation': 10,
    'Other': 5,
  };
  score += categoryWeights[article.data.category] || 0;

  return Math.min(score, 100); // Cap at 100
}

/**
 * Sort articles by date (newest first)
 */
export function sortArticlesByDate(articles: ArticleWithLocale[]): ArticleWithLocale[] {
  return [...articles].sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Group articles by year
 */
export function groupArticlesByYear(articles: ArticleWithLocale[]): GroupedByYear[] {
  const sorted = sortArticlesByDate(articles);
  const yearMap = new Map<number, ArticleWithLocale[]>();

  sorted.forEach(article => {
    const year = article.data.date.getFullYear();
    if (!yearMap.has(year)) {
      yearMap.set(year, []);
    }
    yearMap.get(year)!.push(article);
  });

  const result: GroupedByYear[] = [];
  const years = Array.from(yearMap.keys()).sort((a, b) => b - a);

  years.forEach(year => {
    const yearArticles = yearMap.get(year)!;
    const months = groupArticlesByMonth(yearArticles);
    result.push({ year, months });
  });

  return result;
}

/**
 * Group articles by month
 */
export function groupArticlesByMonth(articles: ArticleWithLocale[]): GroupedByMonth[] {
  const sorted = sortArticlesByDate(articles);
  const monthMap = new Map<string, ArticleWithLocale[]>();

  sorted.forEach(article => {
    const year = article.data.date.getFullYear();
    const month = article.data.date.getMonth();
    const key = `${year}-${month}`;

    if (!monthMap.has(key)) {
      monthMap.set(key, []);
    }
    monthMap.get(key)!.push(article);
  });

  const result: GroupedByMonth[] = [];
  const sortedKeys = Array.from(monthMap.keys()).sort((a, b) => {
    const [yearA, monthA] = a.split('-').map(Number);
    const [yearB, monthB] = b.split('-').map(Number);
    if (yearA !== yearB) return yearB - yearA;
    return monthB - monthA;
  });

  sortedKeys.forEach(key => {
    const [year, month] = key.split('-').map(Number);
    const articles = monthMap.get(key)!;
    const monthName = getMonthName(month);
    result.push({ year, month, monthName, articles });
  });

  return result;
}

/**
 * Get month name from month number (0-11)
 */
export function getMonthName(month: number, locale: 'en' | 'ja' = 'en'): string {
  const date = new Date(2000, month, 1);
  return date.toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', { month: 'long' });
}

/**
 * Add impact scores to articles
 */
export function addImpactScores(articles: ArticleWithLocale[]): ArticleWithImpact[] {
  return articles.map(article => ({
    ...article,
    impactScore: calculateImpactScore(article),
  }));
}

/**
 * Format date for display
 */
export function formatDate(date: Date, locale: 'en' | 'ja' = 'en'): string {
  return date.toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get impact size class for visualizations
 */
export function getImpactSizeClass(score: number): 'small' | 'medium' | 'large' {
  if (score >= 80) return 'large';
  if (score >= 60) return 'medium';
  return 'small';
}
