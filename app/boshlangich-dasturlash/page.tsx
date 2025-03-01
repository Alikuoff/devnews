import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, FileCode, Lightbulb, Monitor, PenTool } from "lucide-react"

// Mock data
const beginnerTopics = [
  {
    id: "1",
    title: "Dasturlash asoslari",
    description: "Dasturlash nima va qanday ishlaydi? Dasturlashning asosiy tushunchalari bilan tanishing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&auto=format&fit=crop",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    slug: "dasturlash-asoslari",
  },
  {
    id: "2",
    title: "Algoritmlar va ma'lumotlar tuzilmalari",
    description: "Algoritmlar va ma'lumotlar tuzilmalari haqida boshlang'ich tushunchalar.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&auto=format&fit=crop",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    slug: "algoritmlar-malumotlar-tuzilmalari",
  },
  {
    id: "3",
    title: "Dasturlash tillari",
    description:
      "Boshlang'ich dasturchilar uchun eng yaxshi dasturlash tillari va ularni tanlash bo'yicha maslahatlar.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&auto=format&fit=crop",
    icon: <Code className="h-8 w-8 text-primary" />,
    slug: "dasturlash-tillari-boshlangich",
  },
  {
    id: "4",
    title: "IDE va muharrirlar",
    description: "Dasturlash uchun eng yaxshi IDE va matn muharrirlari haqida ma'lumot.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&auto=format&fit=crop",
    icon: <Monitor className="h-8 w-8 text-primary" />,
    slug: "ide-muharrirlar",
  },
  {
    id: "5",
    title: "Amaliy loyihalar",
    description: "Boshlang'ich dasturchilar uchun amaliy loyihalar va mashqlar.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=500&h=300&auto=format&fit=crop",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    slug: "amaliy-loyihalar",
  },
  {
    id: "6",
    title: "Dasturlash mashqlari",
    description: "Dasturlash ko'nikmalarini rivojlantirish uchun mashqlar va misollar.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&auto=format&fit=crop",
    icon: <FileCode className="h-8 w-8 text-primary" />,
    slug: "dasturlash-mashqlari",
  },
]

const learningPaths = [
  {
    id: "1",
    title: "Web dasturlash",
    description: "HTML, CSS va JavaScript orqali web dasturlashni o'rganing.",
    steps: [
      { title: "HTML asoslari", description: "Web sahifalar tuzilishi va HTML teglari" },
      { title: "CSS asoslari", description: "Stillar va dizayn" },
      { title: "JavaScript asoslari", description: "Interaktiv web sahifalar yaratish" },
      { title: "Responsive dizayn", description: "Turli qurilmalar uchun moslashuvchan dizayn" },
      { title: "Frontend freymvorklari", description: "React, Vue yoki Angular bilan tanishish" },
    ],
  },
  {
    id: "2",
    title: "Mobil dasturlash",
    description: "Android va iOS uchun mobil ilovalar yaratishni o'rganing.",
    steps: [
      { title: "Dasturlash asoslari", description: "Dasturlash tillari va asosiy tushunchalar" },
      { title: "Java/Kotlin (Android)", description: "Android uchun dasturlash tillari" },
      { title: "Swift (iOS)", description: "iOS uchun dasturlash tili" },
      { title: "Flutter", description: "Cross-platform mobil dasturlash" },
      { title: "Mobil UI/UX", description: "Mobil ilovalar uchun foydalanuvchi interfeysi" },
    ],
  },
  {
    id: "3",
    title: "Backend dasturlash",
    description: "Server tomonida ishlaydigan dasturlar yaratishni o'rganing.",
    steps: [
      { title: "Dasturlash asoslari", description: "Dasturlash tillari va asosiy tushunchalar" },
      { title: "Ma'lumotlar bazalari", description: "SQL va NoSQL ma'lumotlar bazalari" },
      { title: "API yaratish", description: "RESTful API va GraphQL" },
      { title: "Server freymvorklari", description: "Node.js, Django, Laravel va boshqalar" },
      { title: "Xavfsizlik", description: "Backend xavfsizligi asoslari" },
    ],
  },
]

