'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { ChevronDown, Sparkles } from 'lucide-react'

const Avatar3D = dynamic(() => import('./Avatar3D'), {
  ssr: false,
  loading: () => <div className="w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] 3xl:h-[900px] 4xl:h-[1000px] px-1 xs:px-2 sm:px-3 md:px-4 lg:px-8 xl:px-12 3xl:px-24 4xl:px-32" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }} />
})

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  const scrollToNext = () => {
    if (typeof document === 'undefined') return
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-start justify-center overflow-hidden pt-4 xs:pt-6 sm:pt-8">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="relative z-10 max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 3xl:px-12 4xl:px-16 pt-2 xs:pt-3 sm:pt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-0">
            <div className="inline-block">
              <Avatar3D />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center -mt-8 xs:-mt-12 sm:-mt-16 md:-mt-20 lg:-mt-28 xl:-mt-32 2xl:-mt-40 3xl:-mt-48"
          >
            <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              FLORE
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 text-center px-2 xs:px-3 sm:px-4"
        >
          <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-cyber-purple flex-shrink-0" />
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-gray-300 leading-tight xs:leading-normal">
            Spécialisée en <span className="text-cyber-blue">Robotique</span> &{' '}
            <span className="text-cyber-purple">Intelligence Artificielle</span>
          </p>
          <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 3xl:w-7 3xl:h-7 4xl:w-8 4xl:h-8 text-cyber-purple flex-shrink-0" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 3xl:text-2xl 4xl:text-3xl text-gray-400 max-w-2xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 xs:px-3 sm:px-4 leading-relaxed"
        >
          Créatrice de solutions innovantes à l&apos;intersection de la robotique et de l&apos;IA.
          Transformant les idées en réalité technologique.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 justify-center items-center mb-20 xs:mb-24 sm:mb-28 md:mb-32 lg:mb-40 xl:mb-48 3xl:mb-56 px-2 xs:px-3 sm:px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              if (typeof document === 'undefined') return
              const element = document.querySelector('#projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 3xl:px-12 4xl:px-16 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 3xl:py-6 4xl:py-8 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-semibold text-xs xs:text-sm sm:text-base md:text-lg xl:text-xl 3xl:text-2xl 4xl:text-3xl shadow-lg shadow-cyber-blue/50 hover:shadow-cyber-blue/70 transition-all duration-[30ms]"
          >
            Voir mes projets
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            onClick={() => {
              if (typeof document === 'undefined') return
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 3xl:px-12 4xl:px-16 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-4 3xl:py-6 4xl:py-8 border-2 border-cyber-blue text-cyber-blue rounded-lg font-semibold text-xs xs:text-sm sm:text-base md:text-lg xl:text-xl 3xl:text-2xl 4xl:text-3xl hover:bg-cyber-blue/10 transition-all duration-[30ms]"
          >
            Me contacter
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 xs:bottom-10 sm:bottom-12 md:bottom-20 lg:bottom-24 3xl:bottom-32 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToNext}
            className="text-cyber-blue hover:text-cyber-purple transition-colors duration-[30ms]"
            aria-label="Aller à la section suivante"
          >
            <ChevronDown className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

