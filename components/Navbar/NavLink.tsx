import Link from "next/link"
import { NavLinkProps } from '@/types'

const NavLink: React.FC<NavLinkProps> = ({ href, title, style }) => {
  return (
    <Link 
      href={href}
      className={`block px-4 py-2 rounded sm:text-lg lg:text-md transition-all ${style}`}
    >
      {title}
    </Link>
  )
}

export default NavLink


