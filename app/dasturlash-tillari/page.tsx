import SectionHeader from "@/components/section-header"
import ArticleCard from "@/components/article-card"

// Mock data
const programmingLanguages = [
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
  {
    id: "4",
    title: "Java: Enterprise dasturlash uchun eng yaxshi til",
    description:
      "Java enterprise dasturlash sohasida eng ko'p ishlatiladigan til hisoblanadi. Ushbu maqolada Java haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&auto=format&fit=crop",
    date: "2025-01-25",
    commentCount: 12,
    category: "Dasturlash tillari",
    slug: "java-enterprise-dasturlash",
  },
  {
    id: "5",
    title: "C#: .NET ekotizimining asosiy tili",
    description:
      "C# Microsoft tomonidan yaratilgan bo'lib, .NET ekotizimining asosiy tili hisoblanadi. Ushbu maqolada C# haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=500&h=300&auto=format&fit=crop",
    date: "2025-01-20",
    commentCount: 10,
    category: "Dasturlash tillari",
    slug: "csharp-dotnet",
  },
  {
    id: "6",
    title: "TypeScript: JavaScript-ning tiplashtirish bilan kengaytirilgan versiyasi",
    description:
      "TypeScript JavaScript-ning tiplashtirish bilan kengaytirilgan versiyasi hisoblanadi. Ushbu maqolada TypeScript haqida batafsil ma'lumot berilgan.",
    image: "https://images.unsplash.com/photo-1700795369481-87e12cc3b53c?w=500&h=300&auto=format&fit=crop",
    date: "2025-01-15",
    commentCount: 14,
    category: "Dasturlash tillari",
    slug: "typescript-javascript",
  },
]

export default function ProgrammingLanguagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SectionHeader title="Dasturlash tillari" description="Eng mashhur dasturlash tillari haqida batafsil ma'lumot" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmingLanguages.map((language) => (
          <ArticleCard key={language.id} {...language} />
        ))}
      </div>
    </div>
  )
}

