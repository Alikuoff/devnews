import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Providers } from "./providers"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: {
    default: "DevNews - Dasturchilar uchun yangiliklar va ta'lim",
    template: "%s | DevNews",
  },
  description: "Dasturchilar uchun yangiliklar, maqolalar va ta'lim resurslari",
  keywords: ["dasturlash", "dasturchi", "o'zbek", "ta'lim", "yangiliklar", "programming", "developer"],
  authors: [
    {
      name: "DevNews",
      url: "https://devnews.uz",
    },
  ],
  creator: "DevNews",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://devnews.uz",
    title: "DevNews - Dasturchilar uchun yangiliklar va ta'lim",
    description: "Dasturchilar uchun yangiliklar, maqolalar va ta'lim resurslari",
    siteName: "DevNews",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNews - Dasturchilar uchun yangiliklar va ta'lim",
    description: "Dasturchilar uchun yangiliklar, maqolalar va ta'lim resurslari",
    creator: "@devnews",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'