/* eslint-disable @next/next/no-img-element */
import { clerkClient } from '@clerk/nextjs/server'
import dayjs from 'dayjs'
import { findImageById } from '~/server/queries/find-images'

export async function FullImagePage({ photoId }: { photoId: number }) {
  const image = await findImageById(photoId)
  const uploaderInfo = await clerkClient.users.getUser(image.userId)

  return (
    <section className="lg:grid-cols-gallery h-full rounded-2xl bg-neutral-950/50 lg:grid">
      <div className="grid h-full w-full place-items-center overflow-hidden border-r border-dashed border-neutral-50/40">
        <img
          src={image.url}
          alt=""
          className="max-h-[calc(100%-24px)] min-h-0 w-full object-contain"
        />
      </div>

      <div className="h-full space-y-2 rounded-2xl bg-neutral-950 p-4 text-white shadow">
        <h2 className="text-center text-lg">{image.name}</h2>

        <p className="text-neutral-300">
          Uploaded by: <strong>{uploaderInfo.fullName}</strong>
        </p>

        <p className="text-neutral-300">
          Uploaded at:{' '}
          <strong>{dayjs(image.createdAt).format('DD/MM/YYYY')}</strong>
        </p>
      </div>
    </section>
  )
}
