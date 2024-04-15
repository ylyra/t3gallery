import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadImage } from "./upload";

export function TopNav() {
  return (
    <nav className="flex items-center  justify-between border-b border-neutral-800 p-4">
      <h1 className="text-xl font-semibold">
        Gallery
      </h1>

      <div className="flex">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="hover:text-emerald-600 transition-colors duration-200 ease-linear">Sign in</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadImage />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}