import FeaturedArticle from "@/components/featured-article"
import ArticleCard from "@/components/article-card"
import NewsCard from "@/components/news-card"
import SectionHeader from "@/components/section-header"

// Mock data
const featuredArticle = {
  id: "1",
  title: "Next.js 15 chiqdi: Yangi imkoniyatlar va yaxshilanishlar",
  description:
    "Next.js 15 versiyasi e'lon qilindi. Ushbu yangilanishda React Server Components, Streaming, va Server Actions kabi yangi imkoniyatlar taqdim etildi. Bundan tashqari, Turbo va Tailwind CSS bilan integratsiya yaxshilandi.",
  image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1200&h=800&auto=format&fit=crop",
  date: "2025-02-28",
  commentCount: 24,
  category: "Framework",
  slug: "nextjs-15-yangi-imkoniyatlar",
}

const latestArticles = [
  {
    id: "2",
    title: "TypeScript 5.4: Yangi xususiyatlar va yaxshilanishlar",
    description:
      "TypeScript 5.4 versiyasi e'lon qilindi. Ushbu yangilanishda yangi xususiyatlar va yaxshilanishlar mavjud. Batafsil ma'lumot uchun maqolani o'qing.",
    image: "https://images.unsplash.com/photo-1700795369481-87e12cc3b53c?w=600&h=400&auto=format&fit=crop",
    date: "2025-02-25",
    commentCount: 12,
    category: "Dasturlash tillari",
    slug: "typescript-5-4-yangi-xususiyatlar",
  },
  {
    id: "3",
    title: "React 19 beta versiyasi e'lon qilindi",
    description:
      "React 19 beta versiyasi e'lon qilindi. Ushbu yangilanishda yangi xususiyatlar va yaxshilanishlar mavjud. Batafsil ma'lumot uchun maqolani o'qing.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&auto=format&fit=crop",
    date: "2025-02-20",
    commentCount: 18,
    category: "Framework",
    slug: "react-19-beta-versiyasi",
  },
  {
    id: "4",
    title: "Rust dasturlash tili: Nima uchun mashhur bo'lmoqda?",
    description:
      "Rust dasturlash tili so'nggi yillarda juda mashhur bo'lib bormoqda. Ushbu maqolada Rust tilining afzalliklari va kamchiliklari haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=600&h=400&auto=format&fit=crop",
    date: "2025-02-15",
    commentCount: 15,
    category: "Dasturlash tillari",
    slug: "rust-dasturlash-tili",
  },
]

const latestNews = [
  {
    id: "1",
    title: "Google I/O 2025 konferensiyasi e'lon qilindi",
    description:
      "Google kompaniyasi I/O 2025 konferensiyasi sanasini e'lon qildi. Konferensiya 2025-yil may oyida bo'lib o'tadi.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&auto=format&fit=crop",
    date: "2025-03-01",
    category: "Yangiliklar",
    slug: "google-io-2025",
  },
  {
    id: "2",
    title: "GitHub Copilot yangi imkoniyatlari taqdim etildi",
    description: "GitHub Copilot endi yangi imkoniyatlarga ega bo'ldi. Endi u test yozishda ham yordam beradi.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-28",
    category: "AI",
    slug: "github-copilot-yangi-imkoniyatlar",
  },
  {
    id: "3",
    title: "Apple WWDC 2025 konferensiyasi e'lon qilindi",
    description:
      "Apple kompaniyasi WWDC 2025 konferensiyasi sanasini e'lon qildi. Konferensiya 2025-yil iyun oyida bo'lib o'tadi.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-27",
    category: "Yangiliklar",
    slug: "apple-wwdc-2025",
  },
  {
    id: "4",
    title: "VS Code yangi versiyasi chiqdi",
    description:
      "Visual Studio Code yangi versiyasi chiqdi. Ushbu versiyada yangi xususiyatlar va yaxshilanishlar mavjud.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-26",
    category: "IDE",
    slug: "vscode-yangi-versiya",
  },
]

const popularProgrammingLanguages = [
  {
    id: "1",
    title: "JavaScript: Web dasturlashning asosiy tili",
    description:
      "JavaScript web dasturlashning eng mashhur tili hisoblanadi. Ushbu maqolada JavaScript haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-10",
    commentCount: 20,
    category: "Dasturlash tillari",
    slug: "javascript-web-dasturlash",
  },
  {
    id: "2",
    title: "Python: Data Science va AI uchun eng yaxshi til",
    description:
      "Python data science va sun'iy intellekt sohasida eng ko'p ishlatiladigan til hisoblanadi. Ushbu maqolada Python haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-05",
    commentCount: 18,
    category: "Dasturlash tillari",
    slug: "python-data-science",
  },
  {
    id: "3",
    title: "Go: Yuqori unumdorlikka ega zamonaviy til",
    description:
      "Go tili Google tomonidan yaratilgan bo'lib, yuqori unumdorlikka ega. Ushbu maqolada Go tili haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1662026911591-333007b2db70?w=500&h=300&auto=format&fit=crop",
    date: "2025-01-30",
    commentCount: 15,
    category: "Dasturlash tillari",
    slug: "go-zamonaviy-til",
  },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Article */}
      <section className="mb-12">
        <FeaturedArticle {...featuredArticle} />
      </section>

      {/* Latest Articles */}
      <section className="mb-12">
        <SectionHeader
          title="So'nggi maqolalar"
          description="Eng so'nggi va qiziqarli maqolalar"
          viewAllLink="/vlog-maqolalar"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-12">
        <SectionHeader title="Yangiliklar" description="IT sohasidagi so'nggi yangiliklar" viewAllLink="/yangiliklar" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </section>

      {/* Programming Languages */}
      <section className="mb-12">
        <SectionHeader
          title="Dasturlash tillari"
          description="Eng mashhur dasturlash tillari haqida"
          viewAllLink="/dasturlash-tillari"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularProgrammingLanguages.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  )
}

