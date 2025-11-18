import React from 'react';

interface CategoryTagProps {
  category: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium border-1.5 border-navy transition-all ${
        isActive
          ? 'bg-navy text-cream'
          : 'bg-cream text-navy hover:bg-navy hover:text-cream'
      }`}
    >
      {category}
    </button>
  );
};

export default CategoryTag;
