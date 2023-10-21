import React from 'react'

import NavLink from '../Navbar/NavLink'

const Footer = () => {

  const Navlinks = [
    {
      title: "About",
      path: "#about"
    },
    {
      title: "Skills",
      path: "#Skills"
    },
    {
      title: "Experience",
      path: "#Experience"
    },
    {
      title: "Projects",
      path: "#Projects"
    },
    {
      title: "Education",
      path: "#Education"
    }
  ]

  return (
    <footer className='flex flex-col items-center text-white container mx-auto p-4'>
      <h1 className='text-[#af6c45] text-xl'>Dawid Zygmunt</h1>
      <div>
        <ul className='flex mt-4 text-white'>
          {
            Navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} style='hover:text-gray-300' />
              </li>
            ))
          }
        </ul>
      </div>
      <div className='flex'>

      </div>
      <p className='text-center text-white text-xxs'>© 2023 Dawid Zygmunt. All rights reserved.</p>
    </footer>
  )
}

export default Footer