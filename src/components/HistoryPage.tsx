import { useState, useEffect } from 'react';
import { I18nProvider, useI18n } from './I18nProvider';
import ViewSwitcher, { type ViewMode } from './ViewSwitcher';
import TimelineView from './TimelineView';
import MilestoneView from './MilestoneView';
import ImpactMapView from './ImpactMapView';
import ArchiveGridView from './ArchiveGridView';
import StoryFlowView from './StoryFlowView';
import type { ArticleWithLocale } from '../utils/historyUtils';
import { sortArticlesByDate } from '../utils/historyUtils';

interface HistoryPageProps {
  articles: Array<{
    slug: string;
    data: {
      title: string;
      description: string;
      date: string;
      category: string;
      tags: string[];
      locale: string;
      technyanComment?: string;
    };
  }>;
}

const STORAGE_KEY = 'technyan-history-view';

function HistoryPageInner({ articles }: HistoryPageProps) {
  const { locale, t } = useI18n();
  const [currentView, setCurrentView] = useState<ViewMode>('timeline');

  // Load saved view preference
  useEffect(() => {
    const savedView = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    if (savedView && ['timeline', 'milestone', 'impact', 'archive', 'story'].includes(savedView)) {
      setCurrentView(savedView);
    }
  }, []);

  // Save view preference
  const handleViewChange = (view: ViewMode) => {
    setCurrentView(view);
    localStorage.setItem(STORAGE_KEY, view);
  };

  // Convert articles to ArticleWithLocale format and filter by locale
  const convertedArticles: ArticleWithLocale[] = articles
    .filter((article) => article.data.locale === locale)
    .map((article) => ({
      slug: article.slug,
      data: {
        title: article.data.title,
        description: article.data.description,
        date: new Date(article.data.date),
        category: article.data.category as any,
        tags: article.data.tags,
        locale: article.data.locale as 'en' | 'ja',
        technyanComment: article.data.technyanComment,
      },
    }));

  const sortedArticles = sortArticlesByDate(convertedArticles);

  return (
    <div>
      {/* Page Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('historyPageTitle')}
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-3xl">
          {t('historyPageDescription')}
        </p>
      </div>

      {/* View Switcher */}
      <ViewSwitcher currentView={currentView} onViewChange={handleViewChange} />

      {/* View Content */}
      <div className="mt-8">
        {currentView === 'timeline' && <TimelineView articles={sortedArticles} />}
        {currentView === 'milestone' && <MilestoneView articles={sortedArticles} />}
        {currentView === 'impact' && <ImpactMapView articles={sortedArticles} />}
        {currentView === 'archive' && <ArchiveGridView articles={sortedArticles} />}
        {currentView === 'story' && <StoryFlowView articles={sortedArticles} />}
      </div>
    </div>
  );
}

export default function HistoryPage(props: HistoryPageProps) {
  return (
    <I18nProvider>
      <HistoryPageInner {...props} />
    </I18nProvider>
  );
}
