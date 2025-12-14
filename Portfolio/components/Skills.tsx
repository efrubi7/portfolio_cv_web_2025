'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Robotique',
    skills: [
      { name: 'ROS (Robot Operating System)', level: 90 },
      { name: 'Arduino / Raspberry Pi', level: 85 },
      { name: 'Contrôle moteurs', level: 80 },
      { name: 'Vision par ordinateur', level: 75 },
    ],
    color: 'cyber-blue',
  },
  {
    category: 'Intelligence Artificielle',
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'TensorFlow / PyTorch', level: 88 },
      { name: 'NLP', level: 75 },
    ],
    color: 'cyber-purple',
  },
  {
    category: 'Développement',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 85 },
      { name: 'TypeScript / React', level: 80 },
      { name: 'Git / DevOps', level: 40 },
    ],
    color: 'cyber-pink',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section id="skills" className="relative py-10 xs:py-12 sm:py-16 md:py-20 3xl:py-28 4xl:py-32 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 3xl:px-12 4xl:px-16 bg-dark-card/30">
      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold mb-2 xs:mb-3 sm:mb-4">
            Mes <span className="text-cyber-purple">compétences</span>
          </h2>
          <div className="w-16 xs:w-20 sm:w-24 3xl:w-32 4xl:w-40 h-0.5 xs:h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-dark-card p-4 sm:p-6 rounded-lg border border-cyber-blue/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                <span className={
                  category.color === 'cyber-blue' ? 'text-cyber-blue' :
                  category.color === 'cyber-purple' ? 'text-cyber-purple' :
                  'text-cyber-pink'
                }>{category.category}</span>
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const colorClass = category.color === 'cyber-blue' ? 'text-cyber-blue' :
                    category.color === 'cyber-purple' ? 'text-cyber-purple' : 'text-cyber-pink'
                  const gradientClass = category.color === 'cyber-blue' ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple' :
                    category.color === 'cyber-purple' ? 'bg-gradient-to-r from-cyber-purple to-cyber-pink' :
                    'bg-gradient-to-r from-cyber-pink to-cyber-blue'
                  
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm sm:text-base text-gray-300 truncate pr-2">{skill.name}</span>
                        <span className={`${colorClass} font-semibold text-sm sm:text-base flex-shrink-0`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-full ${gradientClass}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

