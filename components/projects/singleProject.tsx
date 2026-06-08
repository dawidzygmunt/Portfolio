'use client'

import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Modal } from '../modals/Modal'
import { SingleTech } from './singleTech'
import Image from 'next/image'
import { SingleProjectProps } from '@/types'

export const SingleProject: React.FC<SingleProjectProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [techStackHeight, setTechStackHeight] = useState(0)

  useEffect(() => {
    const getTechStackHeight = () => {
      const height = containerRef.current?.clientHeight
      if (height) {
        setTechStackHeight(height)
      }
    }

    getTechStackHeight()
  }, [techStackHeight])

  return (
    <div className="text-white">
      {isModalOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <Modal
            src={props.src}
            title={props.title}
            date={props.date}
            techStack={props.techStack}
            description={props.description}
            isOpen={isModalOpen}
            webApp={props.webapp}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body
        )}

      <div
        className={`bg-[#232333] min-w-[220px] max-w-[600px] lg:w-[350px] lg:h-[380px] p-3 rounded-xl text-white sm:m-5 my-5
          transition-all duration-500 btn-modal hover:bg-[#2b2b3f] hover:-translate-y-5 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent relative flex flex-col justify-between`}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsModalOpen(true); } }}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${props.title} project`}
      >
        <div>
          <div className="flex justify-center">
            <Image
              src={props.src.startsWith('/') ? props.src : `/${props.src}`}
              alt={`${props.title} project screenshot`}
              width={860}
              height={450}
              className="rounded-sm"
              onError={(e) => { e.currentTarget.src = '/images/fallback.png' }}
            />
          </div>
          <div
            className="flex flex-wrap my-2"
            ref={containerRef}
          >
            {props.techStack.map((tech, index) => (
              <SingleTech
                key={index}
                name={tech}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-left text-xl font-semibold">{props.title}</p>
          <p className="text-left text-xxs text-slate-400">{props.date}</p>
          <p
            className={`text-left text-xs/4 font-light text-slate-200 ${
              techStackHeight < 50 ? 'line-clamp-6' : 'line-clamp-5'
            }`}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}
