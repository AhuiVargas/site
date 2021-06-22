import Head from "next/head";
import React from "react";
import Router from "next/router";
import styled from "styled-components";

const StyledContainer = styled.div`
  h2 {
    color: rgb(70, 119, 168);
  }
`;

const Home = () => {
  return (
    <main>
      <StyledContainer>
        <h1>{"Hello there! 👋  I'm Ahuizotl Vargas"}</h1>
        <h2>I love building things for the web and real life.</h2>
      </StyledContainer>
    </main>
  );
};

export default Home;
