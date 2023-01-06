import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Navbar() {
  return (
    <header
      className="bg-gray-900 md:sticky top-0 z-10"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
        >
          Eugene Kim
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            className="hover:text-white"
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
