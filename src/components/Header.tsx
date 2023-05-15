import { useSession, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export const Header = () => {
  const { isLoaded, session } = useSession();
  if (!isLoaded) return null;
  if (!session) return null;
  console.log(session?.user);

  return (
    <div className="text-primary-content> navbar bg-primary">
      <div className="flex pl-5 text-3xl font-bold">{`${session?.user.firstName}'s Notes`}</div>
      <div className="">
        <div className="dropdown-end dropdown">
          {session.user ? (
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
              onClick={() => console.log("sign out")}
            >
              <div className="w-10 rounded-full">
                <Image
                  src={session.user.profileImageUrl ?? ""}
                  alt={session.user.fullName ?? ""}
                  height={14}
                  width={14}
                />
              </div>
            </label>
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
