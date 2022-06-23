//@ts-noCheck
import type { NextPage } from "next";
import Head from "next/head";
import Table from "../components/table";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen p-2  items-center justify-center bg-gray-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Table />
    </div>
  );
};

export default Home;
