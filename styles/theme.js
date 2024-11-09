const light = {
  bg: {
    primary: '#eeeeee',  // offWhite
    secondary: '#bfc5c1', // gray
    tertiary: '#345280', // navy
    quarternary: '#777777', //darkGray
  },
  text: {
    primary: '#0f1419',  // blackFront
    secondary: '#4677a8', // blueFont
    contrast: '#eeeeee',  // offWhite
    anchor: '#0f1419'
  },
  rgba: {
    fullscreen: 'rgba(0, 0, 0, 0.25)',
    menu: 'rgba(255, 255, 255, 0.85)',
    active: 'rgba(255, 255, 255, 0.65)',
  },
}

const dark = {
  bg: {
    primary: '#151515', // black 
    secondary: '#181818', // lighter black 
    tertiary: '#345280', // navy
    quarternary: '#ADADAD' // light gray
  },
  text: {
    primary: '#eeeeee',  // offWhite
    secondary: '#4677a8', // blueFront
    contrast: '#0f1419',  // offWhite
    anchor: '#0f1419',  // blackFront
  },
  rgba: {
    fullscreen: 'rgba(0, 0, 0, 0.25)',
    menu: 'rgba(255, 255, 255, 0.85)',
    active: 'rgba(255, 255, 255, 0.65)',
  },
}

const defaultTheme = {

  fonts: {
    inter: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
    mono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  transition: 'all 0.3s ease-in-out 0s',
}

export const lightTheme = { ...defaultTheme, ...light};
export const darkTheme = { ...defaultTheme, ...dark};