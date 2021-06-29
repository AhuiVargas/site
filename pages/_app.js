import App from "next/app";
import React from "react";
import Providers from './providers';
import { GlobalStyle } from "../styles";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Providers>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Providers>
    );
  }
}

export default MyApp;
