import React from "react";
import { SingleTechProps } from '@/types'

export const SingleTech:React.FC<SingleTechProps> = ({ name }) => {
  return (
    <div className='text-xs sm:text-sm ml-0 m-1 my-0.5 tech-bg text-purple-500 rounded-md px-2 py-0.5'>
      {name}
    </div>
  )
}