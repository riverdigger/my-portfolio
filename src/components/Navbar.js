// src/components/Navbar.js

import { PaperClipIcon } from "@heroicons/react/solid";
import {Animated} from "react-animated-css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from "../data";

export default function Navbar() {
  function addBounce(e) {
    e.target.classList.add('animate-bounce');
    // e.target.childNodes[0].classList.add('animate-bounce');
  }
  function removeBounce(e) {
    e.target.classList.remove('animate-bounce');
    // e.target.childNodes[0].classList.remove('animate-bounce');
  }
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <ul className="fixed left-0 top-0 h-screen z-10 m-4 flex flex-col items-center justify-center">
        <li className="mb-4 text-white">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="h-6 md:border-l md:border-white"></div>
          </Animated>
        </li>
        {socials.map((social) => (
          <li className={"hover:" + social.color + " mb-4 text-white"}>
            <Animated animationIn="fadeInLeft" isVisible={true}>
              <a
                href={social.href}
                target="_blank"
                >
                <FontAwesomeIcon icon={social.icon} size="2x" className="shadow-svg" />
              </a>
            </Animated>
          </li>
        ))}
        <li className="mb-4 text-white">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="h-6 md:border-l md:border-white"></div>
          </Animated>
        </li>
      </ul>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about">
          <img
          className="object-cover object-center rounded"
          alt="niall miner"
          src="./logo_small.png"
          />
        </a>
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
          href="./resume_niall_miner.pdf"
          target="_blank"
          className="inline-flex items-center text-white bg-green-400 transform -skew-x-12 px-3 hover:bg-green-500 text-lg">
          Resume
          <PaperClipIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
