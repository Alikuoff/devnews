import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, MessageSquare } from "lucide-react"

interface FeaturedArticleProps {
  id: string
  title: string
  description: string
  image: string
  date: string
  commentCount: number
  category: string
  slug: string
}

const FeaturedArticle = ({
  id,
  title,
  description,
  image,
  date,
  commentCount,
  category,
  slug,
}: FeaturedArticleProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
        <div className="mb-4">
          <span className="bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-full font-medium">
            {category}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          <Link href={`/maqola/${slug}`} className="hover:text-primary-foreground/90 transition-colors">
            {title}
          </Link>
        </h2>
        <p className="text-white/90 text-lg mb-6 line-clamp-2 md:line-clamp-3 max-w-3xl">{description}</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center text-white/80 text-sm space-x-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={16} className="mr-1.5" />
              <span>{commentCount} izoh</span>
            </div>
          </div>
          <Button size="lg" className="md:w-auto w-full button-hover" asChild>
            <Link href={`/maqola/${slug}`}>Batafsil o'qish</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticle

