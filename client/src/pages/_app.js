import Head from "next/head";

import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Samuel Ping" />
        <meta name="description" content="Samuel Ping's website!" />
        <meta
          name="keywords"
          content="Samuel, Ping, personal, website, intern, software, engineering"
        />
        <meta name="theme-color" content="#bdd9c8" />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
