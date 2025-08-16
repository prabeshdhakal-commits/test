import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Masala House | Authentic Indian Cuisine & Street Foods in Concord, CA",
  description:
    "Experience authentic Indian cuisine and street foods at Masala House in Concord, CA. Daily buffet, catering services, and more. The best Indian restaurant in Concord.",
  keywords:
    "Indian restaurant, Concord, CA, Indian cuisine, street food, buffet, catering, authentic Indian food, Masala House, best Indian restaurant",
  authors: [{ name: "Amar Kunwar", url: "https://masalahouseconcord.com" }],
  creator: "Masala House Concord",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masalahouseconcord.com",
    title: "Masala House | Authentic Indian Cuisine & Street Foods in Concord, CA",
    description:
      "Experience authentic Indian cuisine and street foods at Masala House in Concord, CA. Daily buffet, catering services, and more.",
    siteName: "Masala House Concord",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Masala House Concord - Authentic Indian Cuisine",
      },
    ],
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
  verification: {
    google: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://masalahouseconcord.com" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'