import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MailIcon } from '@heroicons/react/solid';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ch96jiw',
        'template_ol71751',
        form.current,
        '4zq4L9SC32g27hD3Z'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Uh-oh something wrong happened. Sorry!');
        }
      );
  };

  return (
    <section
      id="contact"
      className="lg:h-screen"
      data-aos="fade-right"
      data-aos-delay="600"
    >
      <div className="container px-5 py-10 mx-auto h-screen">
        <div className="text-center mb-20">
          <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Please provide your name, email, and a message and I'll get back to
            you shortly.
          </p>
        </div>
        <div className="container px-5 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col lg:w-2/5"
          >
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
