import fs from "fs"
import path from "path"
import type { UnifiedContent } from "./types"

const DATA_DIR = path.join(process.cwd(), "data")

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR)
}

interface StorageOptions {
  maxAge?: number // Maximum age of data in milliseconds
  maxItems?: number // Maximum number of items to store
}

export class ContentStorage {
  private filename: string
  private options: StorageOptions

  constructor(source: string, options: StorageOptions = {}) {
    this.filename = path.join(DATA_DIR, `${source}.json`)
    this.options = {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      maxItems: 100,
      ...options,
    }
  }

  async load(): Promise<UnifiedContent[]> {
    try {
      if (!fs.existsSync(this.filename)) {
        return []
      }

      const data = await fs.promises.readFile(this.filename, "utf-8")
      const content = JSON.parse(data)

      // Filter out old content
      if (this.options.maxAge) {
        const now = Date.now()
        return content.filter((item: UnifiedContent) => {
          const age = now - new Date(item.publishedAt).getTime()
          return age < this.options.maxAge!
        })
      }

      return content
    } catch (error) {
      console.error(`Error loading content from ${this.filename}:`, error)
      return []
    }
  }

  async save(content: UnifiedContent[]): Promise<void> {
    try {
      // Limit number of items if specified
      const limitedContent = this.options.maxItems ? content.slice(0, this.options.maxItems) : content

      await fs.promises.writeFile(this.filename, JSON.stringify(limitedContent, null, 2), "utf-8")
    } catch (error) {
      console.error(`Error saving content to ${this.filename}:`, error)
    }
  }

  async update(newContent: UnifiedContent[]): Promise<void> {
    try {
      const existingContent = await this.load()

      // Merge existing and new content, removing duplicates
      const merged = [
        ...newContent,
        ...existingContent.filter((existing) => !newContent.some((newItem) => newItem.id === existing.id)),
      ]

      await this.save(merged)
    } catch (error) {
      console.error(`Error updating content in ${this.filename}:`, error)
    }
  }
}

