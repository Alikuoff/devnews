import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeader from "@/components/section-header"
import { Code2, GitBranch, Terminal, Boxes, Rocket, Palette, Zap, Star, Globe, DollarSign, Check } from "lucide-react"

// Tool categories and their data
const toolCategories = [
  {
    id: "editors",
    title: "Kod muharrirlari va IDE lar",
    icon: <Code2 className="h-6 w-6" />,
    tools: [
      {
        name: "Visual Studio Code",
        description: "Microsoft tomonidan yaratilgan bepul va kuchli kod muharriri",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&auto=format&fit=crop",
        features: ["Ko'p platformali", "Kengaytmalar", "Git integratsiyasi", "Debugging"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Bepul",
        url: "https://code.visualstudio.com",
        rating: 4.9,
      },
      {
        name: "WebStorm",
        description: "JetBrains tomonidan yaratilgan professional JavaScript IDE",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&auto=format&fit=crop",
        features: ["Smart kod yozish", "Debugging", "Testing", "Git integratsiyasi"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Pullik / 30 kun bepul",
        url: "https://www.jetbrains.com/webstorm",
        rating: 4.8,
      },
      {
        name: "Sublime Text",
        description: "Tez va yengil kod muharriri",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&auto=format&fit=crop",
        features: ["Tezkor", "Kengaytmalar", "Ko'p kursorlar", "Syntax highlighting"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Pullik / Cheksiz bepul sinov",
        url: "https://www.sublimetext.com",
        rating: 4.7,
      },
    ],
  },
  {
    id: "version-control",
    title: "Versiyalarni boshqarish",
    icon: <GitBranch className="h-6 w-6" />,
    tools: [
      {
        name: "GitHub Desktop",
        description: "Git uchun foydalanuvchi interfeysi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Vizual interfeys", "Git integratsiyasi", "Pull request", "Merge tools"],
        platforms: ["Windows", "macOS"],
        price: "Bepul",
        url: "https://desktop.github.com",
        rating: 4.6,
      },
      {
        name: "GitKraken",
        description: "Git uchun vizual klient",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Git graph", "Merge conflict resolution", "Git flow", "Integrations"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Pullik / Bepul versiyasi mavjud",
        url: "https://www.gitkraken.com",
        rating: 4.7,
      },
      {
        name: "Sourcetree",
        description: "Atlassian tomonidan yaratilgan Git klienti",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Git operations", "Visual interface", "Bookmarks", "Git-flow"],
        platforms: ["Windows", "macOS"],
        price: "Bepul",
        url: "https://www.sourcetreeapp.com",
        rating: 4.5,
      },
    ],
  },
  {
    id: "terminal",
    title: "Terminal va CLI vositalari",
    icon: <Terminal className="h-6 w-6" />,
    tools: [
      {
        name: "Windows Terminal",
        description: "Microsoft tomonidan yaratilgan zamonaviy terminal",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Tab support", "Themes", "Split panes", "GPU acceleration"],
        platforms: ["Windows"],
        price: "Bepul",
        url: "https://github.com/microsoft/terminal",
        rating: 4.8,
      },
      {
        name: "iTerm2",
        description: "macOS uchun terminal dasturi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Split panes", "Search", "Autocomplete", "Themes"],
        platforms: ["macOS"],
        price: "Bepul",
        url: "https://iterm2.com",
        rating: 4.9,
      },
      {
        name: "Hyper",
        description: "Electron asosidagi terminal",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Extensions", "Themes", "Split panes", "Cross-platform"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Bepul",
        url: "https://hyper.is",
        rating: 4.6,
      },
    ],
  },
  {
    id: "containers",
    title: "Konteyner va virtualizatsiya",
    icon: <Boxes className="h-6 w-6" />,
    tools: [
      {
        name: "Docker Desktop",
        description: "Konteynerlar bilan ishlash uchun GUI dasturi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Container management", "Kubernetes", "Extensions", "Volumes"],
        platforms: ["Windows", "macOS"],
        price: "Bepul (shaxsiy)",
        url: "https://www.docker.com/products/docker-desktop",
        rating: 4.7,
      },
      {
        name: "Rancher Desktop",
        description: "Kubernetes va konteyner menejment dasturi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Kubernetes", "Container management", "CLI tools", "Cross-platform"],
        platforms: ["Windows", "macOS", "Linux"],
        price: "Bepul",
        url: "https://rancherdesktop.io",
        rating: 4.5,
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment platformalari",
    icon: <Rocket className="h-6 w-6" />,
    tools: [
      {
        name: "Vercel",
        description: "Frontend loyihalar uchun deployment platformasi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Auto deployment", "Preview deployments", "Analytics", "Edge functions"],
        platforms: ["Web"],
        price: "Bepul / Premium",
        url: "https://vercel.com",
        rating: 4.9,
      },
      {
        name: "Netlify",
        description: "Statik saytlar va JAMstack loyihalar uchun platforma",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Auto deployment", "Forms", "Functions", "Analytics"],
        platforms: ["Web"],
        price: "Bepul / Premium",
        url: "https://www.netlify.com",
        rating: 4.8,
      },
      {
        name: "Heroku",
        description: "Cloud application platform",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Auto deployment", "Add-ons", "CLI", "Monitoring"],
        platforms: ["Web"],
        price: "Bepul / Premium",
        url: "https://www.heroku.com",
        rating: 4.7,
      },
    ],
  },
  {
    id: "design",
    title: "Dizayn vositalari",
    icon: <Palette className="h-6 w-6" />,
    tools: [
      {
        name: "Figma",
        description: "Interfeys dizayni uchun veb-asosli dastur",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Real-time collaboration", "Plugins", "Prototyping", "Components"],
        platforms: ["Web", "Windows", "macOS"],
        price: "Bepul / Premium",
        url: "https://www.figma.com",
        rating: 4.9,
      },
      {
        name: "Adobe XD",
        description: "UI/UX dizayn dasturi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Prototyping", "Components", "Plugins", "Cloud documents"],
        platforms: ["Windows", "macOS"],
        price: "Pullik",
        url: "https://www.adobe.com/products/xd.html",
        rating: 4.7,
      },
    ],
  },
  {
    id: "productivity",
    title: "Produktivlik vositalari",
    icon: <Zap className="h-6 w-6" />,
    tools: [
      {
        name: "Notion",
        description: "Hujjatlar va loyihalarni boshqarish tizimi",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Notes", "Databases", "Collaboration", "Templates"],
        platforms: ["Web", "Windows", "macOS", "Mobile"],
        price: "Bepul / Premium",
        url: "https://www.notion.so",
        rating: 4.8,
      },
      {
        name: "Trello",
        description: "Loyihalarni boshqarish uchun Kanban board",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Boards", "Lists", "Cards", "Power-ups"],
        platforms: ["Web", "Mobile"],
        price: "Bepul / Premium",
        url: "https://trello.com",
        rating: 4.7,
      },
      {
        name: "Slack",
        description: "Jamoa muloqoti uchun platforma",
        image: "/placeholder.svg?height=200&width=300",
        features: ["Channels", "Direct messages", "Integrations", "File sharing"],
        platforms: ["Web", "Windows", "macOS", "Mobile"],
        price: "Bepul / Premium",
        url: "https://slack.com",
        rating: 4.8,
      },
    ],
  },
]

