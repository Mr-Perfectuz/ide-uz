import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <SignedOut />
      </SignedIn>
    </div>

  );
}
