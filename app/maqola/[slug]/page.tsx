import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageSquare, ThumbsUp, Share2, Bookmark } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Avatar va related article rasmlar uchun placeholder
const articles = {
  "typescript-xatolar": {
    id: "2",
    title: "TypeScript bilan ishlaganda eng ko'p uchraydigan xatolar",
    description:
      "TypeScript da dasturlash vaqtida uchraydigan eng ko'p xatolar va ularni qanday hal qilish mumkinligi haqida.",
    content: `
      <h2>TypeScript bilan ishlashda eng ko'p uchraydigan xatolar</h2>
      
      <p>TypeScript JavaScript ga statik tiplar qo'shish orqali dasturlash jarayonini yanada xavfsiz va samarali qiladi. Lekin, ayniqsa yangi boshlovchilar uchun, ba'zi xatolar tez-tez uchrab turadi. Keling, eng ko'p uchraydigan xatolarni va ularning yechimlarini ko'rib chiqamiz.</p>

      <h3>1. "any" tipidan noto'g'ri foydalanish</h3>
      <p>Ko'p dasturchilar tip xatolarini tez hal qilish uchun "any" tipidan foydalanadilar. Bu xavfli amaliyot hisoblanadi.</p>

      <pre><code class="language-typescript">
// Noto'g'ri
let value: any = someFunction();
value.nonExistentMethod(); // Runtime error

// To'g'ri
let value: unknown = someFunction();
if (typeof value === "string") {
    value.toUpperCase(); // Type safe
}
      </code></pre>

      <h3>2. Interface va Type alias larni noto'g'ri tanlash</h3>
      <p>Interface va Type alias larning farqlarini tushunmaslik ko'p uchraydi.</p>

      <pre><code class="language-typescript">
// Interface - kengaytirish mumkin
interface Animal {
    name: string;
}
interface Dog extends Animal {
    bark(): void;
}

// Type - birlashma va kesishma tiplar uchun qulay
type Status = "pending" | "fulfilled" | "rejected";
type NumberOrString = number | string;
      </code></pre>

      <h3>3. Optional Properties bilan ishlash</h3>
      <p>Optional properties (?) bilan ishlashda xavfsizlik tekshiruvlarini unutish.</p>

      <pre><code class="language-typescript">
interface User {
    name: string;
    age?: number;
}

// Noto'g'ri
function getAge(user: User): number {
    return user.age; // Error: age undefined bo'lishi mumkin

// To'g'ri
function getAge(user: User): number {
    return user.age ?? 0; // Default qiymat berish
}
      </code></pre>

      <h3>4. Generics dan noto'g'ri foydalanish</h3>
      <p>Generics TypeScript ning eng kuchli xususiyatlaridan biri, lekin to'g'ri ishlatish muhim.</p>

      <pre><code class="language-typescript">
// Noto'g'ri
function first(arr: any[]): any {
    return arr[0];
}

// To'g'ri
function first<T>(arr: T[]): T | undefined {
    return arr[0];
}
      </code></pre>

      <h3>5. Async/Await tiplarini noto'g'ri ishlatish</h3>
      <p>Promise lar bilan ishlashda tip xatolar ko'p uchraydi.</p>

      <pre><code class="language-typescript">
// Noto'g'ri
async function getData(): Promise<any> {
    const response = await fetch('/api/data');
    return response.json();
}

// To'g'ri
interface Data {
    id: number;
    name: string;
}

async function getData(): Promise<Data> {
    const response = await fetch('/api/data');
    return response.json() as Promise<Data>;
}
      </code></pre>

      <h3>6. Union Types bilan ishlash</h3>
      <p>Union types bilan ishlashda type narrowing ni unutish.</p>

      <pre><code class="language-typescript">
type Shape = Circle | Square;

// Noto'g'ri
function getArea(shape: Shape) {
    return shape.radius * shape.radius * Math.PI; // Error

// To'g'ri
function getArea(shape: Shape) {
    if ("radius" in shape) {
        return shape.radius * shape.radius * Math.PI;
    } else {
        return shape.side * shape.side;
    }
}
      </code></pre>

      <h3>7. Readonly Properties</h3>
      <p>O'zgarmas (immutable) ma'lumotlar bilan ishlashda readonly dan foydalanmaslik.</p>

      <pre><code class="language-typescript">
// Noto'g'ri
interface Config {
    apiUrl: string;
    timeout: number;
}

// To'g'ri
interface Config {
    readonly apiUrl: string;
    readonly timeout: number;
}
      </code></pre>

      <h2>Yaxshi amaliyotlar</h2>

      <h3>1. Strict Mode ishlatish</h3>
      <p>tsconfig.json da strict mode ni yoqish orqali ko'p xatolarni oldini olish mumkin:</p>

      <pre><code class="language-json">
{
    "compilerOptions": {
        "strict": true
    }
}
      </code></pre>

      <h3>2. Type Inference dan foydalanish</h3>
      <p>TypeScript ko'p hollarda tiplarni o'zi aniqlay oladi:</p>

      <pre><code class="language-typescript">
// Tipni aniq ko'rsatish shart emas
const numbers = [1, 2, 3]; // Type: number[]
const greeting = "Hello"; // Type: string
      </code></pre>

      <h3>3. Utility Types dan foydalanish</h3>
      <p>TypeScript o'rnatilgan utility type lari juda foydali:</p>

      <pre><code class="language-typescript">
interface User {
    id: number;
    name: string;
    email: string;
}

// Barcha maydonlarni optional qilish
type PartialUser = Partial<User>;

// Faqat o'qish uchun versiya
type ReadonlyUser = Readonly<User>;

// Faqat kerakli maydonlarni olish
type UserBasicInfo = Pick<User, "name" | "email">;
      </code></pre>

      <h2>Xulosa</h2>
      <p>TypeScript da xatolardan qochish uchun:</p>
      <ul>
        <li>Strict mode ishlatish</li>
        <li>"any" tipidan iloji boricha qochish</li>
        <li>Type checking va type narrowing dan to'g'ri foydalanish</li>
        <li>Interface va Type alias larni to'g'ri tanlash</li>
        <li>Utility Types dan foydalanish</li>
        <li>TypeScript compiler options ni to'g'ri sozlash</li>
      </ul>
    `,
    image: "/placeholder.svg?height=1200&width=800",
    date: "2025-02-25",
    author: {
      id: "2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=64&width=64", // Placeholder avatar
      bio: "Senior TypeScript Developer. Microsoft MVP. 8+ yillik tajriba.",
    },
    category: "Dasturlash tillari",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    readingTime: "12 daqiqa",
    views: 2156,
    likes: 89,
    comments: 32,
  },
  // Other articles...
}

