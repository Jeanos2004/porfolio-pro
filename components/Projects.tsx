"use client"

import { motion } from "framer-motion"
import { Code, ImagePlus, LayoutDashboard, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio Personnel",
      description: "Mon portfolio personnel, développé avec Next.js et Tailwind CSS.",
      icon: Code,
      link: "#",
    },
    {
      title: "Dashboard d'Administration",
      description: "Un dashboard d'administration pour gérer les contenus d'une application.",
      icon: LayoutDashboard,
      link: "#",
    },
    {
      title: "Application de Partage d'Images",
      description: "Une application permettant de partager des images avec une communauté.",
      icon: ImagePlus,
      link: "#",
    },
    {
      title: "Projet Innovant",
      description: "Un projet innovant en cours de développement.",
      icon: Rocket,
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Voici quelques projets sur lesquels j'ai travaillé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card h-full group cursor-pointer">
                <CardContent className="p-6">
                  <div className="mb-4 relative">
                    <project.icon className="h-10 w-10 mx-auto text-neon-blue group-hover:animate-float" />
                    <div className="absolute inset-0 animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <project.icon className="h-10 w-10 mx-auto text-neon-blue opacity-50" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
