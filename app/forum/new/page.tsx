import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createTopic } from "@/app/actions"
import RichTextEditor from "@/components/rich-text-editor"

const categories = [
  {
    id: "1",
    name: "Frontend dasturlash",
  },
  {
    id: "2",
    name: "Backend dasturlash",
  },
  {
    id: "3",
    name: "Mobile dasturlash",
  },
  {
    id: "4",
    name: "DevOps va Cloud",
  },
]

export default function NewTopicPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Yangi mavzu yaratish</CardTitle>
          <CardDescription>Forum qoidalariga rioya qilgan holda yangi mavzu yarating</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createTopic} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Mavzu sarlavhasi</Label>
              <Input id="title" name="title" placeholder="Mavzu sarlavhasini kiriting" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategoriya</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriyani tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Mavzu matni</Label>
              <RichTextEditor />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Bekor qilish
              </Button>
              <Button type="submit">Mavzu yaratish</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

