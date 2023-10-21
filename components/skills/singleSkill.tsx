interface SingleSkillProps {
  name: string;
  src: string;
}



export const SingleSkill:React.FC<SingleSkillProps> = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className='text-gray-400 border border-gray-400 p-3 px-6 m-2 flex items-center rounded-xl text-xl font-light'>
        <img src={props.src} className='w-[25px] h-[25px] mr-3'/>
        {props.name}
      </div>
    </div>

  )
}