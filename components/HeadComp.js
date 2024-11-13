import React from "react";
import Head from "next/head";

const HeadComp = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <meta property="og:title" content="ahuizotl.dev" />
      <meta property="og:description" content="Web Development" />
      <meta property="og:image" content="https://ahuizotl.dev/og-image.png" />
      <meta property="og:url" content="https://ahuizotl.dev" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ahuizotl.dev" />
      <meta name="twitter:description" content="Web Development" />
      <meta name="twitter:image" content="/og-image.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComp;
