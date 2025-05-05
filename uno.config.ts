import {
  defineConfig,
  // presetAttributify,
  presetIcons,
  // presetMini,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetWind4(), // Sorry Antfu, it doesn't work normal
    // presetMini(),
    // presetAttributify(),
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
        inter: {
          name: 'Inter',
          weights: [300, 400, 500, 600, 700, 800, 900],
        },
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
        primary: '#ff3300',
        DEFAULT: '#ff3300',
        50: '#ff3300', // hsl(82.8, 100%, 50%)
        60: '#ff5f33', // hsl(97.1, 100%, 60%)
        70: '#ff8766', // hsl(82.7, 100%, 70%)
        80: '#ffac99', // hsl(82.9, 100%, 80%)
        90: '#ffdacc', // hsl(82.4, 100%, 90%)
        95: '#ffede5', // hsl(83.1, 100%, 94.9%)
        97: '#fff6f0', // hsl(84, 100%, 97.1%)
        99: '#fffcfa', // hsl(84, 100%, 99%)
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
    transformerVariantGroup(),
  ],
})
