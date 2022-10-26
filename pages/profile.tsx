import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-bold">Profile</h1>
      <div></div>
    </div>
  );
}
