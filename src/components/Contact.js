import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [message, setMessage] = React.useState('');

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
  //     )
  //     .join('&');
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'test', name, email, message }),
  //   })
  //     .then(() => alert('Message sent!'))
  //     .catch((error) => alert(error));
  // }

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
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
        <form
          ref={form}
          netlify
          name="test"
          onSubmit={sendEmail}
          className="flex flex-col"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Please feel free to send me an email message below and I'll get back
            to you shortly.
          </p>
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
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
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
    </section>
  );
}
