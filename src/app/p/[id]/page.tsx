import { FullImagePage } from '~/components/full-image-page'

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const id = Number(photoId)

  return <FullImagePage photoId={id} />
}
