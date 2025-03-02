'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '@/data/constants'
import { SingleExperience } from './singleExperience'

interface ExperienceType {
  id: string | number
  role: string
  company: string
  date: string
  desc: string
  skills?: string[]
  img: string
}

export const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div
      id="Experience"
      ref={sectionRef}
      className="text-white mt-16 flex flex-col justify-center items-center text-center pt-52 pb-52 container mx-auto p-4 overflow-hidden"
    >
      <motion.span
        className="font-extrabold text-5xl mb-3 md:text-6xl pb-3"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Experience
      </motion.span>
      <motion.p
        className="md:text-xl mx-1 sm:mx-20 lg:mx-72 text- text-slate-300 pb-10"
        variants={paragraphVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        My front-end skills enable me to create intuitive and aesthetically
        pleasing user interfaces, while my back-end skills allow me to
        efficiently manage databases and business logic.
      </motion.p>

      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  )
}

// Separated component for individual experience items with their own viewport detection
const ExperienceItem = ({
  experience,
  index,
}: {
  experience: ExperienceType
  index: number
}) => {
  const itemRef = useRef(null)
  const isItemInView = useInView(itemRef, {
    once: true,
    amount: 0.2,
    margin: '-100px 0px',
  })

  const isEven = index % 2 === 0

  const itemVariants = {
    hidden: {
      x: isEven ? -40 : 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={itemRef}
      variants={itemVariants}
      initial="hidden"
      animate={isItemInView ? 'visible' : 'hidden'}
    >
      <SingleExperience
        title={experience.role}
        company={experience.company}
        date={experience.date}
        description={experience.desc}
        skills={experience.skills || []}
        src={experience.img}
      />
    </motion.div>
  )
}
