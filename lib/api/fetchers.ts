import type { UnifiedContent } from "./types"

const DEVTO_API_KEY = process.env.DEVTO_API_KEY
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID
const REDDIT_CLIENT_SECRET = process.env.REDDIT_CLIENT_SECRET
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN

export async function fetchDevToArticles(): Promise<UnifiedContent[]> {
  try {
    const response = await fetch("https://dev.to/api/articles?top=30", {
      headers: {
        "api-key": DEVTO_API_KEY!,
      },
    })

    if (!response.ok) {
      throw new Error(`DevTo API error: ${response.statusText}`)
    }

    const articles = await response.json()

    return articles.map((article: any) => ({
      id: `devto-${article.id}`,
      title: article.title,
      description: article.description,
      url: article.url,
      author: article.user.name,
      publishedAt: article.published_at,
      source: "devto",
      tags: article.tags,
      engagement: {
        likes: article.positive_reactions_count,
        comments: article.comments_count,
      },
      metadata: {
        readingTime: article.reading_time_minutes,
      },
    }))
  } catch (error) {
    console.error("Error fetching DevTo articles:", error)
    return []
  }
}

export async function fetchHackerNewsStories(): Promise<UnifiedContent[]> {
  try {
    // First fetch top story IDs
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    const storyIds = await response.json()

    // Fetch details for top 30 stories
    const stories = await Promise.all(
      storyIds.slice(0, 30).map(async (id: number) => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        return storyResponse.json()
      }),
    )

    return stories.map((story: any) => ({
      id: `hn-${story.id}`,
      title: story.title,
      url: story.url,
      author: story.by,
      publishedAt: new Date(story.time * 1000).toISOString(),
      source: "hackernews",
      engagement: {
        likes: story.score,
        comments: story.descendants,
      },
      metadata: {
        type: story.type,
      },
    }))
  } catch (error) {
    console.error("Error fetching Hacker News stories:", error)
    return []
  }
}

export async function fetchGithubTrending(): Promise<UnifiedContent[]> {
  try {
    const response = await fetch("https://api.gitterapp.com/repositories?since=daily", {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const repos = await response.json()

    return repos.map((repo: any) => ({
      id: `github-${repo.author}-${repo.name}`,
      title: `${repo.author}/${repo.name}`,
      description: repo.description,
      url: repo.url,
      author: repo.author,
      publishedAt: new Date().toISOString(), // GitHub trending doesn't provide exact date
      source: "github",
      tags: [repo.language],
      engagement: {
        likes: repo.stars,
        shares: repo.forks,
      },
      metadata: {
        language: repo.language,
        languageColor: repo.languageColor,
        currentPeriodStars: repo.currentPeriodStars,
      },
    }))
  } catch (error) {
    console.error("Error fetching GitHub trending:", error)
    return []
  }
}

export async function fetchRedditPosts(): Promise<UnifiedContent[]> {
  try {
    // First get access token
    const tokenResponse = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })

    const { access_token } = await tokenResponse.json()

    // Fetch top programming posts
    const response = await fetch("https://oauth.reddit.com/r/programming/top.json?t=day&limit=30", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const {
      data: { children },
    } = await response.json()

    return children.map(({ data: post }: any) => ({
      id: `reddit-${post.id}`,
      title: post.title,
      url: post.url,
      author: post.author,
      publishedAt: new Date(post.created_utc * 1000).toISOString(),
      source: "reddit",
      engagement: {
        likes: post.score,
        comments: post.num_comments,
      },
      metadata: {
        subreddit: post.subreddit,
        permalink: `https://reddit.com${post.permalink}`,
      },
    }))
  } catch (error) {
    console.error("Error fetching Reddit posts:", error)
    return []
  }
}

export async function fetchTwitterTrends(): Promise<UnifiedContent[]> {
  try {
    // Fetch trending topics related to technology
    const response = await fetch(
      "https://api.twitter.com/1.1/trends/place.json?id=1", // 1 is the WOEID for worldwide
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      },
    )

    const [{ trends }] = await response.json()

    return trends
      .filter((trend: any) => trend.tweet_volume) // Only include trends with volume
      .map((trend: any) => ({
        id: `twitter-${trend.query}`,
        title: trend.name,
        url: trend.url,
        author: "Twitter Trend",
        publishedAt: new Date().toISOString(),
        source: "twitter",
        engagement: {
          shares: trend.tweet_volume,
        },
        metadata: {
          query: trend.query,
          promoted: trend.promoted_content ? true : false,
        },
      }))
  } catch (error) {
    console.error("Error fetching Twitter trends:", error)
    return []
  }
}

