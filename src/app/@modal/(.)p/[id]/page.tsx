import { FullImagePage } from '~/components/full-image-page'
import { Modal } from './modal'

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  const id = Number(photoId)

  return (
    <Modal>
      <FullImagePage photoId={id} />
    </Modal>
  )
}
