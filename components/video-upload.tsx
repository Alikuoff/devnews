"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".webm", ".ogg"],
    },
    maxFiles: 1,
  })

  const removeFile = () => {
    setFile(null)
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
          <p className="text-sm text-muted-foreground">Video faylni bu yerga tashlang yoki tanlash uchun bosing</p>
        </div>
      ) : (
        <div className="relative border rounded-lg p-4">
          <div className="flex items-center">
            <Video className="h-8 w-8 mr-3 text-muted-foreground" />
            <div className="flex-1">
              <p className="font-medium truncate">{file.name}</p>
              <p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
            <Button variant="destructive" size="icon" onClick={removeFile}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

