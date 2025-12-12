import { useState } from 'react';
import {
  aiModels,
  benchmarks,
  benchmarkCategories,
  getScore,
  getBestScore,
  type Benchmark,
} from '../../data/benchmarkData';

interface BenchmarkTableProps {
  lang: 'en' | 'ja';
}

export default function BenchmarkTable({ lang }: BenchmarkTableProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredBenchmarks =
    selectedCategory === 'all'
      ? benchmarks
      : benchmarks.filter((b) => b.category === selectedCategory);

  const formatScore = (value: string, unit?: string) => {
    if (value === 'N/A') return 'N/A';
    if (unit === '$') return `$${parseFloat(value).toLocaleString()}`;
    if (unit === 'Elo') return parseInt(value).toLocaleString();
    if (unit === '%') return `${value}%`;
    return value;
  };

  const getScoreClassName = (modelId: string, benchmark: Benchmark) => {
    const score = getScore(modelId, benchmark.id);
    if (!score || score.value === 'N/A') return '';

    const bestScore = getBestScore(benchmark.id);
    if (bestScore && bestScore.modelId === modelId) {
      return 'font-bold bg-yellow-100';
    }
    return '';
  };

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 border-1.5 border-navy font-mono text-sm transition-colors ${
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
            className={`px-4 py-2 border-1.5 border-navy font-mono text-sm transition-colors ${
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

      {/* Table Container with horizontal and vertical scroll */}
      <div
        className="overflow-auto border-1.5 border-navy"
        style={{ borderWidth: '1.5px', maxHeight: '70vh' }}
      >
        <table className="w-full min-w-[800px] font-mono text-sm bg-cream">
          <thead className="bg-navy text-cream sticky top-0 z-10">
            <tr>
              <th className="text-left p-3 border-r-1.5 border-cream" style={{ borderWidth: '1.5px' }}>
                {lang === 'ja' ? 'ベンチマーク' : 'Benchmark'}
              </th>
              <th className="text-left p-3 border-r-1.5 border-cream" style={{ borderWidth: '1.5px' }}>
                {lang === 'ja' ? 'カテゴリ' : 'Category'}
              </th>
              {aiModels.map((model, index) => (
                <th
                  key={model.id}
                  className={`text-center p-3 ${
                    index < aiModels.length - 1 ? 'border-r-1.5 border-cream' : ''
                  }`}
                  style={{ borderWidth: index < aiModels.length - 1 ? '1.5px' : '0' }}
                >
                  <div className="font-bold">{model.name}</div>
                  <div className="text-xs opacity-80 mt-1">{model.vendor}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBenchmarks.map((benchmark, rowIndex) => {
              const category = benchmarkCategories.find((c) => c.id === benchmark.category);
              return (
                <tr
                  key={benchmark.id}
                  className={rowIndex % 2 === 0 ? 'bg-cream' : 'bg-yellow-50'}
                >
                  <td
                    className="p-3 border-r-1.5 border-t-1.5 border-navy"
                    style={{ borderWidth: '1.5px' }}
                  >
                    <div className="font-semibold">{benchmark.name}</div>
                    <div className="text-xs opacity-70 mt-1">{benchmark.description[lang]}</div>
                  </td>
                  <td
                    className="p-3 border-r-1.5 border-t-1.5 border-navy text-xs"
                    style={{ borderWidth: '1.5px' }}
                  >
                    {category?.name[lang]}
                  </td>
                  {aiModels.map((model, colIndex) => {
                    const score = getScore(model.id, benchmark.id);
                    const scoreClassName = getScoreClassName(model.id, benchmark);

                    return (
                      <td
                        key={model.id}
                        className={`p-3 border-t-1.5 border-navy text-center ${
                          colIndex < aiModels.length - 1 ? 'border-r-1.5' : ''
                        } ${scoreClassName}`}
                        style={{
                          borderWidth:
                            colIndex < aiModels.length - 1 ? '1.5px' : '1.5px 0 0 0',
                        }}
                      >
                        {score ? (
                          <div>
                            <div className="font-semibold">
                              {formatScore(score.value, benchmark.unit)}
                            </div>
                            {!score.verified && (
                              <div className="text-xs opacity-60 mt-1">
                                {lang === 'ja' ? '※検証中' : '※Unverified'}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="opacity-40">-</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-navy">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-100 border-1.5 border-navy" style={{ borderWidth: '1.5px' }}></div>
          <span>{lang === 'ja' ? '最高スコア' : 'Best Score'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>※</span>
          <span>{lang === 'ja' ? '検証中のデータ' : 'Unverified Data'}</span>
        </div>
      </div>
    </div>
  );
}
