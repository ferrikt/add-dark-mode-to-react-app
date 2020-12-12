import Content from './components/content';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, lightTheme, darkTheme } from './styled/styled';

const App = () => {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('react-app-theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme')
      ? localStorage.getItem('react-app-theme')
      : 'light';

    setTheme(theme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Content theme={theme} changeTheme={changeTheme} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
