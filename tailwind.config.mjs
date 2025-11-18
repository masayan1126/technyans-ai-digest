/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF6D0',
        navy: {
          DEFAULT: '#0C2340',
          light: '#142850',
        },
      },
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      animation: {
        'bounce-in': 'bounceIn 0.3s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px) scale(0.9)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-5px) scale(1.05)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
