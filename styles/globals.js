import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { media } from './media';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background-color: ${colors.offWhite};
    color: ${colors.blackFont};
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.inter};
    color: ${colors.blackFont};
    background-color: ${colors.offWhite};
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: .5rem;
    font-weight: 800;
    ${media.bp700`
      font-size: 2.4rem;
      margin-bottom: 2rem;
      font-weight: 800;
    `}
  }

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${colors.blueFont};
    font-weight: 800;
    margin-top: 0;
    ${media.bp700`
      font-size: 1.6rem;
    `}
  }

  a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${colors.blueFont};
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 0.5rem;
  }

  p {
    line-height: 1.5;
    font-size: 1.7rem;
    font-weight: 400;
    ${media.bp700`
      font-size: 1.3rem;
    `}
  }
`;

export default GlobalStyle;