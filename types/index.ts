// Project types
export interface ProjectType {
  id: string | number
  title: string
  date: string
  image: string
  tags: string[]
  description: string
  webapp: string
}

export interface SingleProjectProps {
  src: string
  techStack: string[]
  title: string
  date: string
  description: string
  webapp: string
}

export interface ModalProjectProps {
  src: string
  techStack: string[]
  title: string
  date: string
  description: string
  isOpen: boolean
  webApp: string
  onClose: () => void
}

export interface ProjectItemProps {
  project: ProjectType
  index: number
}

export interface SingleTechProps {
  name: string
}

// Experience types
export interface ExperienceType {
  id: string | number
  role: string
  company: string
  date: string
  desc: string
  skills?: string[]
  img: string
}

export interface SingleExperienceProps {
  title: string
  company: string
  date: string
  description: string
  skills: string[]
  src: string
}

// Skills types
export interface SingleSkillProps {
  name: string
  src: string
}

export interface SkillContainerProps {
  title: string
  children: React.ReactNode
}

// Navigation types
export interface NavLinkProps {
  href: string
  title: string
  style: string
}

export interface MenuOverlayProps {
  links: { title: string; path: string }[]
}

// Modal types
export interface ModalProviderProps {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}