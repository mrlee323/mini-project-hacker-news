import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.textColor};
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --gray700: #383838;
    --gray500: #727272;
    --gray400: #b7b7b7;
    --gray300: #dfdfdf;
    --orange: #ed702d;
  }
`;
export default GlobalStyle;
