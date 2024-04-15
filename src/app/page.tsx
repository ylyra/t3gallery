import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { findImagesFromUser } from '~/server/queries/find-images'

async function Images() {
  const images = await findImagesFromUser()

  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <Link
          href={`/p/${image.id}`}
          key={String(image.id).concat('-', String(idx))}
          className="relative flex w-48 shrink-0 flex-col gap-1"
        >
          <Image
            src={image.url}
            alt=""
            width={192}
            height={192}
            className="h-48 w-48 rounded object-cover"
          />

          <small>{image.name}</small>
        </Link>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  )
}
