import SectionHeader from "@/components/section-header"
import NewsCard from "@/components/news-card"

// Mock data
const allNews = [
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
  {
    id: "5",
    title: "Flutter 4.0 versiyasi e'lon qilindi",
    description:
      "Google Flutter 4.0 versiyasini e'lon qildi. Ushbu versiyada yangi xususiyatlar va yaxshilanishlar mavjud.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&h=300&auto=format&fit=crop",
    date: "2025-02-25",
    category: "Framework",
    slug: "flutter-4-0",
  },
  {
    id: "6",
    title: "Microsoft Build 2025 konferensiyasi e'lon qilindi",
    description:
      "Microsoft Build 2025 konferensiyasi sanasini e'lon qildi. Konferensiya 2025-yil may oyida bo'lib o'tadi.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-02-24",
    category: "Yangiliklar",
    slug: "microsoft-build-2025",
  },
  {
    id: "7",
    title: "Rust 2.0 versiyasi e'lon qilindi",
    description:
      "Rust dasturlash tilining 2.0 versiyasi e'lon qilindi. Ushbu versiyada yangi xususiyatlar va yaxshilanishlar mavjud.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-02-23",
    category: "Dasturlash tillari",
    slug: "rust-2-0",
  },
  {
    id: "8",
    title: "AWS yangi xizmatlarini e'lon qildi",
    description:
      "Amazon Web Services yangi xizmatlarini e'lon qildi. Ushbu xizmatlar bulutli hisoblash sohasida yangi imkoniyatlar taqdim etadi.",
    image: "/placeholder.svg?height=300&width=500",
    date: "2025-02-22",
    category: "Cloud",
    slug: "aws-yangi-xizmatlar",
  },
]

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionHeader title="Yangiliklar" description="IT sohasidagi so'nggi yangiliklar" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allNews.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  )
}

