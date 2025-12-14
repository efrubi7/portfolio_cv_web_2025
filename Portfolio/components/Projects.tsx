'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Bot, Brain, Cpu, Code, Database, Zap, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Robot Autonome IA',
    description: 'Robot mobile équipé d\'un système de vision par ordinateur et de navigation autonome utilisant le deep learning.',
    detailedDescription: 'Ce projet consiste en un robot mobile autonome capable de naviguer dans des environnements complexes grâce à un système de vision par ordinateur avancé. Le robot utilise des algorithmes de deep learning pour la reconnaissance d\'objets et la planification de trajectoire. Il intègre également un système de cartographie simultanée (SLAM) pour créer des cartes en temps réel de son environnement.',
    technologies: ['Python', 'ROS', 'TensorFlow', 'OpenCV'],
    icon: Bot,
    color: 'cyber-blue',
    image: '🤖',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Système de Reconnaissance',
    description: 'Modèle d\'IA pour la reconnaissance d\'objets en temps réel avec traitement d\'images avancé.',
    detailedDescription: 'Un système de reconnaissance d\'objets en temps réel utilisant des réseaux de neurones convolutifs (CNN). Le système peut identifier et classifier des objets dans des flux vidéo avec une précision élevée. Il utilise des techniques de traitement d\'image avancées pour améliorer la qualité de la détection même dans des conditions d\'éclairage difficiles.',
    technologies: ['PyTorch', 'Computer Vision', 'Python'],
    icon: Brain,
    color: 'cyber-purple',
    image: '🧠',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Bras Robotique Contrôlé',
    description: 'Bras robotique 6 axes contrôlé par IA avec interface de programmation intuitive et précision millimétrique.',
    detailedDescription: 'Un bras robotique à 6 degrés de liberté contrôlé par intelligence artificielle. Le système permet un contrôle précis avec une interface de programmation intuitive. Le robot peut apprendre de nouvelles tâches grâce à l\'apprentissage par renforcement et atteint une précision millimétrique dans ses mouvements.',
    technologies: ['C++', 'Arduino', 'Machine Learning'],
    icon: Cpu,
    color: 'cyber-pink',
    image: '🦾',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Application Web Full-Stack',
    description: 'Application web moderne avec architecture microservices et interface utilisateur intuitive.',
    detailedDescription: 'Une application web complète développée avec une architecture moderne utilisant des microservices. L\'interface utilisateur est responsive et offre une expérience utilisateur optimale. L\'application intègre des fonctionnalités en temps réel et une gestion d\'état avancée.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    icon: Globe,
    color: 'cyber-blue',
    image: '🌐',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'API REST Performante',
    description: 'API REST scalable avec authentification JWT et gestion de cache avancée.',
    detailedDescription: 'Une API REST haute performance développée avec les meilleures pratiques. Elle inclut un système d\'authentification sécurisé avec JWT, une gestion de cache intelligente, et une documentation complète avec Swagger. L\'API est optimisée pour gérer des milliers de requêtes simultanées.',
    technologies: ['Express.js', 'PostgreSQL', 'Redis', 'JWT'],
    icon: Code,
    color: 'cyber-purple',
    image: '⚡',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Base de Données Distribuée',
    description: 'Système de base de données distribuée avec réplication et haute disponibilité.',
    detailedDescription: 'Un système de base de données distribuée conçu pour la haute disponibilité et la scalabilité horizontale. Le système implémente la réplication multi-maître et la cohérence éventuelle pour garantir des performances optimales même sous charge élevée.',
    technologies: ['PostgreSQL', 'Docker', 'Kubernetes', 'Redis'],
    icon: Database,
    color: 'cyber-pink',
    image: '💾',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Système de Traitement Temps Réel',
    description: 'Pipeline de traitement de données en temps réel avec streaming et analytics.',
    detailedDescription: 'Un système de traitement de données en temps réel capable de traiter des millions d\'événements par seconde. Le système utilise des technologies de streaming comme Apache Kafka et implémente des algorithmes d\'analytics en temps réel pour des insights instantanés.',
    technologies: ['Kafka', 'Spark', 'Python', 'Elasticsearch'],
    icon: Zap,
    color: 'cyber-blue',
    image: '⚡',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    title: 'Plateforme Cloud Native',
    description: 'Application cloud-native avec conteneurisation et orchestration automatisée.',
    detailedDescription: 'Une plateforme cloud-native complète utilisant Docker et Kubernetes pour la conteneurisation et l\'orchestration. L\'application est conçue pour être scalable, résiliente et facilement déployable sur n\'importe quel cloud provider. Elle inclut CI/CD automatisé et monitoring avancé.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    icon: Globe,
    color: 'cyber-purple',
    image: '☁️',
    images: ['image1.jpg', 'image2.jpg'],
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="projects" className="relative py-10 xs:py-12 sm:py-16 md:py-20 3xl:py-28 4xl:py-32 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 3xl:px-12 4xl:px-16">
      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4">
            Mes <span className="text-cyber-pink">projets</span>
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 3xl:w-32 4xl:w-40 h-0.5 xs:h-1 bg-gradient-to-r from-cyber-pink to-cyber-blue mx-auto" />
        </motion.div>

        <div ref={ref} className="relative w-full">
          {/* Carrousel */}
          <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-full max-w-2xl mx-auto px-4 relative"
                >
                  {/* Flèche gauche */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-10 p-3 rounded-full bg-dark-card border border-cyber-blue/50 hover:border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all backdrop-blur-sm shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Flèche droite */}
                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 z-10 p-3 rounded-full bg-dark-card border border-cyber-blue/50 hover:border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all backdrop-blur-sm shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div 
                    className="bg-dark-card rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/50 overflow-hidden transition-all duration-300 group cursor-pointer shadow-2xl"
                    onClick={() => {
                      setSelectedProject(currentProject)
                      setIsModalOpen(true)
                    }}
                  >
                    <div className={`h-48 sm:h-56 ${
                      currentProject.color === 'cyber-blue' ? 'bg-gradient-to-br from-cyber-blue to-cyber-purple' :
                      currentProject.color === 'cyber-purple' ? 'bg-gradient-to-br from-cyber-purple to-cyber-pink' :
                      'bg-gradient-to-br from-cyber-pink to-cyber-blue'
                    } flex items-center justify-center relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                      <currentProject.icon className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10 drop-shadow-2xl" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{currentProject.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{currentProject.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {currentProject.technologies.map((tech) => {
                          const colorClasses = currentProject.color === 'cyber-blue' 
                            ? 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30'
                            : currentProject.color === 'cyber-purple'
                            ? 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30'
                            : 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30'
                          
                          return (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs sm:text-sm border ${colorClasses}`}
                            >
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.1 }}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(currentProject)
                            setIsModalOpen(true)
                          }}
                          className={`flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base text-white rounded-lg hover:opacity-90 transition-all duration-300 ${
                            currentProject.color === 'cyber-blue' ? 'bg-cyber-blue' :
                            currentProject.color === 'cyber-purple' ? 'bg-cyber-purple' :
                            'bg-cyber-pink'
                          }`}
                        >
                          <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                          Voir le projet
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.1 }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base border border-gray-600 text-gray-300 rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300"
                        >
                          <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                          Code
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs en bas */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-cyber-blue w-8' : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setTimeout(() => setSelectedProject(null), 300)
        }}
      />
    </section>
  )
}
