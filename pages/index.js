import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Cross as Hamburger} from 'hamburger-react';
import memoji from "../styles/assets/memoji.png";
import sun from "../styles/assets/sun.svg";
import moon from "../styles/assets/moon.svg"
import { mixins, theme, media } from '../styles';
const { colors } = theme;

const HeroHeaderStyled = styled.section`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 4rem;
  overflow: visible;

  .__HeroContent {
    position: relative;
    z-index: 2;

    .__Wrapper {
      width: 100%;
      max-width: 74rem;
      margin: 0px auto;
      padding: 0px 2rem;

      .__Content {
        a {
          ${media.bp700`
            font-size: 1.1rem;
            font-weight: 800;
            word-break: break-all;
            background-color: ${colors.navy};
            color: ${colors.offWhite};
            padding: 0px 0.25rem;
            margin: 0px;
          `}
        }
      }

      .__MemojiContainer {
        ${mixins.flexEnd}
        margin-bottom: 3rem;  
        ${media.bp700`
        display: block
      `}

        .__Memoji {
          max-width: 15rem;
          line-height: 0;
          ${media.bp700`
          margin: 0px auto;
          `}
    
          .__Title {
            margin-bottom: 0.25rem;
            font-size: 3rem;
          }
    
          .__Subtitle {
            font-size: 2rem;
            line-height: 1.3;
          }
        }
      }
    }
  }
`;

const StyledNav = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: transparent;
  z-index: 200;
  ${mixins.outline};
  border-radius: 

  .__Wrapper {
    max-width: 74rem;
    background-color: transparent;
  }

  .__Menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 0.5rem;
    backdrop-filter: blur(16px);
    transition: all 0.3s ease-in-out 0s;
    background-color: rgba(0, 0, 0, 0.75);
    ${mixins.outline};

    .__AnchorLink {
      padding: 1rem 2rem;
      color: rgb(238, 238, 238);
      font-size: 1rem;
      cursor: pointer;
    }
  }

  .__MenuMobile {

    .__LinkGroup {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 1rem 0px;
      ${mixins.outline};

      .__SwitchMobile {
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(238, 238, 238);
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        cursor: pointer;
        backdrop-filter: blur(16px);

        .__LangSwitch {
          display: block;
          padding: 1rem;
          color: rgb(238, 238, 238);
          background: transparent;
          border: transparent;
          cursor: pointer;

          option {
            font-weight: normal;
            display: block;
            white-space: nowrap;
            min-height: 1.2em;
            padding: 0px 2px 1px;
          }
        }

        .__ThemeSwitch {
          display: flex;
          justify-content: flex-end;
          padding: 0.5rem 1rem;
          color: ${colors.offWhite};
          background: transparent;
          border: transparent;
          cursor: pointer;
          margin: 0px !important;
          img {
            width: 2rem;
            height: auto;
          }
        }
      }
    }
  }
`;

const StyledFooter = styled.footer`
  padding: 2rem;
  color: rgb(221, 221, 221);

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
      color: ${colors.blackFont};
      text-align: center;
      background-color: ${colors.gray};
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;

      &:hover {
        color: white;
        background-color: ${colors.darkGray};
      }
    }
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main>
      <StyledNav>
        <div className="__Wrapper">
          <nav className="__Menu">
            <a className="__AnchorLink">Ahuizotl Vargas</a>
            <div className="__BurgerBox">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color={colors.offWhite} duration={0.0} size={25}/>
            </div>
          </nav>
          {isOpen ? (
            <nav className="__MenuMobile">
              <div className="__LinkGroup">
                <div className="__SwitchMobile">
                  <select className="__LangSwitch">
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                  </select>
                </div>
                <div className="__SwitchMobile">
                  <button aria-label="Cambia el tema visual" className="__ThemeSwitch">
                    <Image src={moon} alt="sun image"/>
                  </button>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </StyledNav>
      <HeroHeaderStyled>
        <div className="__HeroContent">
          <div className="__Wrapper">
            <div className="__MemojiContainer">
              <div className="__Memoji">
                <Image src={memoji} alt="memoji image"></Image>
              </div>
              <div>
                <h1 className='__Title'>{"Hello there! 👋  I'm Ahuizotl Vargas"}</h1>
                <h2 className='__Subtitle'>{"I love building things for the web and real life."}</h2>
              </div>
            </div>
    
            <div className="__Content"> 
              <p>{"I'm a frontend web developer from Mexico City 🇲🇽  who loves "}<strong>{"NextJs, React, Styled-Components, Tailwind, GraphQL, and Node."}</strong></p>
              <p>
                {"I work at"} {" "}
                <a href="https://kingtide.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"King Tide"}</a> {" "}
                {"as a Frontend Web Developer, before I was part of "}
                <a href="https://rappi.com.mx/" rel="noopener noreferrer" target="_blank" className="__Link">{"Rappi"}</a>.
              </p>
              <p>
                {"Studied at "}
                <a href="https://ironhack.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"IronHack"}</a> {" "}
                {"and got a Certificate for the "}<strong>{"Fullstack Web Development "}</strong>{"bootcamp 💻."}
              </p>
              <p>
                {"I hate working alone, so please "}
                <a href="https://twitter.com/intent/tweet?text=Hi%20@itsmeahui%21" rel="noopener noreferrer" target="_blank" className="__Link">{"say hi. ♥️"}</a>
              </p>
            </div>
    
            <StyledFooter>
              <div className="__wrapper">
                <div className="__menu">
                  <a href="mailto:ahuijr@gmail.com" rel="noopener noreferrer" target="_blank">Email</a>
                  <a href="https://read.cv/ahuizotl" rel="noopener noreferrer" target="_blank">CV</a>
                  <a href="https://www.linkedin.com/in/ahui-vargas" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                  <a href="https://github.com/AhuiVargas/" rel="noopener noreferrer" target="_blank">GitHub</a>
                  <a href="https://twitter.com/itsmeahui" rel="noopener noreferrer" target="_blank">Twitter</a>
                  <a href="https://www.instagram.com/ahuivargas/" rel="noopener noreferrer" target="_blank">Instagram</a>
                </div>
              </div>
            </StyledFooter>
          </div>
        </div>
      </HeroHeaderStyled>
    </main>
  );
};

export default Home;
