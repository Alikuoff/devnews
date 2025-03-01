import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Eye, Clock, Search, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Category icons uchun placeholder tasvirlar
const categories = [
  {
    id: "1",
    name: "Frontend dasturlash",
    description: "Frontend texnologiyalari, freymvorklar va UI/UX haqida muhokamalar",
    topics: 234,
    posts: 1893,
    icon: "/placeholder.svg?height=40&width=40", // Placeholder icon
  },
  {
    id: "2",
    name: "Backend dasturlash",
    description: "Backend texnologiyalari, ma'lumotlar bazalari va API haqida muhokamalar",
    topics: 189,
    posts: 1432,
    icon: "/placeholder.svg?height=40&width=40", // Placeholder icon
  },
  {
    id: "3",
    name: "Mobile dasturlash",
    description: "iOS, Android va cross-platform dasturlash haqida muhokamalar",
    topics: 145,
    posts: 987,
    icon: "/placeholder.svg?height=40&width=40", // Placeholder icon
  },
  {
    id: "4",
    name: "DevOps va Cloud",
    description: "DevOps amaliyotlari, cloud texnologiyalari va infratuzilma haqida muhokamalar",
    topics: 98,
    posts: 567,
    icon: "/placeholder.svg?height=40&width=40", // Placeholder icon
  },
]

// Avatar placeholder tasvirlar
const latestTopics = [
  {
    id: "1",
    title: "Next.js 15 da yangi Router tizimi qanday ishlaydi?",
    category: "Frontend dasturlash",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32", // Placeholder avatar
    },
    replies: 23,
    views: 234,
    lastActivity: "10 daqiqa oldin",
    isSticky: true,
  },
  {
    id: "2",
    title: "PostgreSQL da query optimizatsiyasi: Amaliy maslahatlar",
    category: "Backend dasturlash",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&auto=format&fit=crop",
    },
    replies: 15,
    views: 156,
    lastActivity: "1 soat oldin",
    isSticky: false,
  },
  // More topics...
]

const popularTopics = [
  {
    id: "1",
    title: "React vs Vue: 2025-yilda qaysi birini tanlash kerak?",
    category: "Frontend dasturlash",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    replies: 156,
    views: 2345,
    lastActivity: "2 soat oldin",
  },
  // More topics...
]

const unansweredTopics = [
  {
    id: "1",
    title: "Docker container ichida Node.js ilovani debug qilish",
    category: "DevOps va Cloud",
    author: {
      name: "Mike Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    replies: 0,
    views: 45,
    lastActivity: "30 daqiqa oldin",
  },
  // More topics...
]

function CategoryCard({ category }: { category: any }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative w-10 h-10">
          <Image
            src={category.icon || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl">
            <Link href={`/forum/category/${category.id}`} className="hover:text-primary">
              {category.name}
            </Link>
          </CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{category.topics} mavzu</span>
          <span className="mx-2">•</span>
          <Users className="h-4 w-4 mr-1" />
          <span>{category.posts} post</span>
        </div>
      </CardContent>
    </Card>
  )
}

function TopicRow({ topic }: { topic: any }) {
  return (
    <div className={`p-4 ${topic.isSticky ? "bg-muted" : ""} border-b last:border-0`}>
      <div className="flex items-start gap-4">
        <div className="relative w-8 h-8">
          <Image
            src={topic.author.avatar || "/placeholder.svg"}
            alt={topic.author.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium leading-none mb-1">
            <Link href={`/forum/topic/${topic.id}`} className="hover:text-primary">
              {topic.title}
            </Link>
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="truncate">{topic.author.name}</span>
            <span className="mx-2">•</span>
            <span>{topic.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{topic.replies}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{topic.views}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{topic.lastActivity}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ForumPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Forum</h1>
            <p className="text-muted-foreground">
              Dasturchilar hamjamiyati bilan fikr almashing va savollarga javob oling
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Qidirish..." className="pl-8" />
            </div>
            <Button asChild>
              <Link href="/forum/new">
                <Plus className="h-4 w-4 mr-2" />
                Yangi mavzu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Kategoriyalar</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Topics */}
      <section>
        <Tabs defaultValue="latest" className="space-y-4">
          <TabsList>
            <TabsTrigger value="latest">So'nggi mavzular</TabsTrigger>
            <TabsTrigger value="popular">Ommabop mavzular</TabsTrigger>
            <TabsTrigger value="unanswered">Javobsiz mavzular</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="space-y-4">
            <Card>
              {latestTopics.map((topic) => (
                <TopicRow key={topic.id} topic={topic} />
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            <Card>
              {popularTopics.map((topic) => (
                <TopicRow key={topic.id} topic={topic} />
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="unanswered" className="space-y-4">
            <Card>
              {unansweredTopics.map((topic) => (
                <TopicRow key={topic.id} topic={topic} />
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}

