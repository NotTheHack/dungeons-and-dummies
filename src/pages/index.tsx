import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dungeons & Dummies</title>
        <meta name="description" content="Dungeons And Dummies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-8 flex justify-center">
        <h1 className="text-2xl">Bem vindo ao RPG tático Dungeons & Dummies</h1>
      </main>
    </>
  );
};

export default Home;
