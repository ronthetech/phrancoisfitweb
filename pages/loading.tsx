import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";

export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-lg text-indigo-900">LOADING... Please wait</h1>
      </div>
    </>
  );
}
