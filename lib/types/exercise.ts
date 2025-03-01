export interface Exercise {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  category: string
  points: number
  likes: number
  completions: number
  testCases: TestCase[]
  starterCode: {
    javascript?: string
    python?: string
    java?: string
  }
  solution: {
    javascript?: string
    python?: string
    java?: string
  }
}

export interface TestCase {
  input: any[]
  output: any
  isHidden?: boolean
}

export interface ExerciseSubmission {
  id: string
  exerciseId: string
  userId: string
  code: string
  language: string
  status: "passed" | "failed" | "error"
  runtime: number // milliseconds
  memory: number // bytes
  submittedAt: Date
  testResults: TestResult[]
}

export interface TestResult {
  passed: boolean
  input: any[]
  expectedOutput: any
  actualOutput: any
  error?: string
}

export interface ExerciseCategory {
  id: string
  name: string
  description: string
  exerciseCount: number
  icon: string
}

