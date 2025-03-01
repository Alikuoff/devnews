import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageSquare } from "lucide-react"

interface ArticleCardProps {
  id: string
  title: string
  description: string
  image: string
  date: string
  commentCount: number
  category: string
  slug: string
}

const ArticleCard = ({ id, title, description, image, date, commentCount, category, slug }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover">
      <div className="relative h-48 w-full overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2">
          <Link href={`/maqola/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 text-sm text-muted-foreground border-t">
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <MessageSquare size={14} className="mr-1" />
          <span>{commentCount}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ArticleCard

