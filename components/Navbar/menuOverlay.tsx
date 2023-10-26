import React from 'react'
import NavLink from './NavLink';

interface MenuOverlayProps {
  links: { title: string; path: string }[];
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center text-white'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} style=''/>
        </li>
      ))}
    </ul>

  )
}

