import Head from "next/head";
import "tailwindcss/tailwind.css";
import Layout from 'C:/Users/kelvi/Downloads/hashtag-generator-app/components/layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Head>
        <title>Tiktok Analytic Dashboard</title>
      </Head>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
