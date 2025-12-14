'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react'

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:flore@example.com', color: 'cyber-blue' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'cyber-purple' },
  { icon: Github, label: 'GitHub', href: '#', color: 'cyber-pink' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    alert('Message envoyé ! (Fonctionnalité à implémenter)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-10 xs:py-12 sm:py-16 md:py-20 3xl:py-28 4xl:py-32 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 3xl:px-12 4xl:px-16 bg-dark-card/30">
      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4">
            Me <span className="text-cyber-blue">contacter</span>
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 3xl:w-32 4xl:w-40 h-0.5 xs:h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8" />
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg 3xl:text-xl 4xl:text-2xl text-gray-300 max-w-2xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto px-2 xs:px-3 sm:px-4 leading-relaxed">
            Intéressé par un projet ? N&apos;hésitez pas à me contacter. Je serais ravie d&apos;échanger avec vous !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-card p-4 sm:p-6 md:p-8 rounded-lg border border-cyber-blue/20"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-cyber-blue flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Envoyez un message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-dark-bg border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-all duration-[30ms]"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-dark-bg border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-all duration-[30ms]"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-dark-bg border border-cyber-blue/30 rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-all duration-[30ms] resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-[30ms]"
              >
                <Send size={18} className="sm:w-5 sm:h-5" />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Réseaux sociaux</h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => {
                  const borderClass = social.color === 'cyber-blue' 
                    ? 'border-cyber-blue/20 hover:border-cyber-blue/50'
                    : social.color === 'cyber-purple'
                    ? 'border-cyber-purple/20 hover:border-cyber-purple/50'
                    : 'border-cyber-pink/20 hover:border-cyber-pink/50'
                  
                  const bgClass = social.color === 'cyber-blue'
                    ? 'bg-cyber-blue/20 group-hover:bg-cyber-blue/30'
                    : social.color === 'cyber-purple'
                    ? 'bg-cyber-purple/20 group-hover:bg-cyber-purple/30'
                    : 'bg-cyber-pink/20 group-hover:bg-cyber-pink/30'
                  
                  const iconClass = social.color === 'cyber-blue'
                    ? 'text-cyber-blue'
                    : social.color === 'cyber-purple'
                    ? 'text-cyber-purple'
                    : 'text-cyber-pink'
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-card border ${borderClass} rounded-lg transition-all duration-[30ms] group`}
                    >
                      <div className={`p-2 sm:p-3 ${bgClass} rounded-lg transition-all duration-[30ms] flex-shrink-0`}>
                        <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconClass}`} />
                      </div>
                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-[30ms] font-medium">
                      {social.label}
                    </span>
                  </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="bg-dark-card p-4 sm:p-6 rounded-lg border border-cyber-blue/20">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Informations</h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <p>📍 Disponible pour des projets freelance</p>
                <p>🤖 Spécialisée en robotique et IA</p>
                <p>💡 Ouverte aux collaborations innovantes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-16 pt-8 border-t border-cyber-blue/20"
      >
        <p className="text-gray-400">
          © 2025 Flore. Portfolio créé avec passion pour la robotique et l&apos;IA.
        </p>
      </motion.div>
    </section>
  )
}

