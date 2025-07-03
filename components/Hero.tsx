"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "Coder le futur, une ligne à la fois. 🚀"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants as any} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Développeur Full-Stack
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants as any} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Jeanos</span>
            <br />
            <span className="text-foreground">Ouamouno</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={itemVariants as any} className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Développeur Full-Stack & Créateur d&apos;expériences numériques
          </motion.p>

          {/* Typing Animation */}
          <motion.div variants={itemVariants as any} className="mb-8">
            <p className="text-lg md:text-xl font-mono text-neon-blue min-h-[2rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={itemVariants as any} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="glass-effect rounded-lg p-4 text-center">
              <MapPin className="h-5 w-5 text-neon-blue mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Conakry, Guinée</p>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <Phone className="h-5 w-5 text-neon-purple mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">+224 620 327 906</p>
            </div>
            <div className="glass-effect rounded-lg p-4 text-center">
              <Mail className="h-5 w-5 text-neon-green mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Disponible</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants as any} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Voir mes projets
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.open("mailto:Jeank.ouamouno@fasosmart.com", "_blank")}
            >
              Me contacter
            </Button>
          </motion.div>

          {/* Social Links - Liens sociaux structurés */}
          <motion.div variants={itemVariants as any} className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/Jeanos2004", label: "GitHub de Jeanos Ouamouno" },
              { icon: Linkedin, href: "https://linkedin.com/in/jeanos-ouamouno", label: "LinkedIn de Jeanos Ouamouno" },
              { icon: Mail, href: "mailto:Jeank.ouamouno@fasosmart.com", label: "Contacter Jeanos Ouamouno par email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass-effect hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
                rel="noopener noreferrer"
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants as any} className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
