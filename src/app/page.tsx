import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignedOut >
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Sign In
          </button>
        </SignedOut>
      </SignedIn>
    </div>

  );
}
