import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center lg:h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Eugene Kim.
            <br className="hidden lg:inline-block" />I love building web
            applications.
          </h1>
          <p className="mb-8 leading-relaxed">
            Currently, I'm a software engineer at{' '}
            <a
              className="text-green-500 hover:underline visited:text-purple-600"
              href="https://www.fulgentgenetics.com/"
              rel="noopener noreferrer"
            >
              Fulgent Genetics
            </a>
            .
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
