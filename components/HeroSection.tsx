"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot3.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">Hi, I&#39;m chito!</h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Web Developer{" "}
            </span>
            from AnHui, China. I love doing different projects and learning every day. Working with new technologies like Vue, React, Next.js,
            Express.js, Typescript, Node.js
          </p>
          <Link
            to="projects"
            className="px-6 py-3 font-semibold bg-teal-600 rounded shadow cursor-pointer text-neutral-100 hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="cursor-pointer animate-bounce hover:text-teal-600" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
