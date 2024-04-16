/* eslint-disable @next/next/no-img-element */
import { findImageById } from '~/server/queries/find-images'

export async function FullImagePage({ photoId }: { photoId: number }) {
  const image = await findImageById(photoId)

  return (
    <section className="lg:grid-cols-gallery h-full rounded-2xl bg-neutral-950/50 lg:grid">
      <div className="grid h-full w-full place-items-center overflow-hidden border-r border-dashed border-neutral-50/40">
        <img
          src={image.url}
          alt=""
          className="max-h-[calc(100%-24px)] min-h-0 w-full object-contain"
        />
      </div>

      <div className="h-full rounded-2xl bg-neutral-950 p-4 text-white shadow">
        <h2>{image.name}</h2>
      </div>
    </section>
  )
}
