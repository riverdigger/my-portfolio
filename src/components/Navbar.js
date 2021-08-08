// src/components/Navbar.js

import { PaperClipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about">
          <img
          className="object-cover object-center rounded"
          alt="niall miner"
          src="./logo_small.png"
          />
        </a>
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Niall Miner
          </a>
        </a> */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gray-400">
            Work
          </a>
          <a href="#skills" className="mr-5 hover:text-gray-400">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-400">
            Projects
          </a>
        </nav>
        <a
          href="#contact"
          className="text-white inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
          Resume
          <PaperClipIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
