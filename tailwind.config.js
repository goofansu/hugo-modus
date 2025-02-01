const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      operandi: {
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
      vivendi: {
        white: {
          DEFAULT: '#ffffff',
          dim: '#989898',
          alt: '#c6daff'
        },
        black: {
          DEFAULT: '#000000',
          dim: '#1e1e1e',
        },
        red: {
          DEFAULT: '#ff5f59',
          warmer: '#ff6b55',
          cooler: '#ff7f9f',
          faint: '#ff9580',
          intense: '#ff5f5f',
        },
        green: {
          DEFAULT: '#44bc44',
          warmer: '#70b900',
          cooler: '#00c06f',
          faint: '#88ca9f',
          intense: '#44df44',
        },
        yellow: {
          DEFAULT: '#d0bc00',
          warmer: '#fec43f',
          cooler: '#dfaf7a',
          faint: '#d2b580',
          intense: '#efef00',
        },
        blue: {
          DEFAULT: '#2fafff',
          warmer: '#79a8ff',
          cooler: '#00bcff',
          faint: '#82b0ec',
          intense: '#338fff',
        },
        magenta: {
          DEFAULT: '#feacd0',
          warmer: '#f78fe7',
          cooler: '#b6a0ff',
          faint: '#caa6df',
          intense: '#ff66ff',
        },
        cyan: {
          DEFAULT: '#00d3d0',
          warmer: '#4ae2f0',
          cooler: '#6ae4b9',
          faint: '#9ac8e0',
          intense: '#00eff0',
        },
        rust: '#db7b5f',
        gold: '#c0965b',
        olive: '#9cbd6f',
        slate: '#76afbf',
        indigo: '#9099d9',
        maroon: '#cf7fa7',
        pink: '#d09dc0',

        // Background colors
        intense: {
          red: '#9d1f1f',
          green: '#2f822f',
          yellow: '#7a6100',
          blue: '#1640b0',
          magenta: '#7030af',
          cyan: '#2266ae',
        },
        subtle: {
          red: '#620f2a',
          green: '#00422a',
          yellow: '#4a4000',
          blue: '#242679',
          magenta: '#552f5f',
          cyan: '#004065',
        },
        nuanced: {
          red: '#2c0614',
          green: '#001904',
          yellow: '#221000',
          blue: '#0f0e39',
          magenta: '#230631',
          cyan: '#041529',
        },
      },
    },
    plugins: []
  }
}
