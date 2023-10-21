"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'


export const HeroSection = () => {
  return (
    <div id='About' className='mb-5 h-screen lg:mb-10 w-full pt-36 container p-4 mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center lg:place-self-end text-center lg:text-left'>
          <h1 className='text-white text-6xl mb-4 lg:text-8xl font-extrabold sm:mt-4'>
            <span className='text-transparent bg-clip-text text-10xl bg-gradient-to-r from-purple-400 to-pink-600 '>
              Hello, I&apos;m
            </span>
            <br />
            <div className='specjalna'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Dawid 👌',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Frontend Developer',
                  2000,
                  'Fullstack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.6em', display: 'inline-block' }}
                className='specjalna'
                repeat={Infinity}
              />
            </div>

          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-2xl mb-6 mt-5'>
          Jestem pasjonatem programowania z szeroką wiedzą i doświadczeniem w tworzeniu innowacyjnych rozwiązań technologicznych. Moje podejście do kodowania opiera się na dbałości o jakość, skalowalność i wydajność.
          </p>
          <button 
            className='px-12 py-4 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 transition-all 
              text-black text-2xl'
          >
            Hire Me
          </button>
          <button 
            className='px-12 py-4 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 transition-all 
              text-white border border-white mt-3 text-2xl'
          >
            My Projects
          </button>
        </div>
        <div className='col-span-5 items-center place-self-center mt-4 lg:mt-0'>
          <Image 
            src='/images/hero.png'
            alt='hero image'
            width={300}
            height={300}
          />

        </div>
      </div>
    </div>
  )
}
