import React from 'react'

interface Props {
  title: string
  company: string
  date: string
  description: string
  skills: string[]
  src: string
}

export const SingleExperience: React.FC<Props> = (props) => {
  return (
    <div className="border border-blue-500 p-4 m-1 my-4 md:m-4 lg:max-w-[1000px] rounded-lg lg:mx-20 experience-glow">
      <div className="flex">
        <img
          src={props.src}
          alt="company logo"
          className="w-[80px] h-[80px]"
        />
        <div className="ml-2 text-left">
          <span className="font-semibold mb-0 text-xl">{props.title}</span>
          <p className="text-md text-slate-300">{props.company}</p>
          <p className="text-slate-500 text-sm">{props.date}</p>
        </div>
      </div>
      <p className="text-sm md:text-lg text-gray-400 mt-2 mb-3 text-left">
        {props.description}
      </p>
      <div className="flex ">
        <div className="font-bold text-sm md:text-lg mx-4">Skills:</div>
        <div className="flex flex-wrap">
          {props.skills.map((skill) => {
            return (
              <span
                key={skill}
                className="mx-3 ml-0 text-sm text-gray-200 md:text-lg"
              >
                • {skill}{' '}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
