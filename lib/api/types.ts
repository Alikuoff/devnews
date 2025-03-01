// API response types
export interface DevToArticle {
  id: number
  title: string
  description: string
  url: string
  published_at: string
  user: {
    name: string
    username: string
    profile_image: string
  }
  tags: string[]
  reading_time_minutes: number
}

export interface HackerNewsStory {
  id: number
  title: string
  url: string
  score: number
  by: string
  time: number
  descendants: number // comments count
}

export interface GithubTrending {
  author: string
  name: string
  description: string
  url: string
  language: string
  languageColor: string
  stars: number
  forks: number
  currentPeriodStars: number
}

export interface RedditPost {
  id: string
  title: string
  url: string
  author: string
  score: number
  num_comments: number
  created_utc: number
  subreddit: string
}

export interface TwitterTrend {
  id: string
  text: string
  tweet_volume: number
  url: string
}

// Unified content type for storage
export interface UnifiedContent {
  id: string
  title: string
  description?: string
  url: string
  author: string
  publishedAt: string
  source: "devto" | "hackernews" | "github" | "reddit" | "twitter"
  tags?: string[]
  engagement: {
    likes?: number
    comments?: number
    shares?: number
  }
  metadata: {
    [key: string]: any
  }
}

