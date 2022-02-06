import { ThemeProvider as StyledProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);

  return <StyledProvider theme={mode}>{children}</StyledProvider>;
};

export default ThemeProvider;
