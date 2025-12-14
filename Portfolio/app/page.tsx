'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    // S'assurer que nous sommes côté client
    if (typeof window === 'undefined') return
    
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    // Initialiser la taille de la fenêtre
    handleResize()
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Créer plusieurs cercles pour l'effet de traînée
  const trailCircles = Array.from({ length: 4 }, (_, i) => i)
  
  // Calculer les tailles selon la résolution
  const getTrailSize = (index: number) => {
    const baseSize = windowSize.width >= 2560 ? 400 : 
                     windowSize.width >= 1920 ? 320 : 
                     windowSize.width < 640 ? 200 : 320
    return baseSize - index * (baseSize / 6.4)
  }
  
  const getMainCircleSize = () => {
    if (windowSize.width >= 2560) return 512
    if (windowSize.width >= 1920) return 384
    if (windowSize.width < 640) return 192
    return 384
  }

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      
      {/* Effet de traînée - seulement côté client pour éviter l'erreur d'hydratation */}
      {isMounted && trailCircles.map((index) => {
        const size = getTrailSize(index)
        const opacity = 0.1 - index * 0.02
        return (
          <motion.div
            key={index}
            className="fixed rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(0,240,255,${opacity}) 0%, transparent 70%)`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              x: mousePosition.x - size / 2,
              y: mousePosition.y - size / 2,
            }}
            transition={{
              type: 'tween',
              duration: 0.01 + index * 0.01,
              ease: 'linear',
            }}
          />
        )
      })}
      
      {/* Cercle principal du curseur */}
      {isMounted && (() => {
        const mainSize = getMainCircleSize()
        return (
          <motion.div 
            className="fixed rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)',
              width: `${mainSize}px`,
              height: `${mainSize}px`,
            }}
            animate={{
              x: mousePosition.x - mainSize / 2,
              y: mousePosition.y - mainSize / 2,
            }}
            transition={{
              type: 'tween',
              duration: 0.01,
              ease: 'linear',
            }}
          />
        )
      })()}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

