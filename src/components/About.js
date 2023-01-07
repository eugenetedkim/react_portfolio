import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center lg:h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pb-32 md:pb-24 lg:pr-24 md:pr-24 flex flex-col items-center mb-16 md:mb-0">
          <div>
            <p
              className="text-left mb-4 text-green-500 lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="1800"
            >
              Hi, my name is
            </p>
            <h1
              className="title-font text-6xl mb-4 font-medium text-white"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Eugene Kim
              <span
                className="title-font text-6xl mb-4 font-medium text-white"
                data-aos="fade-left"
                data-aos-delay="1800"
              >
                .
              </span>
            </h1>
            <h1
              className="title-font text-6xl mb-4 font-medium text-gray-300"
              data-aos="fade-right"
              data-aos-delay="1800"
            >
              A builder of modern web applications.
            </h1>
            <p
              className="leading-relaxed lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="1800"
            >
              Currently, I'm a software engineer at{' '}
              <a
                className="text-green-500 hover:underline visited:text-purple-600"
                href="https://www.fulgentgenetics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fulgent Genetics
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
