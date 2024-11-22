import React from "react";
import Providers from "./providers";
import { GlobalStyle } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </Providers>
  );
}

export default MyApp;
