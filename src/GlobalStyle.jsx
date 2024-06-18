import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

body {
  width: 100%;
  font-family: 'Pretendard-Regular';
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export default GlobalStyle;
