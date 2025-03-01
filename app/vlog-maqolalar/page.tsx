import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MessageSquare, User } from "lucide-react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/utils/seo"
import { ArticleSkeleton, VlogSkeleton } from "@/components/loading-skeleton"

// Mock data - real data will come from database
const articles = [
  {
    id: "2",
    title: "TypeScript 5.4: Yangi xususiyatlar va yaxshilanishlar",
    description:
      "TypeScript 5.4 versiyasi e'lon qilindi. Ushbu yangilanishda yangi xususiyatlar va yaxshilanishlar mavjud. Batafsil ma'lumot uchun maqolani o'qing.",
    image: "/placeholder.svg?height=600&width=400", // Using placeholder instead of Unsplash
    date: "2025-02-25",
    commentCount: 12,
    category: "Dasturlash tillari",
    slug: "typescript-5-4-yangi-xususiyatlar",
  },
]

const vlogs = [
  {
    id: "1",
    title: "React Server Components: Amaliy qo'llanma",
    description: "React Server Components bilan ishlashni amaliy misollar orqali o'rganamiz.",
    thumbnail: "/placeholder.svg?height=600&width=400", // Placeholder bilan almashtirish
    duration: "15:30",
    views: 1200,
    category: "Tutorial",
    author: "Alex Johnson",
    date: "2025-02-27",
    commentCount: 15,
    slug: "react-server-components",
  },
  {
    id: "2",
    title: "Docker konteynerlar bilan ishlash",
    description: "Docker konteynerlarini yaratish va ular bilan ishlashni o'rganamiz.",
    thumbnail: "/placeholder.svg?height=600&width=400", // Placeholder bilan almashtirish
    duration: "20:45",
    views: 850,
    category: "DevOps",
    author: "Sarah Wilson",
    date: "2025-02-24",
    commentCount: 10,
    slug: "docker-containers",
  },
]

const categories = ["Barchasi", "Framework", "Dasturlash tillari", "DevOps", "Tutorial", "UI/UX", "Mobile", "Web"]

function ArticleCard({ article }: { article: any }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={article.image || "/placeholder.svg?height=400&width=600"}
          alt={article.title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">{article.category}</span>
        </div>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-2">
          <Link href={`/maqola/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{article.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="h-4 w-4 mr-1" />
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{article.readTime}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-sm text-muted-foreground">{article.date}</span>
        <div className="flex items-center text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{article.commentCount}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

function VlogCard({ vlog }: { vlog: any }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full group">
        <Image src={vlog.thumbnail || "/placeholder.svg"} alt={vlog.title} fill className="object-cover rounded-t-lg" />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="text-white text-lg">▶️ {vlog.duration}</div>
        </div>
        <div className="absolute top-2 left-2">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">{vlog.category}</span>
        </div>
      </div>
      <CardHeader className="flex-grow">
        <CardTitle className="line-clamp-2">
          <Link href={`/vlog/${vlog.slug}`} className="hover:text-primary">
            {vlog.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{vlog.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="h-4 w-4 mr-1" />
          <span>{vlog.author}</span>
          <span className="mx-2">•</span>
          <span>{vlog.views} ko'rilgan</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-sm text-muted-foreground">{vlog.date}</span>
        <div className="flex items-center text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{vlog.commentCount}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export const metadata: Metadata = generateMetadata({
  title: "Vlog va maqolalar",
  description: "Dasturlash, texnologiyalar va IT sohasidagi qiziqarli maqolalar va video kontentlar.",
  keywords: ["vlog", "maqola", "dasturlash", "tutorial", "o'quv materiallari"],
})

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/blog-hero.jpg" // O'zgartirilgan: local image
              alt="Vlog va maqolalar"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-6 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">Vlog va maqolalar</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6 animate-fade-in animation-delay-200">
              Dasturlash, texnologiyalar va IT sohasidagi qiziqarli maqolalar va video kontentlar.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8 animate-fade-in animation-delay-300">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={category === "Barchasi" ? "default" : "outline"}
              size="sm"
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Content tabs */}
      <Tabs defaultValue="articles" className="space-y-8">
        <TabsList className="animate-fade-in animation-delay-500">
          <TabsTrigger value="articles">Maqolalar</TabsTrigger>
          <TabsTrigger value="vlogs">Vloglar</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={[...Array(6)].map((_, i) => <ArticleSkeleton key={i} />)}>
              {articles.map((article, index) => (
                <div key={article.id} className="animate-fade-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </Suspense>
          </div>
        </TabsContent>

        <TabsContent value="vlogs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={[...Array(6)].map((_, i) => <VlogSkeleton key={i} />)}>
              {vlogs.map((vlog, index) => (
                <div key={vlog.id} className="animate-fade-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                  <VlogCard vlog={vlog} />
                </div>
              ))}
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

