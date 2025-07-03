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
  metadataBase: new URL('https://jeanosdev.me'),
  title: "Jeanos Ouamouno - Développeur Full-Stack à Conakry, Guinée",
  description:
    "Portfolio de Jeanos Ouamouno, développeur web et mobile full-stack basé à Conakry, Guinée. Spécialisé en React, Next.js, Node.js et développement d'applications modernes. Étudiant à l'Université Gamal Abdel Nasser.",
  keywords: [
    "Jeanos Ouamouno", 
    "Jean Ouamouno", 
    "développeur web Conakry", 
    "développeur mobile Guinée",
    "full-stack developer",
    "React",
    "Next.js", 
    "Node.js",
    "TypeScript",
    "portfolio développeur",
    "Conakry",
    "Guinée",
    "Université Gamal Abdel Nasser",
    "Firebase",
    "Tailwind CSS"
  ],
  authors: [{ name: "Jeanos Ouamouno", url: "https://jeanos-ouamouno.dev" }],
  creator: "Jeanos Ouamouno",
  publisher: "Jeanos Ouamouno",
  alternates: {
    canonical: "https://jeanos-ouamouno.dev",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jeanos-ouamouno.dev",
    title: "Jeanos Ouamouno - Développeur Full-Stack à Conakry, Guinée",
    description:
      "Portfolio de Jeanos Ouamouno, développeur web et mobile full-stack basé à Conakry, Guinée. Spécialisé en React, Next.js, Node.js et développement d'applications modernes.",
    siteName: "Jeanos Ouamouno Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeanos Ouamouno - Développeur Full-Stack à Conakry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeanos Ouamouno - Développeur Full-Stack à Conakry, Guinée",
    description:
      "Portfolio de Jeanos Ouamouno, développeur web et mobile full-stack basé à Conakry, Guinée. Spécialisé en React, Next.js, Node.js et développement d'applications modernes.",
    creator: "@jeanos_ouamouno",
    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#00D4FF",
    "theme-color": "#00D4FF",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeanos Ouamouno",
    "alternateName": "Jean Ouamouno",
    "jobTitle": "Développeur Full-Stack",
    "description": "Développeur web et mobile full-stack spécialisé en React, Next.js, Node.js basé à Conakry, Guinée",
    "url": "https://jeanosdev.me",
    "image": "https://jeanosdev.me/og-image.jpg",
    "sameAs": [
      "https://github.com/Jeanos2004",
      "https://linkedin.com/in/jeanos-ouamouno",
      "mailto:Jeank.ouamouno@fasosmart.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Conakry",
      "addressCountry": "Guinée"
    },
    "knowsAbout": [
      "Développement Web",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Développement Mobile",
      "Full-Stack Development",
      "Firebase",
      "Tailwind CSS"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Université Gamal Abdel Nasser de Conakry"
    },
    "telephone": "+224 620 327 906"
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
