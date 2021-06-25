import { css } from "styled-components";

const sizes = {
  bp900: 900,
  bp700: 700,
  bp400: 400,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // https://zellwk.com/blog/media-query-units/
  // use em in breakpoints to work properly cross-browser and support users
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
