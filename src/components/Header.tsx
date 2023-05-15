import { useSession } from "@clerk/nextjs";

export const Header = () => {
  const { isLoaded, session } = useSession();
  if (!isLoaded) return null;
  console.log(session?.user);

  return (
    <div className="text-primary-content> navbar bg-primary">
      <div className="flex pl-5 text-3xl font-bold">{`${session?.user.firstName}'s Notes`}</div>
    </div>
  );
};
