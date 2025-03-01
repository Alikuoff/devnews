import type { Metadata } from "next"

export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  type?: "website" | "article"
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = "https://devnews.uz/og-image.jpg",
  type = "website",
  canonical,
}: SEOProps): Metadata {
  const baseKeywords = ["dasturlash", "dasturchi", "o'zbek", "ta'lim", "yangiliklar", "programming", "developer"]

  return {
    title: {
      default: title,
      template: `%s | DevNews`,
    },
    description,
    keywords: [...baseKeywords, ...keywords],
    authors: [
      {
        name: "DevNews",
        url: "https://devnews.uz",
      },
    ],
    creator: "DevNews",
    openGraph: {
      type,
      locale: "uz_UZ",
      url: canonical || "https://devnews.uz",
      title,
      description,
      siteName: "DevNews",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@devnews",
    },
    alternates: {
      canonical: canonical || "https://devnews.uz",
    },
    metadataBase: new URL("https://devnews.uz"),
  }
}

