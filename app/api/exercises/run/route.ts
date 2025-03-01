import { NextResponse } from "next/server"
import { VM } from "vm2"

export async function POST(req: Request) {
  try {
    const { code, language, testCases } = await req.json()

    if (!code || !language || !testCases) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const results = []
    const vm = new VM({
      timeout: 1000,
      sandbox: {},
    })

    for (const testCase of testCases) {
      try {
        const start = performance.now()

        // Run code in sandbox
        let result
        if (language === "javascript") {
          const wrappedCode = `
            ${code}
            module.exports = ${getFunctionName(code)}
          `
          const fn = vm.run(wrappedCode)
          result = fn(...testCase.input)
        } else if (language === "python") {
          // For Python, we'd need a Python runtime
          throw new Error("Python execution not implemented")
        }

        const end = performance.now()

        results.push({
          passed: deepEqual(result, testCase.output),
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: result,
          runtime: Math.round(end - start),
        })
      } catch (error) {
        results.push({
          passed: false,
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: null,
          error: error.message,
        })
      }
    }

    return NextResponse.json({
      success: true,
      results,
      allPassed: results.every((r) => r.passed),
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Helper functions
function getFunctionName(code: string): string {
  const match = code.match(/function\s+([^\s(]+)/)
  return match ? match[1] : ""
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true

  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((val, idx) => deepEqual(val, b[idx]))
  }

  if (typeof a === "object" && typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  return false
}

