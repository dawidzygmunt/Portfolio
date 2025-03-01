'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { SingleProject } from './singleProject'
import { projects } from '@/data/constants'

// Define Project type
interface ProjectType {
  id: string | number
  title: string
  date: string
  image: string
  tags: string[]
  description: string
  webapp: string
}

export const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const descriptionVariants = {
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
      id="Projects"
      ref={sectionRef}
      className="container mx-auto"
    >
      <div className="text-white px-1 md:px-14 text-center flex flex-col items-center">
        <motion.span
          className="text-center text-5xl md:text-6xl font-extrabold text-white py-6"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Projects
        </motion.span>
        <motion.p
          className="text-slate-300 lg:px-52 text-center text-md md:text-lg pb-7"
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Throughout my career as a full-stack developer, I&apos;ve had the
          pleasure of working on a diverse range of projects that reflect my
          skills and passion for creating innovative solutions. Below are a few
          projects I&apos;ve been involved in
        </motion.p>

        <div className="mx-1">
          <div className="flex flex-wrap justify-center pb-40">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectItemProps {
  project: ProjectType
  index: number
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  const projectRef = useRef(null)
  const isProjectInView = useInView(projectRef, {
    once: true,
    amount: 0.2,
    margin: '-50px 0px',
  })

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.15, // Subtle staggering based on index
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      ref={projectRef}
      variants={projectVariants}
      initial="hidden"
      animate={isProjectInView ? 'visible' : 'hidden'}
      whileHover="hover"
      className="flex"
    >
      <SingleProject
        title={project.title}
        date={project.date}
        src={project.image}
        techstack={project.tags}
        description={project.description}
        webapp={project.webapp}
      />
    </motion.div>
  )
}
