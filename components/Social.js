import React from "react";
import styled from "styled-components";
import { mixins } from '../styles';

const StyledFooter = styled.footer`
  padding: 2rem;
  background-color: #000;
  z-index: 10;

  position:relative;

  .__wrapper {
    max-width: 74rem;
    margin: 0 auto;
    background-color: transparent;
  }

  .__menu {
    ${mixins.grid}

    a {
      display: block;
      padding: 1rem;
      color: #fff;
      font-size: 1.1rem;
      font-weight: 200;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      background: transparent;
      position: relative;
      overflow: hidden;
      transition: color 0.5s ease; /* Smooth color transition */

      &:hover {
        color: #fff;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.6s ease; /* Smooth opacity transition */
      }

      &:hover:before {
        opacity: 1; /* Fade in the gradient background */
      }
    }
  }
`;

const Social = () => (
  <section>
    <StyledFooter>
      <div className="__wrapper">
        <div className="__menu">
          <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
          <a href="https://read.cv/ahuizotl" rel="noopener noreferrer" target="_blank">CV</a>
          <a href="https://www.linkedin.com/in/ahuivargas" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href="https://github.com/AhuiVargas/" rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href="https://twitter.com/itsmeahui" rel="noopener noreferrer" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/ahuivargas/" rel="noopener noreferrer" target="_blank">Instagram</a>
        </div>
      </div>
    </StyledFooter>
  </section>
);

export default Social;
