"use client"
import React from 'react'

import { SingleTech } from '../projects/singleTech';
import { ModalProvider } from './modalProvider';





interface SingleProjectProps {
  src: string;
  techstack: string[];
  title: string;
  date: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}



export const Modal: React.FC<SingleProjectProps> = (props) => {


  return(
    <div>
      <ModalProvider 
        open={props.isOpen}
        onClose={() => props.onClose()}
      >
        <img src={props.src} alt="project image" className='mt-4' />
        <div className='text-left text-white text-4xl font-medium m-2 mb-0'>
          {props.title}
        </div>
        <div className='text-left text-xs text-slate-300 mx-2 mb-2'>
          {props.date}
        </div>
        <div className='flex flex-wrap mx-2'>
          {props.techstack.map((tech, index) => (
            <SingleTech key={index} name={tech} />
          ))}
        </div>
        <div className='text-left text-md text-slate-200 mb-5 my-2 mx-2'>
          {props.description}
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='rounded-md font-semibold bg-[#222230] hover:bg-[#393957] hover:opacity-75 transition-all text-white w-full py-4 mx-2'
            onClick={props.onClose}
          >
            Back
          </button>
          <button className='rounded-md font-semibold bg-purple-500 hover:bg-purple-600 transition-all text-white w-full py-4 mx-2'>View Live App</button>
        </div>
      </ModalProvider>
    </div>
  )
}
