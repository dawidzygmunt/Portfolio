'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

export const HeroSection = () => {
  // Animation variants
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: {
      scale: 0.98,
    },
  }

  return (
    <div
      id="About"
      className="pb-52 lg:mb-10 pt-24 xl:pt-0 w-full container mx-auto p-4 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          className="col-span-8 lg:col-span-7 place-self-center lg:place-self-end text-center px-4 lg:text-left"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-white text-6xl mb-4 lg:text-8xl font-extrabold sm:mt-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-transparent bg-clip-text text-10xl bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hello, I&apos;m
            </motion.span>
            <br />
            <div className="specjalna min-h-[75px] sm:min-h-0">
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
                className=""
                repeat={Infinity}
              />
            </div>
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.p
              className="text-[#ADB7BE] text-lg lg:text-2xl mb-6 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I am a programming enthusiast with extensive knowledge and
              experience in creating innovative technological solutions. My
              approach to coding is based on a focus on quality, scalability,
              and efficiency.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center sm:space-x-5 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a
                href="Dawid_Zygmunt_CV.pdf"
                download
              >
                <motion.button
                  className="px-8 py-3 rounded-full bg-white hover:bg-slate-200 border border-white transition-all 
                text-black text-2xl w-[270px] my-2"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Check Resume
                </motion.button>
              </a>
              <a href="#Projects">
                <motion.button
                  className="px-10 py-3 rounded-full bg-transparent hover:bg-slate-800 transition-all 
                text-white border border-white text-2xl w-[270px] my-2"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  My Projects
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: 'spring',
            stiffness: 100,
          }}
          className="col-span-4 lg:col-span-5 mt-8 lg:pt-0 flex lg:block justify-center"
        >
          <Image
            src="/images/hero-Photo.png"
            width={500}
            height={500}
            alt="Hero image"
            className="rounded-full xl:translate-y-14 float-right"
          />
        </motion.div>
      </div>
    </div>
  )
}
