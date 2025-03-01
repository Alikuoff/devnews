import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { deleteContent } from "@/app/actions"

// Mock data - real data will come from database
const articles = [
  {
    id: "1",
    title: "Next.js 15 yangiliklari va yangi imkoniyatlar",
    status: "published",
    date: "2025-02-28",
    image: "/placeholder.svg?height=400&width=600",
  },
  // More articles...
]

const vlogs = [
  {
    id: "1",
    title: "React Server Components: Amaliy qo'llanma",
    status: "published",
    date: "2025-02-27",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  // More vlogs...
]

export default function AdminBlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Vlog va maqolalar boshqaruvi</h1>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/admin/vlog-maqolalar/yangi-maqola">
              <Plus className="h-4 w-4 mr-2" />
              Yangi maqola
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/vlog-maqolalar/yangi-vlog">
              <Plus className="h-4 w-4 mr-2" />
              Yangi vlog
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="articles" className="space-y-8">
        <TabsList>
          <TabsTrigger value="articles">Maqolalar</TabsTrigger>
          <TabsTrigger value="vlogs">Vloglar</TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id}>
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription>
                    Status: {article.status} • {article.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/vlog-maqolalar/tahrirlash/${article.id}`}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Tahrirlash
                    </Link>
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => deleteContent("article", article.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    O'chirish
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vlogs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vlogs.map((vlog) => (
              <Card key={vlog.id}>
                <div className="relative h-48 w-full">
                  <Image
                    src={vlog.thumbnail || "/placeholder.svg"}
                    alt={vlog.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{vlog.title}</CardTitle>
                  <CardDescription>
                    Status: {vlog.status} • {vlog.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/vlog-maqolalar/tahrirlash/${vlog.id}`}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Tahrirlash
                    </Link>
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => deleteContent("vlog", vlog.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    O'chirish
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

