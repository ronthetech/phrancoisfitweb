import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import MainLayout from "components/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

export default MyApp;
