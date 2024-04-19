'use client'

import { Loader, Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { cn } from '~/lib/utils'
import { useUploadThing } from '~/utils/uploadthing'

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>

export const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args)

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const selectedFiles = Array.from(e.target.files)
    const result = await $ut.startUpload(selectedFiles)

    console.log('uploaded files', result)
    // TODO: persist result in state maybe?
  }

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: 'image/*',
    },
    isUploading: $ut.isUploading,
  }
}

export function SimpleUploadButton() {
  const router = useRouter()

  const { inputProps, isUploading } = useUploadThingInputProps(
    'imageUploader',
    {
      onUploadBegin(fileName) {
        toast.loading(`Uploading ${fileName}...`, {
          id: 'uploading-begin',
        })
      },
      onClientUploadComplete() {
        toast.dismiss('uploading-begin')
        toast.success('Upload complete')
        router.refresh()
      },
    },
  )

  return (
    <label
      className={cn(
        'flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg hover:bg-white/10',
        isUploading && 'cursor-not-allowed bg-white/10',
      )}
    >
      <input type="file" className="sr-only" {...inputProps} />
      {isUploading ? (
        <Loader className="size-4 animate-spin" />
      ) : (
        <Upload className="size-4" />
      )}
    </label>
  )
}
