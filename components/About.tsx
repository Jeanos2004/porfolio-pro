"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Gamepad2, BookOpen, Plane, Brain, Zap, GraduationCap, Heart, Star, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  const [activeTab, setActiveTab] = useState("story")

  const passions = [
    { icon: Code2, name: "Programmation", color: "text-neon-blue", description: "Ma passion depuis toujours" },
    { icon: Gamepad2, name: "Jeux Vidéo", color: "text-neon-purple", description: "Univers créatifs infinis" },
    { icon: BookOpen, name: "Mangas & Livres", color: "text-neon-green", description: "Histoires captivantes" },
    { icon: Plane, name: "Voyages", color: "text-neon-pink", description: "Découvrir le monde" },
  ]

  const traits = [
    { icon: Brain, name: "Curieux", description: "Toujours en quête de nouvelles connaissances" },
    { icon: Zap, name: "Autodidacte", description: "J'apprends par passion et détermination" },
    { icon: Heart, name: "Passionné", description: "Je mets du cœur dans tout ce que je fais" },
    { icon: Star, name: "Créatif", description: "J'aime créer des solutions originales" },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Découverte de la programmation",
      description: 'Premier "Hello World" en Python - le déclic !',
      icon: "🚀",
    },
    {
      year: "2021",
      title: "Plongée dans le développement web",
      description: "HTML, CSS, JavaScript - construction de mes premiers sites",
      icon: "🌐",
    },
    {
      year: "2022",
      title: "Frameworks modernes",
      description: "React, Next.js, Node.js - montée en compétences",
      icon: "⚡",
    },
    {
      year: "2023",
      title: "Université Gamal Abdel Nasser",
      description: "Formation en développement logiciel",
      icon: "🎓",
    },
    {
      year: "2024",
      title: "Projets ambitieux",
      description: "Création d'applications complètes et innovantes",
      icon: "🏆",
    },
  ]

  const tabs = [
    { id: "story", label: "Mon Histoire", icon: BookOpen },
    { id: "passions", label: "Mes Passions", icon: Heart },
    { id: "traits", label: "Qui je suis", icon: Star },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Étudiant passionné, développeur en devenir, et créateur d'expériences numériques uniques
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-2 flex space-x-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Story Text */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-neon-blue" />
                    Mon parcours
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Étudiant en développement logiciel à l'Université Gamal Abdel Nasser de Conakry, je suis passionné
                    par la création d'expériences numériques innovantes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mon voyage dans la tech a commencé par curiosité et s'est transformé en véritable passion. J'aime
                    résoudre des problèmes complexes et créer des solutions élégantes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "Firebase"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Coffee className="h-4 w-4" />
                    <span>Alimenté par le café</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Code2 className="h-4 w-4" />
                    <span>Code tous les jours</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full glass-effect flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-mono text-neon-blue">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-neon-blue/50 to-transparent flex-1" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "passions" && (
            <motion.div
              key="passions"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="tech-card p-6 text-center group cursor-pointer"
                >
                  <div className="mb-4 relative">
                    <passion.icon className={`h-12 w-12 mx-auto ${passion.color} group-hover:animate-float`} />
                    <div className="absolute inset-0 animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <passion.icon className={`h-12 w-12 mx-auto ${passion.color} opacity-50`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{passion.name}</h3>
                  <p className="text-sm text-muted-foreground">{passion.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "traits" && (
            <motion.div
              key="traits"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl glass-effect flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <trait.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{trait.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="max-w-2xl mx-auto glass-effect border-primary/20">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-medium text-center mb-4">
                <span className="text-6xl text-primary/20 leading-none">"</span>
                <span className="gradient-text">La technologie n'est limitée que par notre imagination</span>
                <span className="text-6xl text-primary/20 leading-none">"</span>
              </blockquote>
              <cite className="text-muted-foreground">— Ma philosophie de développeur</cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
