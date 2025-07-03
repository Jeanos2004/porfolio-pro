"use client"

import { motion } from "framer-motion"
import { Code2, Heart, Coffee } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-6 w-6 text-neon-blue" />
            <span className="text-xl font-bold gradient-text">Jeanos.dev</span>
          </div>

          <p className="text-muted-foreground mb-4 flex items-center justify-center space-x-2">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>et beaucoup de</span>
            <Coffee className="h-4 w-4 text-amber-500" />
          </p>

          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2024 Jeanos Ouamouno. Tous droits réservés.</p>
            <p className="font-mono text-xs">
              <span className="gradient-text">"Coder le futur, une ligne à la fois."</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
