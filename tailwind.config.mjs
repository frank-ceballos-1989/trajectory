import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EDE3',
        sand: '#E5DDCC',
        ink: '#14110E',
        graphite: '#4A433B',
        // `ember` for graphics and large type; `ember-deep` for small text on paper (AA contrast).
        ember: { DEFAULT: '#E2512B', deep: '#B3301A' },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', ...defaultTheme.fontFamily.serif],
        sans: ['"Instrument Sans Variable"', ...defaultTheme.fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Height-aware: the name never grows taller than about a quarter of the screen, so the first view always shows the call to action.
        'display-xl': ['clamp(4.75rem, min(17.5vw, 26svh), 17rem)', { lineHeight: '0.8', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6.75rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 4.2vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 2.4vw, 2.1rem)', { lineHeight: '1.12', letterSpacing: '-0.012em' }],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
