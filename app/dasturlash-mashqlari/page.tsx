import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { categories, exercises } from "@/lib/exercises/data"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import icons
const DynamicIcon = dynamic<{ name: string }>(
  (props) => import("lucide-react").then((mod) => mod[props.name] as unknown as LucideIcon),
  { ssr: false },
)

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const variants = {
    easy: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
    medium: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
    hard: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
  }

  return (
    <Badge variant="outline" className={variants[difficulty as keyof typeof variants]}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </Badge>
  )
}

export default function ExercisesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Dasturlash mashqlari</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dasturlash ko'nikmalaringizni rivojlantirish uchun interaktiv mashqlar to'plami. Har xil qiyinlik darajasidagi
          mashqlarni yeching va o'z bilimingizni sinab ko'ring.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#categories">Boshlash</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#leaderboard">Leaderboard</Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kategoriyalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {category.icon && <DynamicIcon name={category.icon} className="h-8 w-8 text-primary" />}
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{category.exerciseCount} ta mashq</span>
                  <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform" asChild>
                    <Link href={`/dasturlash-mashqlari/category/${category.id}`}>Ko'rish →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exercise list */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">So'nggi qo'shilgan mashqlar</h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Barchasi</TabsTrigger>
            <TabsTrigger value="easy">Oson</TabsTrigger>
            <TabsTrigger value="medium">O'rta</TabsTrigger>
            <TabsTrigger value="hard">Qiyin</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exercises.map((exercise) => (
                <Card key={exercise.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors mb-2">
                          {exercise.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{exercise.description}</CardDescription>
                      </div>
                      <DifficultyBadge difficulty={exercise.difficulty} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{exercise.points} ball</span>
                        <span>{exercise.completions} marta yechildi</span>
                        <span>{exercise.likes} like</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:translate-x-1 transition-transform"
                        asChild
                      >
                        <Link href={`/dasturlash-mashqlari/${exercise.id}`}>Yechish →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="easy">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exercises
                .filter((e) => e.difficulty === "easy")
                .map((exercise) => (
                  <Card key={exercise.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors mb-2">
                            {exercise.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">{exercise.description}</CardDescription>
                        </div>
                        <DifficultyBadge difficulty={exercise.difficulty} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{exercise.points} ball</span>
                          <span>{exercise.completions} marta yechildi</span>
                          <span>{exercise.likes} like</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:translate-x-1 transition-transform"
                          asChild
                        >
                          <Link href={`/dasturlash-mashqlari/${exercise.id}`}>Yechish →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Similar TabsContent for medium and hard difficulties */}
        </Tabs>
      </section>

      {/* Leaderboard section */}
      <section id="leaderboard" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Eng yaxshi natijalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weekly leaders */}
          <Card>
            <CardHeader>
              <CardTitle>Haftalik</CardTitle>
              <CardDescription>So'nggi 7 kun</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{i}</span>
                      <span>User {i}</span>
                    </div>
                    <span className="text-primary font-medium">{1000 - i * 100} ball</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly leaders */}
          <Card>
            <CardHeader>
              <CardTitle>Oylik</CardTitle>
              <CardDescription>So'nggi 30 kun</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{i}</span>
                      <span>User {i}</span>
                    </div>
                    <span className="text-primary font-medium">{5000 - i * 500} ball</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All-time leaders */}
          <Card>
            <CardHeader>
              <CardTitle>Umumiy</CardTitle>
              <CardDescription>Barcha vaqt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{i}</span>
                      <span>User {i}</span>
                    </div>
                    <span className="text-primary font-medium">{10000 - i * 1000} ball</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

