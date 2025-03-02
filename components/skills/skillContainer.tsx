import React from 'react'

interface SkillContainerProps {
  title: string
  children: React.ReactNode
}

export const SkillContainer: React.FC<SkillContainerProps> = (props) => {
  return (
    <div className="border border-[#854ce6] rounded-xl bg-[#171721] max-w-[550px] min-h-[300px] m-0 my-4 sm:m-4 p-6 pt-4 skills-glow">
      <div className="text-gray-300 text-3xl text-center mb-3">
        {props.title}
      </div>
      <div className="flex whitespace-nowrap flex-wrap items-center justify-center mt-2">
        {props.children}
      </div>
    </div>
  )
}
