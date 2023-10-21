import React from "react";

interface SingleTechProps {
  name: string;
}


export const SingleTech:React.FC<SingleTechProps> = (props) => {
  return (
    <div className='text-sm ml-0 m-1 my-0.5 tech-bg text-purple-500 rounded-md px-2 py-0.5'>
      {props.name}
    </div>
  )
}