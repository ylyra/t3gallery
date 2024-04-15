import { SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import { findImagesFromUser } from '~/server/queries/find-images'

async function Images() {
  const images = await findImagesFromUser()

  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <div
          key={String(image.id).concat('-', String(idx))}
          className="flex w-48 shrink-0 flex-col gap-1"
        >
          <Image src={image.url} alt="" width={200} height={200} />

          <small>{image.name}</small>
        </div>
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
