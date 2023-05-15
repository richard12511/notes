import { useSession, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const Header = () => {
  const { isLoaded, session } = useSession();
  if (!isLoaded) return null;
  if (!session) return null;
  console.log(session?.user);

  return (
    <div className="text-primary-content> navbar bg-primary">
      <div className="flex px-3 text-3xl font-bold">{`${session?.user.firstName}'s Notes`}</div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {session.user ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button className="btn-ghost rounded-btn btn">Sign in</button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};
