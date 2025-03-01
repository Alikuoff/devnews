"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFile(file)
    setPreview(URL.createObjectURL(file))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
  })

  const removeFile = () => {
    setFile(null)
    setPreview(null)
  }

  return (
    <div>
      {!file ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/25"}`}
        >
          <input {...getInputProps()} />
          <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Rasmni bu yerga tashlang yoki tanlash uchun bosing</p>
        </div>
      ) : (
        <div className="relative">
          <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image src={preview! || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          </div>
          <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={removeFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

