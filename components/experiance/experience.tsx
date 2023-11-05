import React from 'react'
import { experiences } from '@/data/constants'
import { SingleExperiance } from './singleExperiance'




export const Experience = () => {
  return (
    <div id='Experience' className='text-white mt-16 flex flex-col justify-center items-center text-center pt-52 pb-52 container mx-auto p-4'>
      <span className='font-extrabold text-5xl mb-3 md:text-6xl pb-3'>Experience</span>
      <p className='md:text-xl mx-1 sm:mx-20 lg:mx-72 text- text-slate-300 pb-10'>My front-end skills enable me to create intuitive and aesthetically pleasing user interfaces, while my back-end skills allow me to efficiently manage databases and business logic.</p>
      {experiences.map((experience) => (
        <SingleExperiance 
          key={experience.id} 
          title={experience.role} 
          company={experience.company} 
          date={experience.date} 
          description={experience.desc} 
          skills={experience.skills || []}
          src={experience.img}
        />
      ))}
    </div>
  )
}



