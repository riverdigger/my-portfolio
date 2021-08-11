// src/components/Contact.js

import React from "react";
import Fade from 'react-reveal/Fade';

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative section-p bg-gray-900">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="45" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="#e5e7eb" stroke="#e5e7eb"></path>
      </svg>
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex items-center sm:justify-start justify-between mb-4">
          <h4 className="text-5xl ml-1 text-gray-200"><span className="hidden sm:inline">Get in&nbsp;</span><span className="font-bold">Contact</span></h4>
          <div className="flex-grow border-b border-gray-700 mx-8 hidden sm:block"></div>
          <div className="transform skew-x-12 bg-red-400 w-2">&nbsp;</div>
          <div className="transform skew-x-12 bg-green-400 w-2">&nbsp;</div>
          <div className="transform skew-x-12 bg-blue-400 w-2">&nbsp;</div>
        </div>
        <Fade>
        <div className="md:w-1/2 w-full flex flex-col text-center m-auto md:py-8 mt-8 md:mt-0">
          <p className="leading-relaxed mb-5 text-gray-200 text-xl">
          I'd love to have a conversation about the projects you're working on and would love to know if you'd like to work on any with me.</p>
          <p className="leading-relaxed mb-5 text-gray-200 text-xl">Please reach out and I'll get back to you soon.
          </p>
          <a
            href="mailto:niallminer@gmail.com?"
            target="_blank"
            className="gradient-sm p-4 text-white rounded text-2xl">
            Email
          </a>
        </div>
        {/*<form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col m-auto md:py-8 mt-8 md:mt-0">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white gradient border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
            Submit
          </button>
        </form>*/}
        </Fade>
      </div>
    </section>
  );
}
