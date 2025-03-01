import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, Flag, MoreHorizontal, Reply, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createReply } from "@/app/actions"
import RichTextEditor from "@/components/rich-text-editor"

// Mock data
const topic = {
  id: "1",
  title: "Next.js 15 da yangi Router tizimi qanday ishlaydi?",
  content: `
    Next.js 15 da yangi Router tizimi juda ko'p yaxshilanishlar olib keldi. 
    Asosiy o'zgarishlar:
    
    1. App Router
    2. Server Components
    3. Streaming
    4. Route Handlers
    
    Lekin men ba'zi muammolarga duch kelayapman...
  `,
  category: "Frontend dasturlash",
  author: {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 234,
    joinDate: "2023-01-15",
  },
  createdAt: "2025-02-28T10:00:00",
  views: 234,
  likes: 12,
}

const replies = [
  {
    id: "1",
    content: "Bu muammoni hal qilish uchun cache strategiyasini to'g'ri tanlash kerak...",
    author: {
      id: "2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      posts: 156,
      joinDate: "2023-03-20",
    },
    createdAt: "2025-02-28T10:30:00",
    likes: 5,
    isAnswer: true,
  },
  {
    id: "2",
    content: "Menga ham xuddi shunday muammo bo'lgan edi...",
    author: {
      id: "3",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      posts: 89,
      joinDate: "2023-06-10",
    },
    createdAt: "2025-02-28T11:15:00",
    likes: 2,
    isAnswer: false,
  },
]

function PostCard({ post, isMainPost = false }: { post: any; isMainPost?: boolean }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="flex flex-col items-center">
          <div className="relative w-10 h-10 mb-2">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <Link href={`/forum/user/${post.author.id}`} className="text-sm font-medium">
            {post.author.name}
          </Link>
          <div className="text-xs text-muted-foreground mt-1">{post.author.posts} post</div>
          <div className="text-xs text-muted-foreground">
            A'zo: {new Date(post.author.joinDate).toLocaleDateString()}
          </div>
        </div>
        <div className="flex-1">
          {isMainPost && <h1 className="text-2xl font-bold mb-4">{post.title}</h1>}
          <div className="prose prose-sm dark:prose-invert max-w-none">{post.content}</div>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between items-center border-t">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{new Date(post.createdAt).toLocaleString()}</span>
          {isMainPost && (
            <>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{replies.length}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.views}</span>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <Reply className="h-4 w-4 mr-1" />
            <span>Javob berish</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Flag className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function TopicPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Main post */}
      <div className="mb-8">
        <PostCard post={topic} isMainPost />
      </div>

      {/* Replies */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Javoblar</h2>
        {replies.map((reply) => (
          <PostCard key={reply.id} post={reply} />
        ))}
      </div>

      {/* Reply form */}
      <Card className="mt-8">
        <CardHeader>
          <h3 className="text-lg font-semibold">Javob yozish</h3>
        </CardHeader>
        <CardContent>
          <form action={createReply} className="space-y-4">
            <input type="hidden" name="topicId" value={params.id} />
            <RichTextEditor />
            <div className="flex justify-end">
              <Button type="submit">Javob yuborish</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