const codeExamples = [
  {
    id: "1",
    language: "JavaScript",
    title: "JavaScript da 'Salom, dunyo!'",
    code: `// JavaScript da 'Salom, dunyo!' dasturi
console.log("Salom, dunyo!");

// O'zgaruvchilar
let ism = "Ali";
console.log("Salom, " + ism + "!");

// Funksiyalar
function salomBer(ism) {
  return "Salom, " + ism + "!";
}

console.log(salomBer("Vali"));`,
  },
  {
    id: "2",
    language: "Python",
    title: "Python da 'Salom, dunyo!'",
    code: `# Python da 'Salom, dunyo!' dasturi
print("Salom, dunyo!")

# O'zgaruvchilar
ism = "Ali"
print(f"Salom, {ism}!")

# Funksiyalar
def salom_ber(ism):
    return f"Salom, {ism}!"

print(salom_ber("Vali"))`,
  },
  {
    id: "3",
    language: "Java",
    title: "Java da 'Salom, dunyo!'",
    code: `// Java da 'Salom, dunyo!' dasturi
public class SalomDunyo {
    public static void main(String[] args) {
        System.out.println("Salom, dunyo!");
        
        // O'zgaruvchilar
        String ism = "Ali";
        System.out.println("Salom, " + ism + "!");
        
        // Metodlar
        System.out.println(salomBer("Vali"));
    }
    
    public static String salomBer(String ism) {
        return "Salom, " + ism + "!";
    }
}`,
  },
]

