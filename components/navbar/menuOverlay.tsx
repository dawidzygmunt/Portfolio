import React from 'react'
import NavLink from './NavLink';
import { MenuOverlayProps } from '@/types'

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center text-white'>
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.path} title={link.title} style=''/>
        </li>
      ))}
    </ul>

  )
}

