import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface SectionHeaderProps {
  title: string
  description?: string
  viewAllLink?: string
  viewAllText?: string
}

const SectionHeader = ({ title, description, viewAllLink, viewAllText = "Barchasini ko'rish" }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {description && <p className="text-muted-foreground text-lg">{description}</p>}
      </div>
      {viewAllLink && (
        <Button variant="ghost" size="lg" asChild className="group">
          <Link href={viewAllLink} className="flex items-center">
            {viewAllText}
            <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      )}
    </div>
  )
}

export default SectionHeader

