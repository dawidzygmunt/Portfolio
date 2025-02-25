'use client'

import { SingleTech } from '../projects/singleTech'
import { ModalProvider } from './modalProvider'
import Image from 'next/image'

interface SingleProjectProps {
  src: string
  techStack: string[]
  title: string
  date: string
  description: string
  isOpen: boolean
  webApp: string
  onClose: () => void
}

export const Modal: React.FC<SingleProjectProps> = ({
  src,
  techStack,
  title,
  date,
  description,
  isOpen,
  webApp,
  onClose,
}) => {
  return (
    <>
      <ModalProvider
        open={isOpen}
        onClose={() => onClose()}
      >
        <div>
          <Image
            src={`/${src}`}
            alt="project image"
            className="mt-4"
            width={900}
            height={400}
          />
          <h1 className="text-left text-white text-4xl font-medium m-2 mb-0">
            {title}
          </h1>
          <span className="text-left text-xs text-slate-300 mx-2 mb-2">
            {date}
          </span>
          <div className="flex flex-wrap mx-2">
            {techStack.map((tech, index) => (
              <SingleTech
                key={index}
                name={tech}
              />
            ))}
          </div>
          <div className="text-left text-xs sm:text-sm lg:text-base text-slate-200 mb-5 my-2 mx-2 max-h-[18vh] overflow-auto">
            {description}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="rounded-md font-semibold bg-[#222230] hover:bg-[#393957] hover:opacity-75 transition-all text-white w-full py-4 mx-2"
              onClick={onClose}
            >
              Back
            </button>
            <button
              className="rounded-md font-semibold bg-purple-500 hover:bg-purple-600 transition-all text-white w-full py-4 mx-2"
              onClick={() => window.open(webApp)}
            >
              View Live App
            </button>
          </div>
        </div>
      </ModalProvider>
    </>
  )
}
