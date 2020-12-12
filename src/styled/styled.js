import styled, { ThemeProvider } from 'styled-components';
import { Sun } from '@styled-icons/evaicons-solid/Sun';
import { Moon } from '@styled-icons/fa-regular/Moon';

export const SunImg = styled(Sun)`
  width: 50px;
  height: 50px;
`;

export const MoonImg = styled(Moon)`
  transition: all 0.5s linear;
  width: 50px;
  height: 50px;
`;

export const lightTheme = {
  background: '#fff',
  color: '#121212',
  primary: '#6200ee',
};

export const darkTheme = {
  background: '#121212',
  color: '#fff',
  primary: '#bb86fc',
};

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  max-width: 50%;
  margin: 8rem auto 0;
  padding: 1rem;
  font-family: 'Roboto', sans-serif;
  transition: all 0.5s linear;
  line-height: 1.4rem;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${({ theme }) => theme.background};
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s linear;
`;

// Container.defaultProps = {
//   lightTheme: {
//     background: '#fff',
//     color: '#121212',
//     primary: '#6200ee',
//   },
//   darkTheme:{
//     background: '#121212',
//     color: '#fff',
//     primary: '#bb86fc',
//   }
// }
