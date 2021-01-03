import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm Sam, a sophomore at Rutgers University- New Brunswick.</p>
        <p>I'm currently struggling to set up Netlify CMS for my website :\</p>
      </section>
    </Layout>
  );
}