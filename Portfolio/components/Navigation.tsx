'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react'

const navItems = [
  { name: 'Accueil', href: '#hero', icon: Home },
  { name: 'À propos', href: '#about', icon: User },
  { name: 'Compétences', href: '#skills', icon: Code },
  { name: 'Projets', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (typeof document === 'undefined') return
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-transparent h-16" />
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-cyber-blue/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 xs:h-16 gap-2 xs:gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent flex-shrink-0"
          >
            FLORE
          </motion.div>

          {/* Desktop Menu - visible à partir de md (425px) */}
          <div className="hidden md:flex items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3 2xl:space-x-4 3xl:space-x-5 flex-1 max-w-2xl mx-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-300 hover:text-cyber-blue transition-colors duration-[30ms] flex items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 px-1 xs:px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 xs:py-1.5"
              >
                <item.icon size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-[18px] 2xl:h-[18px] flex-shrink-0" />
                <span className="hidden lg:inline whitespace-nowrap">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - visible uniquement sur mobile */}
          <button
            className="md:hidden text-cyber-blue p-1 flex items-center justify-end mr-16  flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} className="xs:w-6 xs:h-6 sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="xs:w-6 xs:h-6 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-card border-t border-cyber-blue/20 w-full"
        >
          <div className="px-3 xs:px-4 sm:px-5 py-3 xs:py-4 space-y-2 xs:space-y-2.5 sm:space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left text-sm xs:text-base text-gray-300 hover:text-cyber-blue transition-colors duration-[30ms] flex items-center gap-2 xs:gap-3 py-2 xs:py-2.5 active:bg-cyber-blue/10"
              >
                <item.icon size={18} className="xs:w-5 xs:h-5 flex-shrink-0" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

