import {
  fetchDevToArticles,
  fetchHackerNewsStories,
  fetchGithubTrending,
  fetchRedditPosts,
  fetchTwitterTrends,
} from "./fetchers"
import { ContentStorage } from "./storage"

// Create storage instances for each source
const storages = {
  devto: new ContentStorage("devto", { maxAge: 24 * 60 * 60 * 1000 }), // 24 hours
  hackernews: new ContentStorage("hackernews", { maxAge: 12 * 60 * 60 * 1000 }), // 12 hours
  github: new ContentStorage("github", { maxAge: 24 * 60 * 60 * 1000 }), // 24 hours
  reddit: new ContentStorage("reddit", { maxAge: 6 * 60 * 60 * 1000 }), // 6 hours
  twitter: new ContentStorage("twitter", { maxAge: 1 * 60 * 60 * 1000 }), // 1 hour
}

// Fetch and update function for each source
async function updateSource(source: keyof typeof storages, fetcher: () => Promise<any[]>) {
  try {
    console.log(`Updating ${source} content...`)
    const content = await fetcher()
    await storages[source].update(content)
    console.log(`Successfully updated ${source} content`)
  } catch (error) {
    console.error(`Error updating ${source} content:`, error)
  }
}

// Update all sources
export async function updateAllSources() {
  await Promise.all([
    updateSource("devto", fetchDevToArticles),
    updateSource("hackernews", fetchHackerNewsStories),
    updateSource("github", fetchGithubTrending),
    updateSource("reddit", fetchRedditPosts),
    updateSource("twitter", fetchTwitterTrends),
  ])
}

// Schedule updates
export function scheduleUpdates() {
  // Update immediately on start
  updateAllSources()

  // Schedule regular updates
  const intervals = {
    twitter: 60 * 60 * 1000, // Every hour
    reddit: 2 * 60 * 60 * 1000, // Every 2 hours
    hackernews: 4 * 60 * 60 * 1000, // Every 4 hours
    devto: 6 * 60 * 60 * 1000, // Every 6 hours
    github: 12 * 60 * 60 * 1000, // Every 12 hours
  }

  // Set up intervals
  Object.entries(intervals).forEach(([source, interval]) => {
    setInterval(() => {
      updateSource(
        source as keyof typeof storages,
        {
          devto: fetchDevToArticles,
          hackernews: fetchHackerNewsStories,
          github: fetchGithubTrending,
          reddit: fetchRedditPosts,
          twitter: fetchTwitterTrends,
        }[source as keyof typeof storages],
      )
    }, interval)
  })
}

