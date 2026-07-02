'use client'

import React from 'react'

import { Modal } from '../modals/Modal'
import { SingleTech } from './singleTech'
import { SafeImage } from '../ui/safeImage'
import { SingleProjectProps } from '@/types'

export const SingleProject: React.FC<SingleProjectProps> = ({
  src,
  title,
  date,
  techStack,
  description,
  webapp,
}) => {
  return (
    <div className="text-white">
      <Modal
        src={src}
        title={title}
        date={date}
        techStack={techStack}
        description={description}
        webapp={webapp}
        trigger={
          <div
            className={`bg-[#232333] min-w-[220px] max-w-[600px] lg:w-[350px] lg:h-[380px] p-3 rounded-xl text-white sm:m-5 my-5
              transition-all duration-500 btn-modal hover:bg-[#2b2b3f] hover:-translate-y-5 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent relative flex flex-col justify-between`}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${title} project`}
          >
            <div>
              <div className="flex justify-center">
                <SafeImage
                  src={src}
                  alt={`${title} project screenshot`}
                  width={860}
                  height={450}
                  className="rounded-sm"
                />
              </div>
              <div className="flex flex-wrap my-2">
                {techStack.map((tech) => (
                  <SingleTech
                    key={tech}
                    name={tech}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-left text-xl font-semibold">{title}</p>
              <p className="text-left text-xxs text-slate-400">{date}</p>
              <p className="text-left text-xs/4 font-light text-slate-200 line-clamp-5">
                {description}
              </p>
            </div>
          </div>
        }
      />
    </div>
  )
}
