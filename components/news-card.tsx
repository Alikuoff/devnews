import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface NewsCardProps {
  id: string
  title: string
  description: string
  image: string
  date: string
  category: string
  slug: string
}

const NewsCard = ({ id, title, description, image, date, category, slug }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover-minimal">
      <div className="relative h-40 w-full overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 left-2">
          <span className="bg-primary/90 text-primary-foreground text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base line-clamp-2">
          <Link href={`/yangilik/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <CardDescription className="line-clamp-2 text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground border-t">
        <div className="flex items-center">
          <Clock size={12} className="mr-1.5" />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default NewsCard

