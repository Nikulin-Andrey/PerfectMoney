const THEME_UNIT_SIZE = 8

const spacing = margins => THEME_UNIT_SIZE * margins

const config = {
  spacing,
  colors: {
    background: '#ffffff',
    font: '#333333',
    primary: 'cornflowerblue',
  },
  fonts: {
    big: spacing(4),
  },
  breakpoints: {
    desktop: {
      maxWidth: 1280,
    },
  },
}

export default config
