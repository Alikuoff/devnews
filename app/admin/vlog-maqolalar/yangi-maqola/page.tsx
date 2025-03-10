import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createArticle } from "@/app/actions"
import RichTextEditor from "@/components/rich-text-editor"
import ImageUpload from "@/components/image-upload"

const categories = ["Framework", "Dasturlash tillari", "DevOps", "Tutorial", "UI/UX", "Mobile", "Web"]

export default function NewArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Yangi maqola</CardTitle>
          <CardDescription>Yangi maqola yaratish uchun quyidagi formani to'ldiring</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createArticle} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Sarlavha</Label>
              <Input id="title" name="title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Qisqa tavsif</Label>
              <Textarea id="description" name="description" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategoriya</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriyani tanlang" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Asosiy rasm</Label>
              <ImageUpload />
            </div>

            <div className="space-y-2">
              <Label>Maqola matni</Label>
              <RichTextEditor />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">
                Bekor qilish
              </Button>
              <Button type="submit">Saqlash</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

