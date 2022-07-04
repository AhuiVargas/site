import React from "react";
import styled from "styled-components";

import { mixins } from '../styles';

const StyledFooter = styled.footer`
  padding: 2rem;

  .__wrapper {
    max-width: 74rem;
    margin: 0px auto;
    background-color: transparent;
  }

  .__menu {
    ${mixins.grid}
    a {
      display: block;
      padding: 1rem;
      color: ${props => props.theme.text.primary};
      text-align: center;
      background-color: ${props => props.theme.bg.secondary};
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;

      &:hover {
        color: white;
        background-color: ${props => props.theme.bg.quarternary};
      }
    }
  }
`;

const Social = ({}) => (
  <section>
  <StyledFooter>
    <div className="__wrapper">
      <div className="__menu">
        <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
        <a href="https://read.cv/ahuizotl" rel="noopener noreferrer" target="_blank">CV</a>
        <a href="https://www.linkedin.com/in/ahuivargas" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <a href="https://github.com/AhuiVargas/" rel="noopener noreferrer" target="_blank">GitHub</a>
        {/* <a href="https://www.codewars.com/users/Ahuizotl" rel="noopener noreferrer" target="_blank">CodeWars</a> */}
        <a href="https://twitter.com/itsmeahui" rel="noopener noreferrer" target="_blank">Twitter</a>
        <a href="https://www.instagram.com/ahuivargas/" rel="noopener noreferrer" target="_blank">Instagram</a>
        {/* <a href="https://www.mixcloud.com/ahui-vargas-casta%C3%B1eda/" rel="noopener noreferrer" target="_blank">MixCloud</a> */}
      </div>
    </div>
</StyledFooter>
  </section>
)

export default Social;