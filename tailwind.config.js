const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
        dim: '#f0f0f0',
      },
      black: {
        DEFAULT: '#000000',
        dim: '#595959',
        alt: '#193668',
      },
      red: {
        DEFAULT: '#a60000',
        warmer: '#972500',
        cooler: '#a0132f',
        faint: '#7f0000',
        intense: '#d00000',
      },
      green: {
        DEFAULT: '#006800',
        warmer: '#316500',
        cooler: '#00663f',
        faint: '#2a5045',
        intense: '#008900',
      },
      yellow: {
        DEFAULT: '#6f5500',
        warmer: '#884900',
        cooler: '#7a4f2f',
        faint: '#624416',
        intense: '#808000',
      },
      blue: {
        DEFAULT: '#0031a9',
        warmer: '#354fcf',
        cooler: '#0000b0',
        faint: '#003497',
        intense: '#0000ff',
      },
      magenta: {
        DEFAULT: '#721045',
        warmer: '#8f0075',
        cooler: '#531ab6',
        faint: '#7c318f',
        intense: '#dd22dd',
      },
      cyan: {
        DEFAULT: '#005e8b',
        warmer: '#3f578f',
        cooler: '#005f5f',
        faint: '#005077',
        intense: '#008899',
      },
      rust: '#8a290f',
      gold: '#80601f',
      olive: '#56692d',
      slate: '#2f3f83',
      indigo: '#4a3a8a',
      maroon: '#731c52',
      pink: '#7b435c',

      // Background colors
      intense: {
        red: '#ff8f88',
        green: '#8adf80',
        yellow: '#f3d000',
        blue: '#bfc9ff',
        magenta: '#dfa0f0',
        cyan: '#a4d5f9',
      },
      subtle: {
        red: '#ffcfbf',
        green: '#b3fabf',
        yellow: '#fff576',
        blue: '#ccdfff',
        magenta: '#ffddff',
        cyan: '#bfefff',
      },
      nuanced: {
        red: '#fff1f0',
        green: '#ecf7ed',
        yellow: '#fff3da',
        blue: '#f3f3ff',
        magenta: '#fdf0ff',
        cyan: '#ebf6fa',
      },
    },
    plugins: []
  }
}