// Popular tool combinations
const toolCombinations = [
  {
    id: "web-dev",
    title: "Web dasturlash uchun",
    tools: ["Visual Studio Code", "GitHub Desktop", "Chrome DevTools", "Figma"],
    description: "Web dasturlash uchun eng yaxshi vositalar to'plami",
  },
  {
    id: "mobile-dev",
    title: "Mobil dasturlash uchun",
    tools: ["Android Studio", "Xcode", "Postman", "Firebase"],
    description: "Mobil ilovalar yaratish uchun zarur vositalar",
  },
  {
    id: "backend-dev",
    title: "Backend dasturlash uchun",
    tools: ["WebStorm", "Docker Desktop", "Postman", "MongoDB Compass"],
    description: "Backend dasturlash uchun kerak bo'ladigan vositalar",
  },
]

// Tool comparison data
const toolComparisons = [
  {
    category: "Kod muharrirlari",
    tools: [
      {
        name: "VS Code",
        features: {
          Tezlik: "⭐⭐⭐⭐",
          Kengaytmalar: "⭐⭐⭐⭐⭐",
          "Git integratsiya": "⭐⭐⭐⭐",
          Debugging: "⭐⭐⭐⭐",
          Narx: "Bepul",
        },
      },
      {
        name: "WebStorm",
        features: {
          Tezlik: "⭐⭐⭐",
          Kengaytmalar: "⭐⭐⭐⭐",
          "Git integratsiya": "⭐⭐⭐⭐⭐",
          Debugging: "⭐⭐⭐⭐⭐",
          Narx: "Pullik",
        },
      },
      {
        name: "Sublime Text",
        features: {
          Tezlik: "⭐⭐⭐⭐⭐",
          Kengaytmalar: "⭐⭐⭐",
          "Git integratsiya": "⭐⭐⭐",
          Debugging: "⭐⭐",
          Narx: "Pullik",
        },
      },
    ],
  },
]

