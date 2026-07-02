'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { SkillContainer } from './skillContainer'
import { SingleSkill } from './singleSkill'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { revealHeadingVariants, revealParagraphVariants } from '@/lib/animations'

import { skills } from '@/data/constants'

export const Skills = () => {
  const { ref: sectionRef, isInView } = useRevealOnScroll({ once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const skillContainerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1,
      },
    },
  }

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div
      id="Skills"
      className="text-white mt-1 font-semibold container mx-auto p-4"
      ref={sectionRef}
    >
      <motion.span
        className="text-slate-100 text-5xl md:text-6xl items-center justify-center text-center block mb-3"
        variants={revealHeadingVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Skills
      </motion.span>
      <motion.p
        className="text-center mb-4 sm:px-15 px-5 lg:px-72 text-slate-300 text-md md:text-lg"
        variants={revealParagraphVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        I am an full-stack developer with a passion for creating innovative
        solutions. My skills encompass a wide spectrum of domains, allowing me
        to work efficiently in both front-end and back-end areas.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center justify-center pt-5 sm:px-22"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={skillContainerVariants}
            custom={index}
          >
            <SkillContainer title={skill.title}>
              {skill.skills.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  variants={skillItemVariants}
                  custom={itemIndex}
                >
                  <SingleSkill
                    name={item.name}
                    src={item.image}
                  />
                </motion.div>
              ))}
            </SkillContainer>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
