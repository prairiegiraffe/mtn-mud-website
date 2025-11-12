import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';
import headlessUiPlugin from '@headlessui/tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Brand Colors - Safety & Energy
        'safety-orange': {
          DEFAULT: '#DD5E26',
          50: '#FEF3EE',
          100: '#FCE4D6',
          200: '#F9C8AD',
          300: '#F5A379',
          400: '#EF7A43',
          500: '#DD5E26',
          600: '#C2491A',
          700: '#9F3818',
          800: '#7F2F1A',
          900: '#672817',
        },
        // Neutrals - Professional & Warm
        charcoal: {
          DEFAULT: '#343230',
          50: '#F5F4F4',
          100: '#E6E5E4',
          200: '#CFCDCB',
          300: '#ADA9A6',
          400: '#8A8582',
          500: '#6F6B68',
          600: '#5A5754',
          700: '#4A4744',
          800: '#343230',
          900: '#1F1E1D',
          950: '#0A0A0A',
        },
        // Dark theme greys and blacks
        'dark-bg': {
          DEFAULT: '#121212', /* Nearly black primary */
          light: '#1C1C1C', /* Card/section backgrounds */
          lighter: '#262626', /* Hover states */
          dark: '#0A0A0A', /* True black for contrast */
        },
        'dark-text': {
          DEFAULT: '#F5F5F5', /* Primary text */
          muted: '#A3A3A3', /* Secondary text */
          heading: '#FFFFFF', /* Headings */
        },
        // Warm Backgrounds
        'warm-white': '#FDFCFB',
        'warm-gray': {
          DEFAULT: '#F7F6F4',
          50: '#FDFCFB',
          100: '#F7F6F4',
          200: '#EEECEA',
          300: '#E0DDD9',
          400: '#C9C4BE',
        },
        // Trust & Technology Accent
        slate: {
          DEFAULT: '#4A5568',
          light: '#718096',
          dark: '#2D3748',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--aw-font-mono, ui-monospace)', ...defaultTheme.fontFamily.mono],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(52, 50, 48, 0.08)',
        'soft-lg': '0 4px 16px rgba(52, 50, 48, 0.12)',
        'soft-xl': '0 8px 32px rgba(52, 50, 48, 0.16)',
        'orange-glow': '0 4px 16px rgba(221, 94, 38, 0.25)',
        'inner-soft': 'inset 0 2px 4px rgba(52, 50, 48, 0.06)',
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    headlessUiPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
