import { useState, useEffect } from 'react';
import { useI18n } from './I18nProvider';

export type ViewMode = 'timeline' | 'milestone' | 'impact' | 'archive' | 'story';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const viewIcons: Record<ViewMode, string> = {
  timeline: '📍',
  milestone: '🏆',
  impact: '💥',
  archive: '📚',
  story: '📖',
};

export default function ViewSwitcher({ currentView, onViewChange }: ViewSwitcherProps) {
  const { t } = useI18n();

  const views: Array<{ mode: ViewMode; label: string; desc: string }> = [
    { mode: 'timeline', label: t('timelineView'), desc: t('timelineViewDesc') },
    { mode: 'milestone', label: t('milestoneView'), desc: t('milestoneViewDesc') },
    { mode: 'impact', label: t('impactMapView'), desc: t('impactMapViewDesc') },
    { mode: 'archive', label: t('archiveGridView'), desc: t('archiveGridViewDesc') },
    { mode: 'story', label: t('storyFlowView'), desc: t('storyFlowViewDesc') },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-sm font-semibold text-navy mb-4 uppercase tracking-wider">
        {t('viewMode')}
      </h3>
      <div className="flex flex-wrap gap-3">
        {views.map((view) => (
          <button
            key={view.mode}
            onClick={() => onViewChange(view.mode)}
            className={`
              group relative px-6 py-3 border-1.5 transition-all duration-200
              flex items-center gap-2
              ${
                currentView === view.mode
                  ? 'bg-navy border-navy text-cream shadow-[4px_4px_0px_0px_rgba(12,35,64,1)]'
                  : 'bg-cream border-navy text-navy hover:shadow-[2px_2px_0px_0px_rgba(12,35,64,1)]'
              }
            `}
            aria-label={view.desc}
          >
            <span className="text-lg" aria-hidden="true">
              {viewIcons[view.mode]}
            </span>
            <span className="font-medium">{view.label}</span>

            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-navy text-cream text-xs whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border-1.5 border-navy shadow-[2px_2px_0px_0px_rgba(12,35,64,1)] z-10">
              {view.desc}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1.5px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
