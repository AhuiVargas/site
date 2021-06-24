import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import memoji from "../styles/assets/memoji.png"
import { mixins } from '../styles';

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

      .__MemojiContainer {
        ${mixins.flexEnd}
        margin-bottom: 3rem;
    
        .__Memoji {
          max-width: 15rem;
          line-height: 0;
    
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
      color: rgb(15, 20, 25);
      text-align: center;
      background: rgb(191, 197, 193);
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const Home = () => {
  return (
    <main>
      <HeroHeaderStyled>
        <div className="__HeroContent">
          <div className="__Wrapper">
            <StyledNav>
              <div className="__wrapper">
                <nav>
                  <a>Ahuizotl Vargas</a>
                </nav>
              </div>
            </StyledNav>
    
            <div className="__MemojiContainer">
              <div className="__Memoji">
                <Image src={memoji} alt="memoji image"></Image>
              </div>
              <div>
                <h1 className='__Title'>{"Hello there! 👋  I'm Ahuizotl Vargas"}</h1>
                <h2 className='__Subtitle'>{"I love building things for the web and real life."}</h2>
              </div>
            </div>
    
            <p>{"I'm a frontend web developer from Mexico City 🇲🇽  who loves "}<strong>{"NextJs, React, Styled-Components, Tailwind, GraphQL, and Node."}</strong></p>
            <p>
              {"I work at"} {" "}
              <a href="https://kingtide.com/" rel="noopener noreferrer" target="_blank" className="__Link">{"KingTide"}</a> {" "}
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
    
            <StyledFooter>
              <div className="__wrapper">
                <div className="__menu">
                  <a>Email</a>
                  <a>CV</a>
                  <a>GitHub</a>
                  <a>GitHub</a>
                  <a>GitHub</a>
                  <a>GitHub</a>
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
