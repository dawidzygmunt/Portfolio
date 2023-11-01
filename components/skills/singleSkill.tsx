interface SingleSkillProps {
  name: string;
  src: string;
}



export const SingleSkill:React.FC<SingleSkillProps> = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className='text-gray-400 border border-gray-400 p-3 sm:px-5 px-3 m-2 sm:m-2 flex items-center rounded-xl 
          sm:text-xl font-light '
      >
        <img src={props.src} className='w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] mr-3'/>
        {props.name}
      </div>
    </div>

  )
}