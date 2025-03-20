import {
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetMini,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetWind4(), // Sorry Antfu, it doesn't work normal
    // presetMini(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Barlow',
          weights: [300, 400, 500, 600, 700, 800, 900],
        },
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    breakpoint: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1596px',
      'xxl': '1596px',
    },
    // "sm": "40rem",
    // "md": "48rem",
    // "lg": "64rem",
    // "xl": "80rem",
    // "2xl": "96rem"
    colors: {
      greenbrand: {
        primary: '#9EFF00',
        DEFAULT: '#9EFF00',
        50: '#9EFF00',
        60: '#81FF33',
        70: '#C5FF66',
        80: '#D8FF99',
        90: '#ECFFCC',
        95: '#F5FFE5',
        97: '#F9FFF0',
        99: '#FDFFFA',
      },

      greybrand: {
        10: '#191919',
        15: '#262626',
        20: '#333333',
        30: '#4C4C4D',
        35: '#59595A',
        40: '#656567',
        60: '#98989A',
        90: '#E6E6E6',
      },
    },
  },
  transformers: [
    transformerDirectives(),
  ],
})
