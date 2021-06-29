import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '../styles';

const Providers = ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? darkTheme : lightTheme;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = 
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body;
}

export default Providers;