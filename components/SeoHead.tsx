import Head from 'next/head'

interface SeoHeadProps {
  title?: string
  description?: string
  canonical?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  noindex?: boolean
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title = "Jeanos Ouamouno - Développeur Full-Stack à Conakry",
  description = "Portfolio de Jeanos Ouamouno, développeur web et mobile full-stack basé à Conakry, Guinée. Spécialisé en React, Next.js, Node.js et développement d'applications modernes.",
  canonical = "https://jeanosdev.me",
  image = "/og-image.jpg",
  type = "website",
  noindex = false
}) => {
  const siteUrl = "https://jeanosdev.me"
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeanos Ouamouno",
    "alternateName": "Jean Ouamouno",
    "jobTitle": "Développeur Full-Stack",
    "description": "Développeur web et mobile full-stack spécialisé en React, Next.js, Node.js basé à Conakry, Guinée",
    "url": siteUrl,
    "image": fullImageUrl,
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
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Jeanos Ouamouno, Jean Ouamouno, développeur web, développeur mobile, Conakry, Guinée, React, Next.js, Node.js, full-stack developer, portfolio développeur" />
      <meta name="author" content="Jeanos Ouamouno" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      <link rel="canonical" href={canonical} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Jeanos Ouamouno - Développeur Full-Stack" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Jeanos Ouamouno Portfolio" />
      <meta property="og:locale" content="fr_FR" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Jeanos Ouamouno - Développeur Full-Stack" />
      <meta name="twitter:creator" content="@jeanos_ouamouno" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00D4FF" />
      <meta name="msapplication-TileColor" content="#00D4FF" />
      
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
    </Head>
  )
}

export default SeoHead 