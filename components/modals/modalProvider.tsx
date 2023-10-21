"use client"
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react'

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}


export const ModalProvider:React.FC<ModalProps> = ({ open, children, onClose }) => {
  

  if (!open) return null;



  

  return (
    <div className=''>
      <div className='modal-style opacity-1 flex items-end'>
        <button
          className='text-white relative mb-4'
          onClick={() => onClose()}
        >
          <XMarkIcon className="w-6 h-6 absolute top-0 right-0" />
        </button>
        <div className='z-50'>
          {children}
        </div>
      </div>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-40'></div>
    </div>
  )
}
