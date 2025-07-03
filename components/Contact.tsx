"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Jeank.ouamouno@fasosmart.com",
      href: "mailto:Jeank.ouamouno@fasosmart.com",
      color: "text-neon-blue",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+224 620 327 906",
      href: "tel:+224620327906",
      color: "text-neon-purple",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Conakry, Guinée",
      href: "#",
      color: "text-neon-green",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden" role="main">
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
            Contacter <span className="gradient-text">Jeanos Ouamouno</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Développeur full-stack à Conakry disponible pour vos projets web et mobile. 
            Une idée de projet ? Une opportunité ? N&apos;hésitez pas à contacter Jeanos Ouamouno !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="tech-card h-full group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 relative">
                    <info.icon className={`h-12 w-12 mx-auto ${info.color} group-hover:animate-float`} />
                    <div className="absolute inset-0 animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <info.icon className={`h-12 w-12 mx-auto ${info.color} opacity-50`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.label}</h3>
                  <p className="text-muted-foreground mb-4">{info.value}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:border-primary group-hover:text-primary transition-colors bg-transparent"
                    onClick={() => window.open(info.href, "_blank")}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Contacter
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto glass-effect border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
              <p className="text-muted-foreground mb-6">
                Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 hover:from-blue-500 hover:to-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => window.open("mailto:Jeank.ouamouno@fasosmart.com", "_blank")}
              >
                <Mail className="h-5 w-5 mr-2" />
                Envoyez-moi un message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
