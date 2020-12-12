import Content from './components/content';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, lightTheme, darkTheme } from './styled/styled';

const App = () => {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Content theme={theme} changeTheme={changeTheme} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
