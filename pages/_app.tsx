import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "components/layouts/MainLayout";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UserProvider>
  );
}

export default MyApp;
