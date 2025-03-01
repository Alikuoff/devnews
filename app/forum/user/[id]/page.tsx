import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Calendar, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data
const user = {
  id: "1",
  name: "John Doe",
  avatar: "/placeholder.svg?height=128&width=128",
  joinDate: "2023-01-15",
  posts: 234,
  reputation: 567,
  badges: [
    { name: "Top Contributor", icon: "🏆" },
    { name: "Problem Solver", icon: "💡" },
    { name: "Helpful Member", icon: "🤝" },
  ],
}

const userTopics = [
  {
    id: "1",
    title: "Next.js 15 da yangi Router tizimi qanday ishlaydi?",
    category: "Frontend dasturlash",
    replies: 23,
    createdAt: "2025-02-28",
  },
  // More topics...
]

const userReplies = [
  {
    id: "1",
    topicTitle: "PostgreSQL da query optimizatsiyasi",
    content: "Bu muammoni hal qilish uchun indekslardan foydalanish kerak...",
    createdAt: "2025-02-27",
  },
  // More replies...
]

export default function UserProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <CardTitle className="text-2xl mb-2">{user.name}</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>A'zo bo'lgan: {new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{user.posts} post</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{user.reputation} reputation</span>
                  </div>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge, index) => (
              <div key={index} className="flex items-center px-2 py-1 bg-muted rounded-full text-sm">
                <span className="mr-1">{badge.icon}</span>
                {badge.name}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User activity */}
      <Tabs defaultValue="topics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="topics">Mavzular</TabsTrigger>
          <TabsTrigger value="replies">Javoblar</TabsTrigger>
        </TabsList>

        <TabsContent value="topics">
          <Card>
            <CardContent className="p-0">
              {userTopics.map((topic) => (
                <div key={topic.id} className="flex items-center justify-between p-4 border-b last:border-0">
                  <div className="flex-1 min-w-0">
                    <Link href={`/forum/topic/${topic.id}`} className="text-base font-medium hover:text-primary">
                      {topic.title}
                    </Link>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>{topic.category}</span>
                      <span className="mx-2">•</span>
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{topic.replies}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{new Date(topic.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="replies">
          <Card>
            <CardContent className="p-0">
              {userReplies.map((reply) => (
                <div key={reply.id} className="p-4 border-b last:border-0">
                  <Link href={`/forum/topic/${reply.id}`} className="text-base font-medium hover:text-primary">
                    {reply.topicTitle}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{reply.content}</p>
                  <div className="text-sm text-muted-foreground mt-2">
                    {new Date(reply.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

