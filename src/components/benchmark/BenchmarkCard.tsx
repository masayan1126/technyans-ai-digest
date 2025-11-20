import { useState } from 'react';
import {
  aiModels,
  benchmarks,
  benchmarkCategories,
  getScore,
  getBestScore,
  type AIModel,
  type Benchmark,
} from '../../data/benchmarkData';

interface BenchmarkCardProps {
  lang: 'en' | 'ja';
}

export default function BenchmarkCard({ lang }: BenchmarkCardProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>(aiModels[0].id);

  const filteredBenchmarks =
    selectedCategory === 'all'
      ? benchmarks
      : benchmarks.filter((b) => b.category === selectedCategory);

  const selectedModelData = aiModels.find((m) => m.id === selectedModel);

  const formatScore = (value: string, unit?: string) => {
    if (value === 'N/A') return 'N/A';
    if (unit === '$') return `$${parseFloat(value).toLocaleString()}`;
    if (unit === 'Elo') return parseInt(value).toLocaleString();
    if (unit === '%') return `${value}%`;
    return value;
  };

  const isBestScore = (modelId: string, benchmark: Benchmark) => {
    const bestScore = getBestScore(benchmark.id);
    return bestScore && bestScore.modelId === modelId;
  };

  return (
    <div className="w-full">
      {/* Model Selector */}
      <div className="mb-4">
        <label className="block text-sm font-mono font-bold text-navy mb-2">
          {lang === 'ja' ? 'モデル選択' : 'Select Model'}
        </label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full p-3 border-1.5 border-navy bg-cream text-navy font-mono text-sm"
          style={{
            borderWidth: '1.5px',
            boxShadow: '2px 2px 0 #0C2340',
          }}
        >
          {aiModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name} ({model.vendor})
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-2 border-1.5 border-navy font-mono text-xs transition-colors ${
            selectedCategory === 'all'
              ? 'bg-navy text-cream'
              : 'bg-cream text-navy hover:bg-yellow-100'
          }`}
          style={{
            borderWidth: '1.5px',
            boxShadow: selectedCategory === 'all' ? 'none' : '2px 2px 0 #0C2340',
          }}
        >
          {lang === 'ja' ? '全て' : 'All'}
        </button>
        {benchmarkCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-2 border-1.5 border-navy font-mono text-xs transition-colors ${
              selectedCategory === category.id
                ? 'bg-navy text-cream'
                : 'bg-cream text-navy hover:bg-yellow-100'
            }`}
            style={{
              borderWidth: '1.5px',
              boxShadow: selectedCategory === category.id ? 'none' : '2px 2px 0 #0C2340',
            }}
          >
            {category.name[lang]}
          </button>
        ))}
      </div>

      {/* Model Info Card */}
      {selectedModelData && (
        <div
          className="mb-4 p-4 border-1.5 border-navy bg-yellow-50"
          style={{
            borderWidth: '1.5px',
            boxShadow: '3px 3px 0 #0C2340',
          }}
        >
          <div className="font-mono">
            <div className="font-bold text-lg text-navy mb-1">{selectedModelData.name}</div>
            <div className="text-sm text-navy opacity-80">
              {selectedModelData.vendor} • {lang === 'ja' ? 'リリース:' : 'Released:'}{' '}
              {new Date(selectedModelData.releaseDate).toLocaleDateString(
                lang === 'ja' ? 'ja-JP' : 'en-US'
              )}
            </div>
          </div>
        </div>
      )}

      {/* Benchmark Cards */}
      <div className="space-y-3">
        {filteredBenchmarks.map((benchmark) => {
          const category = benchmarkCategories.find((c) => c.id === benchmark.category);
          const score = getScore(selectedModel, benchmark.id);
          const isBest = isBestScore(selectedModel, benchmark);

          return (
            <div
              key={benchmark.id}
              className={`p-4 border-1.5 border-navy ${isBest ? 'bg-yellow-100' : 'bg-cream'}`}
              style={{
                borderWidth: '1.5px',
                boxShadow: '3px 3px 0 #0C2340',
              }}
            >
              <div className="font-mono">
                {/* Benchmark Name */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-bold text-navy">{benchmark.name}</div>
                    <div className="text-xs text-navy opacity-70 mt-1">
                      {benchmark.description[lang]}
                    </div>
                  </div>
                  {isBest && (
                    <span className="ml-2 text-xl" role="img" aria-label="trophy">
                      🏆
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className="inline-block px-2 py-1 text-xs bg-navy text-cream"
                    style={{
                      borderWidth: '1.5px',
                    }}
                  >
                    {category?.name[lang]}
                  </span>
                </div>

                {/* Score */}
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-navy opacity-70">
                    {lang === 'ja' ? 'スコア:' : 'Score:'}
                  </div>
                  <div>
                    {score ? (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-navy">
                          {formatScore(score.value, benchmark.unit)}
                        </div>
                        {!score.verified && (
                          <div className="text-xs text-navy opacity-60 mt-1">
                            {lang === 'ja' ? '※検証中' : '※Unverified'}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-xl text-navy opacity-40">-</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 p-3 border-1.5 border-navy bg-cream font-mono text-xs text-navy"
           style={{ borderWidth: '1.5px' }}>
        <div className="font-bold mb-2">{lang === 'ja' ? '凡例' : 'Legend'}</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span>🏆</span>
            <span>{lang === 'ja' ? '最高スコア' : 'Best Score'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>※</span>
            <span>{lang === 'ja' ? '検証中のデータ' : 'Unverified Data'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
