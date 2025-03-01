import { NextResponse } from "next/server"
import { updateAllSources } from "@/lib/api/scheduler"

export async function GET() {
  try {
    await updateAllSources()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Cron job error:", error)
    return NextResponse.json({ error: "Failed to update sources" }, { status: 500 })
  }
}

