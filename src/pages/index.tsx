import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useEffect } from "react";
import { Header } from "~/components/Header";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: topics } = api.topic.getAll.useQuery();

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header />
        <div className="overflow-none grid h-full max-h-screen w-full grid-cols-10 gap-3 p-3">
          <div className="col-span-2 flex h-full flex-col border border-rose-500">
            <div className="flex-1">Topics</div>
            <div className="flex-none">Add Topic</div>
          </div>
          <div className="col-span-8 border border-slate-600">Notes List</div>
        </div>
      </main>
    </>
  );
};

export default Home;
