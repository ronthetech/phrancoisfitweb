import { useUser } from "@auth0/nextjs-auth0";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Head from "next/head";

export default function Profile() {
  const { user, isLoading } = useUser();
  if (isLoading)
    return (
      <div>
        <h1 className="text-lg text-indigo-900">LOADING... Please wait</h1>
      </div>
    );
  return (
    user && (
      <>
        <Head>
          <title>Phrancois Fit</title>
          <meta name="description" content="Phrancois Fit web app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-xl font-bold">Profile</h1>
        <div>
          <img src={user.picture!} alt={user.name!} />
          <h1 className="text-lg text-indigo-900">{user?.name}</h1>
          <p className="text-base text-indigo-800">{user?.email}</p>
        </div>
      </>
    )
  );
}
