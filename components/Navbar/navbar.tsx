"use client"
import Link from "next/link"
import NavLink from "./NavLink"
import React from "react"
import { useState } from "react"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { MenuOverlay } from "./menuOverlay"


const Navlinks = [
  {
    title: "About",
    path: "#About"
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
    title: "Contact",
    path: "#Contact"
  }
]




const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)



  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#191924]">
      <div className="width-full flex items-center justify-between mx-auto">
        <Link href={'/'} className="text-3xl text-white p-3 mx-4">Logo</Link>
        <div className="mobile-menu block md:hidden">
          {
            navbarOpen ? (
              <button
                className="m-5 p-2 px-3 text-slate-200 border border-slate-200 rounded-lg hover:text-white hover:border-white"
                onClick={() => { setNavbarOpen(false) }}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            ) : (
              <button className="m-5 p-2 px-3 text-slate-200 border border-slate-200 rounded hover:text-white hover:border-white" onClick={() => { setNavbarOpen(true) }}>
                <Bars3Icon className="w-6 h-6" />
              </button>
            )
          }
        </div>
        <div className="hidden md:block mr-10">
          <ul className="flex flex-row px-6 text-[#ADB7BE]">
            {
              Navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} style='hover:text-white' />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={Navlinks}/> : null}
    </nav>
  )
}

export default Navbar