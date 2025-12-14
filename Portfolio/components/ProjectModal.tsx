'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
  detailedDescription?: string
  images?: string[]
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  const colorClasses = project.color === 'cyber-blue' 
    ? 'border-cyber-blue bg-cyber-blue/10'
    : project.color === 'cyber-purple'
    ? 'border-cyber-purple bg-cyber-purple/10'
    : 'border-cyber-pink bg-cyber-pink/10'

  const buttonColorClass = project.color === 'cyber-blue' 
    ? 'bg-cyber-blue hover:bg-cyber-blue/80'
    : project.color === 'cyber-purple'
    ? 'bg-cyber-purple hover:bg-cyber-purple/80'
    : 'bg-cyber-pink hover:bg-cyber-pink/80'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-[95vw] sm:w-[90vw] max-w-4xl h-[95vh] sm:h-[90vh] max-h-[95vh] sm:max-h-[90vh] pointer-events-auto overflow-hidden m-4 sm:m-0"
            >
            <div className={`relative w-full h-full bg-dark-card rounded-lg border-2 ${colorClasses} overflow-y-auto`}>
              {/* Header */}
              <div className="sticky top-0 bg-dark-card/95 backdrop-blur-sm border-b border-cyber-blue/20 p-4 sm:p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  <project.icon className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 ${
                    project.color === 'cyber-blue' ? 'text-cyber-blue' :
                    project.color === 'cyber-purple' ? 'text-cyber-purple' :
                    'text-cyber-pink'
                  }`} />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">{project.title}</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                         className="text-gray-400 hover:text-white transition-colors duration-[30ms]"
                >
                  <X size={28} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyber-blue mb-2 sm:mb-3">Description</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {project.detailedDescription || project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyber-purple mb-2 sm:mb-3">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const techColorClasses = project.color === 'cyber-blue' 
                        ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30'
                        : project.color === 'cyber-purple'
                        ? 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30'
                        : 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30'
                      
                      return (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-full text-sm border ${techColorClasses}`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Images */}
                {project.images && project.images.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyber-pink mb-2 sm:mb-3">Galerie</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative aspect-video rounded-lg overflow-hidden border border-cyber-blue/20"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              Image {index + 1} - {project.title}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-dark-card/95 backdrop-blur-sm border-t border-cyber-blue/20 p-4 sm:p-6 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                         className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all duration-[30ms] text-sm sm:text-base"
                >
                  Fermer
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-white rounded-lg transition-all text-sm sm:text-base ${buttonColorClass}`}
                >
                  Voir le code source
                </motion.button>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

