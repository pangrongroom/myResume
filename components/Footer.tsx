import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiGitee } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="flex flex-col p-4 mx-auto text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 cursor-pointer text-neutral-500 dark:text-neutral-100 hover:text-teal-600 hover:dark:text-teal-600">
          <a href="/" className="hover:underline">
            © 2023 WANGCHITO
          </a>
        </div>
        <div className="flex flex-row items-center justify-center mb-1 space-x-2">
          <a
            href="https://github.com/pangrongroom"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://gitee.com/wangchito"
            rel="noreferrer"
            target="_blank"
          >
            <SiGitee
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
