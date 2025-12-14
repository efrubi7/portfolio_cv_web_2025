'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Cpu, Zap, Target } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Développement de modèles d\'IA avancés et systèmes d\'apprentissage automatique',
  },
  {
    icon: Cpu,
    title: 'Robotique',
    description: 'Conception et programmation de robots autonomes et systèmes embarqués',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Création de solutions technologiques à la pointe de l\'innovation',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Engagement envers la qualité et l\'excellence dans chaque projet',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="about" className="relative py-10 xs:py-12 sm:py-16 md:py-20 3xl:py-28 4xl:py-32 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 3xl:px-12 4xl:px-16">
      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 xl:gap-12">
            {/* Texte à gauche */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4">
                À <span className="text-cyber-blue">propos</span> de moi
              </h2>
              <div className="w-16 xs:w-20 sm:w-24 3xl:w-32 4xl:w-40 h-0.5 xs:h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto lg:mx-0 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8" />
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl text-gray-300 max-w-3xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto lg:mx-0 px-2 xs:px-3 sm:px-4 leading-relaxed">
                Passionnée par la robotique et l&apos;intelligence artificielle, je transforme les concepts
                innovants en solutions technologiques concrètes. Mon expertise couvre le développement de
                systèmes robotiques autonomes, l&apos;implémentation de modèles d&apos;IA, et la création
                d&apos;interfaces homme-machine intuitives.
              </p>
            </div>
            
            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] 2xl:w-[500px] 3xl:w-[600px] 4xl:w-[700px] h-auto relative"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/flore.png"
                  alt="Flore"
                  fill
                  className="object-contain"
                  priority
                  quality={90}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-dark-card p-4 sm:p-6 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-[30ms] group"
            >
              <div className="mb-3 sm:mb-4">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyber-blue group-hover:text-cyber-purple transition-colors duration-[30ms]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

