import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { SimpleUploadButton } from '../simple-upload-button'

export function TopNav() {
  return (
    <nav className="flex items-center  justify-between border-b border-neutral-800 p-4">
      <Link href="/">
        <h1 className="text-xl font-semibold">Gallery</h1>
      </Link>

      <div className="flex">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="transition-colors duration-200 ease-linear hover:text-emerald-600">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
