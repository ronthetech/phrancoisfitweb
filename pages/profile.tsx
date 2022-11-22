import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";

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
        <div className="bg-indigo-200 rounded-lg text-center shadow-lg transition-all sm:my-8 my-6 sm:w-full sm:max-w-xl p-6 mx-auto">
          <Image
            src={user.picture!}
            alt={user.name!}
            height={100}
            width={100}
          />
          <h1 className="text-lg text-indigo-900">{user?.name}</h1>
          <p className="text-base text-indigo-800">{user?.email}</p>
        </div>
      </>
    )
  );
}
