'use client'
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function UploadImage() {
  const router = useRouter();

  return (
    <UploadButton 
      endpoint="imageUploader" 
      onClientUploadComplete={(result) => router.refresh()} 
    />
  )
}