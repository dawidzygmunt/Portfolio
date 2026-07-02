'use client'

import { SingleTech } from '../projects/singleTech'
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { SafeImage } from '@/components/ui/safeImage'
import { ModalProjectProps } from '@/types'

export const Modal: React.FC<ModalProjectProps> = ({
  src,
  techStack,
  title,
  date,
  description,
  webapp,
  trigger,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <SafeImage
          src={src}
          alt={`${title} project screenshot`}
          width={900}
          height={400}
          className="h-auto w-full"
        />
        <DialogTitle className="text-left text-white text-4xl font-medium pt-2">
          {title}
        </DialogTitle>
        <DialogDescription asChild>
          <span className="text-left text-xs text-slate-300 mx-2 pb-2">
            {date}
          </span>
        </DialogDescription>
        <div className="flex flex-wrap mx-2">
          {techStack.map((tech) => (
            <SingleTech
              key={tech}
              name={tech}
            />
          ))}
        </div>
        <div className="text-left text-xs sm:text-sm lg:text-base text-slate-200 py-2 mx-2 max-h-[18vh] overflow-auto">
          {description}
        </div>
        <div className="flex items-center justify-center pt-3">
          <DialogClose asChild>
            <button
              className="rounded-md font-semibold bg-[#222230] hover:bg-[#393957] hover:opacity-75 transition-all text-white w-full py-4 mx-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#171721]"
            >
              Back
            </button>
          </DialogClose>
          <a
            href={webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md font-semibold bg-purple-500 hover:bg-purple-600 transition-all text-white w-full py-4 mx-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#171721]"
          >
            View Live App
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
