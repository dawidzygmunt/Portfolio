"use client"
import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'


export const HeroSection = () => {
  return (
    <div id='About' className='pb-52 lg:mb-10 pt-24 xl:pt-0 w-full container mx-auto p-4 '>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-8 lg:col-span-7 place-self-center lg:place-self-end text-center px-4 lg:text-left'>
          <h1 className='text-white text-6xl mb-4 lg:text-8xl font-extrabold sm:mt-4'>
            <span className='text-transparent bg-clip-text text-10xl bg-gradient-to-r from-purple-400 to-pink-600 '>
              Hello, I&apos;m
            </span>
            <br />
            <div className='specjalna min-h-[75px] sm:min-h-0'>
              <TypeAnimation
                sequence={[
                  'Dawid Zygmunt 👋',
                  2000,
                  'Fullstack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '0.6em', display: 'inline-block' }}
                className=''
                repeat={Infinity}
              />
            </div>

          </h1>
          <p className='text-[#ADB7BE] text-lg lg:text-2xl mb-6 mt-5'>
            I am a programming enthusiast with extensive knowledge and experience in creating innovative technological solutions. My approach to coding is based on a focus on quality, scalability, and efficiency.
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start'>
            <a href="Dawid_Zygmunt_CV.pdf" download>
              <button
                className='px-10 py-4 rounded-full mr-4 bg-white hover:bg-slate-200 border border-white transition-all 
                text-black text-2xl w-[270px] my-2'

              >
                Check Resume
              </button>
            </a>
            <a href="#Projects">
              <button
                className='px-10 py-4 rounded-full bg-transparent hover:bg-slate-800 transition-all 
              text-white border border-white  text-2xl w-[270px] my-2'
              >
                My Projects
              </button>
            </a>
          </div>
        </div>
        <div className='col-span-4 lg:col-span-5 mt-8 lg:pt-0 flex lg:block justify-center'>
          <Image
            src="/images/hero Photo.png"
            width={500}
            height={500}
            alt="Hero image"
            className='rounded-full xl:translate-y-14 float-right '
          />
          {/* <img src="images/hero Photo.png" alt="Hero photo" className='rounded-full scale-50 lg:scale-75 translate-y-11 ' /> */}
        </div>
      </div>
    </div>
  )
}
