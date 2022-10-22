import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import bg_gym from "public/bg_gym.jpg";
import fitness_tracker_bro from "public/fitness_tracker_bro.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Image
        alt="Vercel logo"
        src={bg_gym}
        width={1000}
        height={1000}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      /> */}
      <Image
        alt="Fitness Tracker Bro"
        src={fitness_tracker_bro}
        width={1000}
        height={1000}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Home;
