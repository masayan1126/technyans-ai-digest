import React, { useState } from 'react';
import { I18nProvider, useI18n } from './I18nProvider';
import type { translations } from '../i18n/translations';

interface TechnyanData {
  id: string;
  nameKey: keyof typeof translations.en;
  imagePath: string;
  category: 'basic' | 'accessorized' | 'themed';
}

const technyanData: TechnyanData[] = [
  // Basic Cats
  { id: 'black', nameKey: 'technyanBlackCat', imagePath: '/technyans/webp/black_cat_coding_1763534347022.webp', category: 'basic' },
  { id: 'brown-tabby', nameKey: 'technyanBrownTabby', imagePath: '/technyans/webp/brown_tabby_coding_1763534336114.webp', category: 'basic' },
  { id: 'calico', nameKey: 'technyanCalicoCat', imagePath: '/technyans/webp/calico_cat_coding_1763533886116.webp', category: 'basic' },
  { id: 'grey', nameKey: 'technyanGreyCat', imagePath: '/technyans/webp/grey_cat_coding_1763534132966.webp', category: 'basic' },
  { id: 'orange-tabby', nameKey: 'technyanOrangeTabby', imagePath: '/technyans/webp/orange_tabby_coding_1763533852986.webp', category: 'basic' },
  { id: 'siamese', nameKey: 'technyanSiameseCat', imagePath: '/technyans/webp/siamese_cat_coding_1763534121599.webp', category: 'basic' },
  { id: 'tortoiseshell', nameKey: 'technyanTortoiseshellCat', imagePath: '/technyans/webp/tortoiseshell_cat_coding_1763534358026.webp', category: 'basic' },
  { id: 'tuxedo', nameKey: 'technyanTuxedoCat', imagePath: '/technyans/webp/tuxedo_cat_coding_1763533875923.webp', category: 'basic' },
  { id: 'white', nameKey: 'technyanWhiteCat', imagePath: '/technyans/webp/white_cat_coding_1763534142280.webp', category: 'basic' },

  // Accessorized Cats
  { id: 'cap', nameKey: 'technyanCapCat', imagePath: '/technyans/webp/cap_cat_coding_1763535331798.webp', category: 'accessorized' },
  { id: 'fluffy-bowtie', nameKey: 'technyanFluffyBowtie', imagePath: '/technyans/webp/fluffy_cat_bowtie_coding_1763535495597.webp', category: 'accessorized' },
  { id: 'headphones', nameKey: 'technyanHeadphones', imagePath: '/technyans/webp/headphones_cat_coding_1763535318801.webp', category: 'accessorized' },
  { id: 'scottish-fold', nameKey: 'technyanScottishFold', imagePath: '/technyans/webp/scottish_fold_glasses_coding_1763535486823.webp', category: 'accessorized' },
  { id: 'sunglasses', nameKey: 'technyanSunglasses', imagePath: '/technyans/webp/sunglasses_cat_coding_1763535341887.webp', category: 'accessorized' },

  // Themed Cats
  { id: 'alien', nameKey: 'technyanAlien', imagePath: '/technyans/webp/alien_cat_coding_1763622719637.webp', category: 'themed' },
  { id: 'astronaut', nameKey: 'technyanAstronaut', imagePath: '/technyans/webp/astronaut_cat_coding_1763535657923.webp', category: 'themed' },
  { id: 'chef', nameKey: 'technyanChef', imagePath: '/technyans/webp/chef_cat_coding_1763535677341.webp', category: 'themed' },
  { id: 'clown', nameKey: 'technyanClown', imagePath: '/technyans/webp/clown_cat_coding_1763563163981.webp', category: 'themed' },
  { id: 'construction', nameKey: 'technyanConstruction', imagePath: '/technyans/webp/construction_cat_coding_1763563066516.webp', category: 'themed' },
  { id: 'detective', nameKey: 'technyanDetective', imagePath: '/technyans/webp/detective_cat_coding_1763535667068.webp', category: 'themed' },
  { id: 'diver', nameKey: 'technyanDiver', imagePath: '/technyans/webp/diver_cat_coding_1763561808166.webp', category: 'themed' },
  { id: 'elf', nameKey: 'technyanElf', imagePath: '/technyans/webp/elf_cat_coding_1763622680046.webp', category: 'themed' },
  { id: 'fairy', nameKey: 'technyanFairy', imagePath: '/technyans/webp/fairy_cat_coding_1763561829624.webp', category: 'themed' },
  { id: 'farmer', nameKey: 'technyanFarmer', imagePath: '/technyans/webp/farmer_cat_coding_1763561866358.webp', category: 'themed' },
  { id: 'firefighter', nameKey: 'technyanFirefighter', imagePath: '/technyans/webp/firefighter_cat_coding_1763563080105.webp', category: 'themed' },
  { id: 'gamer', nameKey: 'technyanGamer', imagePath: '/technyans/webp/gamer_cat_coding_1763535504419.webp', category: 'themed' },
  { id: 'ghost', nameKey: 'technyanGhost', imagePath: '/technyans/webp/ghost_cat_coding_1763622739406.webp', category: 'themed' },
  { id: 'graduate', nameKey: 'technyanGraduate', imagePath: '/technyans/webp/graduate_cat_coding_1763563154017.webp', category: 'themed' },
  { id: 'kimono', nameKey: 'technyanKimono', imagePath: '/technyans/webp/kimono_cat_coding_1763563056999.webp', category: 'themed' },
  { id: 'king', nameKey: 'technyanKing', imagePath: '/technyans/webp/king_cat_coding_1763561794895.webp', category: 'themed' },
  { id: 'magician', nameKey: 'technyanMagician', imagePath: '/technyans/webp/magician_cat_coding_1763622666138.webp', category: 'themed' },
  { id: 'mummy', nameKey: 'technyanMummy', imagePath: '/technyans/webp/mummy_cat_coding_1763622728929.webp', category: 'themed' },
  { id: 'nurse', nameKey: 'technyanNurse', imagePath: '/technyans/webp/nurse_cat_coding_1763563125605.webp', category: 'themed' },
  { id: 'orc', nameKey: 'technyanOrc', imagePath: '/technyans/webp/orc_cat_coding_1763622690167.webp', category: 'themed' },
  { id: 'pilot', nameKey: 'technyanPilot', imagePath: '/technyans/webp/pilot_cat_coding_1763563104703.webp', category: 'themed' },
  { id: 'pirate', nameKey: 'technyanPirate', imagePath: '/technyans/webp/pirate_cat_coding_1763535686717.webp', category: 'themed' },
  { id: 'police', nameKey: 'technyanPolice', imagePath: '/technyans/webp/police_cat_coding_1763563094098.webp', category: 'themed' },
  { id: 'robot', nameKey: 'technyanRobot', imagePath: '/technyans/webp/robot_cat_coding_1763535696477.webp', category: 'themed' },
  { id: 'rockstar', nameKey: 'technyanRockstar', imagePath: '/technyans/webp/rockstar_cat_coding_1763561840647.webp', category: 'themed' },
  { id: 'samurai', nameKey: 'technyanSamurai', imagePath: '/technyans/webp/samurai_cat_coding_1763563047241.webp', category: 'themed' },
  { id: 'skater', nameKey: 'technyanSkater', imagePath: '/technyans/webp/skater_cat_coding_1763561852261.webp', category: 'themed' },
  { id: 'superhero', nameKey: 'technyanSuperhero', imagePath: '/technyans/webp/superhero_cat_coding_1763561771414.webp', category: 'themed' },
  { id: 'teacher', nameKey: 'technyanTeacher', imagePath: '/technyans/webp/teacher_cat_coding_1763563139869.webp', category: 'themed' },
  { id: 'vampire', nameKey: 'technyanVampire', imagePath: '/technyans/webp/vampire_cat_coding_1763561760001.webp', category: 'themed' },
  { id: 'viking', nameKey: 'technyanViking', imagePath: '/technyans/webp/viking_cat_coding_1763561877315.webp', category: 'themed' },
  { id: 'wizard', nameKey: 'technyanWizard', imagePath: '/technyans/webp/wizard_cat_coding_1763535723015.webp', category: 'themed' },
  { id: 'zombie', nameKey: 'technyanZombie', imagePath: '/technyans/webp/zombie_cat_coding_1763561785164.webp', category: 'themed' },
];

