"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { exercises } from "@/lib/exercises/data"
import type { TestResult } from "@/lib/types/exercise"
import { Check, X, Play, Save, ThumbsUp } from "lucide-react"
import Editor from "@monaco-editor/react"

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

function TestResultItem({ result }: { result: TestResult }) {
  return (
    <div
      className={`p-4 rounded-lg ${result.passed ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {result.passed ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
          <span className="font-medium">{result.passed ? "Test o'tdi" : "Test o'tmadi"}</span>
        </div>
      </div>
      <div className="space-y-1 text-sm">
        <div>
          <span className="font-medium">Kirish:</span> {JSON.stringify(result.input)}
        </div>
        <div>
          <span className="font-medium">Kutilgan natija:</span> {JSON.stringify(result.expectedOutput)}
        </div>
        <div>
          <span className="font-medium">Sizning natijangiz:</span>{" "}
          {result.error ? <span className="text-red-500">{result.error}</span> : JSON.stringify(result.actualOutput)}
        </div>
      </div>
    </div>
  )
}

export default function ExercisePage({ params }: { params: { id: string } }) {
  const exercise = exercises.find((e) => e.id === params.id)
  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState(exercise?.starterCode[language as keyof typeof exercise.starterCode] || "")
  const [results, setResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const runCode = useCallback(async () => {
    if (!exercise) return

    setIsRunning(true)
    try {
      const response = await fetch("/api/exercises/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          testCases: exercise.testCases,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setResults(data.results)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error running code:", error)
    } finally {
      setIsRunning(false)
    }
  }, [exercise, code, language])

  const submitSolution = useCallback(async () => {
    if (!exercise) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/exercises/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exerciseId: exercise.id,
          code,
          language,
          testResults: results,
        }),
      })

      const data = await response.json()
      if (data.success) {
        // Show success message or redirect
        console.log("Solution submitted successfully")
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error submitting solution:", error)
    } finally {
      setIsSaving(false)
    }
  }, [exercise, code, language, results])

  if (!exercise) {
    return <div>Mashq topilmadi</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Problem description */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{exercise.title}</h1>
              <div className="flex items-center gap-4">
                <DifficultyBadge difficulty={exercise.difficulty} />
                <span className="text-sm text-muted-foreground">{exercise.points} ball</span>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <ThumbsUp className="h-4 w-4" />
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Masala</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exercise.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test holatlar</CardTitle>
              <CardDescription>Sizning yechimingiz quyidagi test holatlardan o'tishi kerak</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exercise.testCases.map((test, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="font-medium">Kirish:</span> {JSON.stringify(test.input)}
                      </div>
                      <div>
                        <span className="font-medium">Kutilgan natija:</span> {JSON.stringify(test.output)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Code editor and results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Tilni tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={runCode} disabled={isRunning}>
                <Play className="h-4 w-4 mr-2" />
                Tekshirish
              </Button>
              <Button onClick={submitSolution} disabled={isSaving || results.length === 0}>
                <Save className="h-4 w-4 mr-2" />
                Yechimni yuborish
              </Button>
            </div>
          </div>

          <Card className="h-[500px] overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage={language}
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                automaticLayout: true,
              }}
            />
          </Card>

          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Natijalar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <TestResultItem key={index} result={result} />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

