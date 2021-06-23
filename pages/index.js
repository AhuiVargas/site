import Head from "next/head";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import memoji from "../styles/assets/memoji.webp"


const StyledWrapper = styled.div`
  width: 100%;
  max-width: 74rem;
  margin: 0px auto;
  padding: 0px 2rem;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 3rem;
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

  .menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(124px, 1fr));
    gap: 1rem;

    a {
      display: block;
      padding: 1rem;
      color: rgb(15, 20, 25);
      text-align: center;
      background: rgb(191, 197, 193);
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out 0s;
    }
  }
`;

const Home = () => {
  return (
    <section>
    <StyledNav>
        <div className="__wrapper">
          <nav>
            <a>Ahuizotl Vargas</a>
          </nav>
        </div>
      </StyledNav>
      <StyledWrapper>

        <StyledHeader>
          <div className="__MemojiContainer">
            <Image src={memoji} alt="memoji image" className="__Memoji"></Image>
            <h1>{"Hello there! 👋  I'm Ahuizotl Vargas"}</h1>
            <h2>{"I love building things for the web and real life."}</h2>
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
        </StyledHeader>

      <StyledFooter>
        <div className="__wrapper">
          <div className="menu">
            <a>Email</a>
            <a>CV</a>
            <a>GitHub</a>
            <a>GitHub</a>
            <a>GitHub</a>
            <a>GitHub</a>
          </div>
        </div>
      </StyledFooter>
    </StyledWrapper>
    </section>
  );
};

export default Home;
