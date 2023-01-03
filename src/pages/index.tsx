import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Dungeons And Dummies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        
      </main>
    </>
  );
};

export default Home;

