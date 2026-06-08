import Link from "next/link"
import { NavLinkProps } from '@/types'

const NavLink: React.FC<NavLinkProps> = ({ href, title, style }) => {
  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded sm:text-lg lg:text-md transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#191924] ${style}`}
    >
      {title}
    </Link>
  )
}

export default NavLink


