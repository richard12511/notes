import { UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useEffect } from "react";
import { Header } from "~/components/Header";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn)
    return (
      <main className="flex h-screen flex-col">
        {" "}
        <UserButton afterSignOutUrl="/" />
      </main>
    );

  const { data: topics } = api.topic.getAll.useQuery();

  return (
    <>
      <main className="flex h-screen flex-col">
        <Header />
        <div className="overflow-none grid h-full max-h-screen w-full grid-cols-10 gap-3 p-3">
          <div className="card col-span-2 flex h-full flex-col border border-rose-500">
            <div className="card-body flex flex-col">
              <div className="flex-1">
                {topics?.map((topic) => (
                  <div key={topic.id} className="flex justify-between">
                    {topic.title}
                  </div>
                ))}
              </div>
              <div className="flex-none">Add Topic</div>
            </div>
          </div>
          <div className="card col-span-8 border border-slate-600">
            <div className="card-body">
              <h2 className="card-title">Notes</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
