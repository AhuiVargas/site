import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexCenterBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  flexEnd: css`
    display: flex;
    align-items: flex-end;
  `,

  grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(124px, 1fr));
    gap: 1rem;
  `,

  outline: css`
    outline: 1px solid red;
  `,
};

export default mixins;
