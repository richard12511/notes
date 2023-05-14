import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useEffect } from "react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const { isSignedIn, user, isLoaded } = useUser()
  // if (!isLoaded) return <div>Loading...</div>;
  // if (!user) return <div>User not found</div>;

  // const { data } = api.topic.getAll.useQuery({ userId: user.id });
  const { data } = api.topic.getAll.useQuery();
  console.log(data);

  return (
    <>
      <main className="flex h-screen w-full">
        <h1 className="text-4xl font-bold">Oh hai!</h1>
      </main>
    </>
  );
};

export default Home;