type FilterType = 'all' | 'basic' | 'accessorized' | 'themed';

const TechnyanGalleryContent: React.FC = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTechnyans = filter === 'all'
    ? technyanData
    : technyanData.filter(cat => cat.category === filter);

  const getCategoryLabel = (category: 'basic' | 'accessorized' | 'themed'): string => {
    const categoryMap = {
      basic: t('categoryBasic'),
      accessorized: t('categoryAccessorized'),
      themed: t('categoryThemed'),
    };
    return categoryMap[category];
  };

  const filterButtons: { labelKey: keyof typeof translations.en; value: FilterType }[] = [
    { labelKey: 'filterAll', value: 'all' },
    { labelKey: 'filterBasic', value: 'basic' },
    { labelKey: 'filterAccessorized', value: 'accessorized' },
    { labelKey: 'filterThemed', value: 'themed' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-ibm-plex-mono text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4">
          {t('galleryTitle')}
        </h1>
        <p className="text-navy text-base md:text-lg max-w-2xl mx-auto">
          {t('galleryDescription')}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10">
        {filterButtons.map(({ labelKey, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`
              px-4 py-2 rounded-lg border-1.5 font-ibm-plex-mono font-medium
              transition-all duration-200
              ${filter === value
                ? 'bg-navy text-cream border-navy retro-shadow'
                : 'bg-cream text-navy border-navy hover:retro-shadow-sm'
              }
            `}
          >
            {t(labelKey)} ({value === 'all' ? technyanData.length : technyanData.filter(c => c.category === value).length})
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {filteredTechnyans.map((technyan) => (
          <div
            key={technyan.id}
            className="group card bg-cream border-1.5 border-navy p-3 transition-all duration-300 hover:retro-shadow cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-square mb-3 overflow-hidden rounded-lg border-1.5 border-navy bg-white select-none">
              <img
                src={technyan.imagePath}
                alt={t(technyan.nameKey)}
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none"
              />
              {/* Protective overlay */}
              <div
                className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            {/* Name */}
            <h3 className="font-ibm-plex-mono text-sm md:text-base font-medium text-navy text-center">
              {t(technyan.nameKey)}
            </h3>

            {/* Category Badge */}
            <div className="mt-2 flex justify-center">
              <span className={`
                inline-block px-2 py-1 rounded text-xs font-ibm-plex-mono
                ${technyan.category === 'basic' ? 'bg-navy/10 text-navy' : ''}
                ${technyan.category === 'accessorized' ? 'bg-navy/20 text-navy' : ''}
                ${technyan.category === 'themed' ? 'bg-navy/30 text-navy' : ''}
              `}>
                {getCategoryLabel(technyan.category)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTechnyans.length === 0 && (
        <div className="text-center py-12">
          <p className="text-navy text-lg font-ibm-plex-mono">
            {t('galleryNoResults')}
          </p>
        </div>
      )}

      {/* Total Count */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-navy/60 font-ibm-plex-mono text-sm">
          {t('galleryShowing')} {filteredTechnyans.length} {t('galleryOf')} {technyanData.length} {t('galleryTechnyans')}
        </p>
      </div>

      {/* Copyright Notice */}
      <div className="mt-6 text-center">
        <p className="text-navy/50 font-ibm-plex-mono text-xs">
          © {new Date().getFullYear()} {t('galleryCopyright')}
        </p>
      </div>
    </div>
  );
};

const TechnyanGallery: React.FC = () => {
  return (
    <I18nProvider>
      <TechnyanGalleryContent />
    </I18nProvider>
  );
};

export default TechnyanGallery;
