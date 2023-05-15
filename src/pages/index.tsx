import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useEffect } from "react";
import { Header } from "~/components/Header";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.topic.getAll.useQuery();

  return (
    <>
      <main>
        <Header />
        <div className="flex h-screen w-full">
          <span>OH HAI!</span>
        </div>
      </main>
    </>
  );
};

export default Home;
