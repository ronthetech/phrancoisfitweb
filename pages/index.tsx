import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1>Phrancois Fit</h1>
      </main>

      <footer className="">
        <a href="" target="_blank" rel="noopener noreferrer"></a>
      </footer>
    </div>
  );
};

export default Home;
