import type { Exercise, ExerciseCategory } from "../types/exercise"
import { BookOpen, Code2, Binary, Braces, Database, GitBranch } from "lucide-react"

export const categories: ExerciseCategory[] = [
  {
    id: "algorithms",
    name: "Algoritmlar",
    description: "Asosiy algoritmlarga oid mashqlar",
    exerciseCount: 50,
    icon: Binary.name,
  },
  {
    id: "data-structures",
    name: "Ma'lumotlar tuzilmalari",
    description: "Array, LinkedList, Tree va boshqa tuzilmalar",
    exerciseCount: 40,
    icon: Database.name,
  },
  {
    id: "strings",
    name: "Satrlar",
    description: "Satrlar bilan ishlashga oid mashqlar",
    exerciseCount: 30,
    icon: Code2.name,
  },
  {
    id: "basics",
    name: "Asosiy tushunchalar",
    description: "Dasturlash asoslariga oid mashqlar",
    exerciseCount: 25,
    icon: BookOpen.name,
  },
  {
    id: "functions",
    name: "Funksiyalar",
    description: "Funksiyalar bilan ishlash",
    exerciseCount: 35,
    icon: Braces.name,
  },
  {
    id: "recursion",
    name: "Rekursiya",
    description: "Rekursiv algoritmlar va funksiyalar",
    exerciseCount: 20,
    icon: GitBranch.name,
  },
]

export const exercises: Exercise[] = [
  {
    id: "1",
    title: "Sonlar yig'indisi",
    description: "Berilgan sonlar massivining barcha elementlari yig'indisini hisoblang.",
    difficulty: "easy",
    category: "basics",
    points: 10,
    likes: 245,
    completions: 1234,
    testCases: [
      { input: [[1, 2, 3, 4, 5]], output: 15 },
      { input: [[-1, -2, -3]], output: -6 },
      { input: [[]], output: 0 },
      { input: [[10]], output: 10 },
    ],
    starterCode: {
      javascript: `function calculateSum(numbers) {
  // Yechimingizni bu yerda yozing
}`,
      python: `def calculate_sum(numbers):
    # Yechimingizni bu yerda yozing
    pass`,
    },
    solution: {
      javascript: `function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}`,
      python: `def calculate_sum(numbers):
    return sum(numbers)`,
    },
  },
  {
    id: "2",
    title: "Palindrom tekshirish",
    description:
      "Berilgan satr palindrom ekanligini aniqlang. Palindrom - o'ngdan va chapdan o'qiganda bir xil o'qiladigan satr.",
    difficulty: "easy",
    category: "strings",
    points: 15,
    likes: 189,
    completions: 876,
    testCases: [
      { input: ["radar"], output: true },
      { input: ["hello"], output: false },
      { input: [""], output: true },
      { input: ["a"], output: true },
    ],
    starterCode: {
      javascript: `function isPalindrome(str) {
  // Yechimingizni bu yerda yozing
}`,
      python: `def is_palindrome(str):
    # Yechimingizni bu yerda yozing
    pass`,
    },
    solution: {
      javascript: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}`,
      python: `def is_palindrome(str):
    return str == str[::-1]`,
    },
  },
  {
    id: "3",
    title: "Fibonachchi sonlari",
    description: "n-chi Fibonachchi sonini hisoblang. Fibonachchi ketma-ketligi: 0, 1, 1, 2, 3, 5, 8, 13, ...",
    difficulty: "medium",
    category: "recursion",
    points: 25,
    likes: 324,
    completions: 567,
    testCases: [
      { input: [0], output: 0 },
      { input: [1], output: 1 },
      { input: [5], output: 5 },
      { input: [10], output: 55 },
    ],
    starterCode: {
      javascript: `function fibonacci(n) {
  // Yechimingizni bu yerda yozing
}`,
      python: `def fibonacci(n):
    # Yechimingizni bu yerda yozing
    pass`,
    },
    solution: {
      javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
      python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)`,
    },
  },
]

