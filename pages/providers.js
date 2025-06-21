import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '../styles';
import { GlobalStyle } from '../styles';

export const ThemeContext = React.createContext({
  darkMode: false,
  toggle: () => {},
  mounted: false,
});

const Providers = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  const darkMode = useDarkMode(false, {
    storageKey: 'theme-preference',
    onChange: null,
  });

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const theme = !mounted ? lightTheme : (darkMode.value ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ ...darkMode, mounted }}>
      <ThemeProvider theme={theme}>
        {mounted && <GlobalStyle />}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Providers;