const resources = [
  {
    id: "1",
    title: "Bepul onlayn kurslar",
    description: "Dasturlashni o'rganish uchun eng yaxshi bepul onlayn kurslar.",
    links: [
      { title: "Codecademy", url: "https://www.codecademy.com" },
      { title: "freeCodeCamp", url: "https://www.freecodecamp.org" },
      { title: "Khan Academy", url: "https://www.khanacademy.org" },
      { title: "W3Schools", url: "https://www.w3schools.com" },
    ],
  },
  {
    id: "2",
    title: "Kitoblar",
    description: "Boshlang'ich dasturchilar uchun eng yaxshi kitoblar.",
    links: [
      { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net" },
      { title: "Python Crash Course", url: "https://nostarch.com/pythoncrashcourse2e" },
      { title: "Head First Java", url: "https://www.oreilly.com/library/view/head-first-java/9781492091646/" },
      { title: "Clean Code", url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/" },
    ],
  },
  {
    id: "3",
    title: "YouTube kanallar",
    description: "Dasturlashni o'rganish uchun eng yaxshi YouTube kanallar.",
    links: [
      { title: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
      { title: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
      { title: "Programming with Mosh", url: "https://www.youtube.com/c/programmingwithmosh" },
      { title: "Academind", url: "https://www.youtube.com/c/Academind" },
    ],
  },
]

export default function BeginnerProgrammingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&auto=format&fit=crop"
              alt="Boshlang'ich dasturlash"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-6 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Boshlang'ich dasturlash</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Dasturlash dunyosiga xush kelibsiz! Bu yerda siz dasturlash asoslari, algoritmlar, ma'lumotlar tuzilmalari
              va boshqa ko'plab mavzular bo'yicha ma'lumot olishingiz mumkin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#topics">Boshlash</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-white/50"
                asChild
              >
                <Link href="#resources">Resurslar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics section */}
      <section id="topics" className="mb-12">
        <SectionHeader title="Asosiy mavzular" description="Dasturlashni o'rganish uchun asosiy mavzular" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beginnerTopics.map((topic) => (
            <Card key={topic.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{topic.icon}</div>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/boshlangich-dasturlash/${topic.slug}`}>Batafsil</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning paths section */}
      <section id="learning-paths" className="mb-12">
        <SectionHeader title="O'rganish yo'llari" description="Dasturlashni o'rganish uchun tavsiya etilgan yo'llar" />

        <Tabs defaultValue="1" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-6">
            {learningPaths.map((path) => (
              <TabsTrigger key={path.id} value={path.id}>
                {path.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {learningPaths.map((path) => (
            <TabsContent key={path.id} value={path.id} className="border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
              <p className="text-muted-foreground mb-6">{path.description}</p>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {path.steps.map((step, index) => (
                    <div key={index} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href={`/boshlangich-dasturlash/orgatish-yoli/${path.id}`}>
                    Bu yo'l bo'yicha o'rganishni boshlash
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Code examples section */}
      <section id="code-examples" className="mb-12">
        <SectionHeader title="Kod namunalari" description="Turli dasturlash tillarida kod namunalari" />

        <Tabs defaultValue="1" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-6">
            {codeExamples.map((example) => (
              <TabsTrigger key={example.id} value={example.id}>
                {example.language}
              </TabsTrigger>
            ))}
          </TabsList>

          {codeExamples.map((example) => (
            <TabsContent key={example.id} value={example.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={`/boshlangich-dasturlash/kod-namunalari/${example.language.toLowerCase()}`}>
                      Ko'proq {example.language} namunalari
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Resources section */}
      <section id="resources" className="mb-12">
        <SectionHeader title="Foydali resurslar" description="Dasturlashni o'rganish uchun foydali resurslar" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {resource.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/boshlangich-dasturlash/resurslar/${resource.id}`}>Ko'proq resurslar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq" className="mb-12">
        <SectionHeader
          title="Ko'p so'raladigan savollar"
          description="Boshlang'ich dasturchilar uchun ko'p so'raladigan savollar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dasturlashni o'rganish uchun qancha vaqt kerak?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Dasturlashni o'rganish uchun kerak bo'ladigan vaqt har bir inson uchun turlicha. Bu sizning o'rganish
                tezligingiz, qanchalik vaqt ajrata olishingiz va qaysi dasturlash tilini o'rganayotganingizga bog'liq.
                Asosiy tushunchalarni o'rganish uchun bir necha hafta, ammo professional darajaga yetish uchun bir necha
                oy yoki yillar kerak bo'lishi mumkin.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Qaysi dasturlash tilini o'rganishim kerak?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Bu sizning maqsadlaringizga bog'liq. Web dasturlash uchun JavaScript, ma'lumotlar tahlili uchun Python,
                mobil dasturlash uchun Java/Kotlin (Android) yoki Swift (iOS) tavsiya etiladi. Boshlang'ich dasturchilar
                uchun Python yoki JavaScript yaxshi tanlov bo'lishi mumkin, chunki ular nisbatan o'rganish oson va keng
                qo'llaniladi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dasturlashni o'rganish uchun kompyuterga qanday talablar bor?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Boshlang'ich dasturlash uchun oddiy zamonaviy kompyuter yetarli. 4GB RAM va Intel i3 yoki AMD Ryzen 3
                protsessori bo'lgan kompyuter ko'pchilik dasturlash tillari va IDE lar uchun yetarli. Ammo, murakkab
                dasturlar yoki mobil dasturlash uchun kuchliroq kompyuter kerak bo'lishi mumkin.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dasturlashni o'rganish uchun matematika bilimi kerakmi?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Asosiy dasturlash uchun chuqur matematika bilimi shart emas. Ammo, ba'zi sohalarda, masalan, sun'iy
                intellekt, ma'lumotlar tahlili yoki 3D grafika bilan ishlashda matematika bilimi juda muhim. Har qanday
                holatda, mantiqiy fikrlash qobiliyati dasturlashda juda muhim.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA section */}
      <section>
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dasturlash sayohatingizni bugun boshlang!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Dasturlash dunyosiga kirishga tayyor bo'lsangiz, bizning forum va jamiyatimizga qo'shiling. Biz sizga yordam
            berishga tayyormiz!
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
              <Link href="/boshlangich-dasturlash/orgatish-yoli/1">O'rganishni boshlash</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

