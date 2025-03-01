import { AlertTriangle } from "lucide-react"
import { Button } from "./ui/button"

interface ErrorMessageProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export function ErrorMessage({
  title = "Xatolik yuz berdi",
  message = "Ma'lumotlarni yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Qayta urinish
        </Button>
      )}
    </div>
  )
}

