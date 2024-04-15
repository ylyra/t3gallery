import Image from 'next/image'
import { findImageById } from '~/server/queries/find-images'

export async function FullImagePage({ photoId }: { photoId: number }) {
  const image = await findImageById(photoId)
  return <Image src={image.url} alt="" width={384} height={384} />
}