function ToolCard({ tool }: { tool: any }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
          <Image src={tool.image || "/placeholder.svg"} alt={tool.name} fill className="object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{tool.name}</CardTitle>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{tool.rating}</span>
          </div>
        </div>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Asosiy xususiyatlar:</h4>
            <div className="flex flex-wrap gap-2">
              {tool.features.map((feature: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Platformalar:</h4>
            <div className="flex flex-wrap gap-2">
              {tool.platforms.map((platform: string, index: number) => (
                <Badge key={index} variant="outline">
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>{tool.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={tool.url} target="_blank" rel="noopener noreferrer">
            <Globe className="h-4 w-4 mr-2" />
            Saytga o'tish
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1537884944318-390069bb8665?w=1200&h=800&auto=format&fit=crop"
              alt="Foydali vositalar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-6 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Foydali vositalar</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Dasturlash jarayonini osonlashtiruvchi eng yaxshi vositalar to'plami. IDE lar, versiya boshqaruv
              tizimlari, terminallar va boshqa foydali dasturlar.
            </p>
          </div>
        </div>
      </section>

      {/* Tools categories */}
      <section className="mb-12">
        <Tabs defaultValue={toolCategories[0].id} className="w-full">
          <TabsList className="flex flex-wrap justify-start mb-6 h-auto">
            {toolCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.icon}
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {toolCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Popular combinations */}
      <section className="mb-12">
        <SectionHeader
          title="Mashhur kombinatsiyalar"
          description="Turli yo'nalishlar uchun tavsiya etiladigan vositalar to'plami"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCombinations.map((combo) => (
            <Card key={combo.id} className="h-full">
              <CardHeader>
                <CardTitle>{combo.title}</CardTitle>
                <CardDescription>{combo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {combo.tools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tool comparisons */}
      <section className="mb-12">
        <SectionHeader title="Vositalar taqqoslashi" description="Mashhur vositalarning taqqoslama tahlili" />

        {toolComparisons.map((comparison, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold mb-4">{comparison.category}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-muted">Xususiyat</th>
                    {comparison.tools.map((tool, i) => (
                      <th key={i} className="text-left p-4 bg-muted">
                        {tool.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(comparison.tools[0].features).map((feature, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium">{feature}</td>
                      {comparison.tools.map((tool, j) => (
                        <td key={j} className="p-4">
                          {tool.features[feature]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* Tips section */}
      <section className="mb-12">
        <SectionHeader
          title="Foydali maslahatlar"
          description="Vositalardan samarali foydalanish bo'yicha maslahatlar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vositalarni tanlash</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>O'z ehtiyojlaringizga mos vositalarni tanlang</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Bepul alternativalarni ko'rib chiqing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Jamoa bilan ishlayotgan bo'lsangiz, jamoangiz foydalanadigan vositalarni tanlang</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Samaradorlikni oshirish</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Klaviatura yorliqlarini o'rganing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Avtomatlashtirish imkoniyatlaridan foydalaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>Kengaytmalar va plaginlarni o'rnating</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA section */}
      <section>
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vositalar haqida ko'proq ma'lumot olishni xohlaysizmi?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Bizning forumga qo'shiling va tajribali dasturchilar bilan fikr almashing!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/forum">Forumga qo'shilish</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/boshlangich-dasturlash">Dasturlashni o'rganish</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

