import React, { useState } from 'react';
import { I18nProvider, useI18n } from './I18nProvider';

interface TechnyanImageProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  showGreeting?: boolean;
}

const sizeClasses = {
  small: 'w-10 h-10',
  medium: 'w-32 h-32 md:w-40 md:h-40',
  large: 'w-48 h-48 md:w-64 md:h-64',
  xlarge: 'w-64 h-64 md:w-80 md:h-80',
};

const TechnyanImageInner: React.FC<TechnyanImageProps> = ({
  size = 'medium',
  className = '',
  showGreeting = true
}) => {
  const { t } = useI18n();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <img
        src="/technyan.webp"
        alt={t('mascotAlt')}
        className={`${sizeClasses[size]} object-contain border-1.5 border-navy bg-cream transition-transform duration-300 ${
          isHovered ? 'scale-105' : ''
        } ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {showGreeting && isHovered && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
          <div className="bg-navy text-cream px-4 py-2 border-1.5 border-navy whitespace-nowrap text-sm font-medium relative">
            {t('technyanGreeting')}
            {/* Speech bubble arrow */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-navy"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const TechnyanImage: React.FC<TechnyanImageProps> = (props) => {
  return (
    <I18nProvider>
      <TechnyanImageInner {...props} />
    </I18nProvider>
  );
};

export default TechnyanImage;
