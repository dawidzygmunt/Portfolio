import React from 'react'

import { SingleProject } from './singleProject'

import { projects } from '@/data/constants'


export const Projects = () => {
  return (
    <div id='Projects' className='container mx-auto'>
      <div className='text-white px-1 md:px-14 text-center flex flex-col items-center'>
        <span className='text-center text-5xl md:text-6xl font-extrabold text-white py-6'>
          Projects
        </span>
        <p className='text-slate-300 lg:px-52 text-center text-md md:text-lg pb-7'>
        Throughout my career as a full-stack developer, I&apos;ve had the pleasure of working on a diverse range of projects that reflect my skills and passion for creating innovative solutions. Below are a few projects I&apos;ve been involved in
        </p>


        <div className='mx-1'>
          <div className='flex flex-wrap justify-center pb-40'>
            {projects.map((project) => (
              <SingleProject 
              key={project.id} title={project.title} date={project.date} src={project.image} 
              techstack={project.tags} description={project.description}
              />
              ))}
          </div>
        </div>

      </div>
    </div>
  )
}
