import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jeanos Ouamouno - Développeur Full-Stack",
  description:
    "Portfolio de Jeanos Ouamouno, développeur full-stack passionné par la création d'expériences numériques innovantes.",
  keywords: ["développeur", "full-stack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Jeanos Ouamouno" }],
  creator: "Jeanos Ouamouno",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jeanos.dev",
    title: "Jeanos Ouamouno - Développeur Full-Stack",
    description:
      "Portfolio de Jeanos Ouamouno, développeur full-stack passionné par la création d'expériences numériques innovantes.",
    siteName: "Jeanos.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeanos Ouamouno - Développeur Full-Stack",
    description:
      "Portfolio de Jeanos Ouamouno, développeur full-stack passionné par la création d'expériences numériques innovantes.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