const relatedArticles = [
  {
    id: "1",
    slug: "typescript-xatolar",
    title: "TypeScript bilan ishlaganda eng ko'p uchraydigan xatolar",
    description:
      "TypeScript da dasturlash vaqtida uchraydigan eng ko'p xatolar va ularni qanday hal qilish mumkinligi haqida.",
    image: "/placeholder.svg?height=800&width=400", // Placeholder
    date: "2025-02-25",
    category: "Dasturlash tillari",
  },
  {
    id: "2",
    slug: "typescript-xatolar",
    title: "TypeScript bilan ishlaganda eng ko'p uchraydigan xatolar",
    description:
      "TypeScript da dasturlash vaqtida uchraydigan eng ko'p xatolar va ularni qanday hal qilish mumkinligi haqida.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&auto=format&fit=crop",
    date: "2025-02-25",
    category: "Dasturlash tillari",
  },
  {
    id: "3",
    slug: "typescript-xatolar",
    title: "TypeScript bilan ishlaganda eng ko'p uchraydigan xatolar",
    description:
      "TypeScript da dasturlash vaqtida uchraydigan eng ko'p xatolar va ularni qanday hal qilish mumkinligi haqida.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=800&h=400&auto=format&fit=crop",
    date: "2025-02-25",
    category: "Dasturlash tillari",
  },
]

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]

  if (!article) {
    return <div className="max-w-4xl mx-auto px-4 py-8">Maqola topilmadi</div>
  }

  // Rest of the component remains the same...
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Article header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{formatDate(article.date)}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{article.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div>
                <div className="font-medium">{article.author.name}</div>
                <div className="text-sm text-muted-foreground">{article.readingTime}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Article image */}
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
          crossOrigin="anonymous"
        />
      </div>

      {/* Article content */}
      <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      {/* Article footer */}
      <div className="flex items-center justify-between py-6 border-t border-b mb-12">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{article.readingTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            <span>{article.comments} izoh</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5 text-muted-foreground" />
            <span>{article.likes} like</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Ulashish
          </Button>
          <Button>
            <ThumbsUp className="h-4 w-4 mr-2" />
            Like
          </Button>
        </div>
      </div>

      {/* Author bio */}
      <Card className="mb-12">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              fill
              className="object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{article.author.name}</h3>
            <p className="text-muted-foreground">{article.author.bio}</p>
          </div>
        </CardContent>
      </Card>

      {/* Related articles */}
      <section>
        <h2 className="text-2xl font-bold mb-6">O'xshash maqolalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <Card key={article.id} className="group">
              <div className="relative aspect-video">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {article.category}
                </Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/maqola/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
                <div className="text-sm text-muted-foreground mt-2">{formatDate(article.date)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

