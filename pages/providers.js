import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '../styles';

export const ThemeContext = React.createContext({
  darkMode: false,
  toggle: () => {},
});

const Providers = ({ children }) => {
  const darkMode = useDarkMode(false, {
    storageKey: 'theme-preference',
    onChange: null,
  });
  
  const theme = darkMode.value ? darkTheme : lightTheme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body;
}

export default Providers;