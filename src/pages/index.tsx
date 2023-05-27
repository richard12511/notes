import { UserButton, useUser } from "@clerk/nextjs";
import { create } from "domain";
import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Header } from "~/components/Header";
import PrimaryOutlineButton from "~/components/buttons/PrimaryOutlineButton";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  //I can't add this because the conditional render gives the "React has detected a change in the order of Hooks" but Hooks seem to be invoked in order" error
  // const { user, isLoaded, isSignedIn } = useUser();
  // if (!isSignedIn)
  //   return (
  //     <main className="flex h-screen flex-col">
  //       {" "}
  //       <UserButton afterSignOutUrl="/" />
  //     </main>
  //   );

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery();
  const [newTopic, setNewTopic] = useState("");

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });
  const handleAddTopic = () => {
    console.log("adding topic");
    createTopic.mutate({ title: newTopic });
  };

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
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-200 bg-slate-100 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                  placeholder="Add a topic"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
                <PrimaryOutlineButton
                  text="Add Topic"
                  onClick={() => createTopic.mutate({ title: newTopic })}
                />
              </div>
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
