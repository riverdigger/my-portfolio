// src/components/Navbar.js

import { PaperClipIcon } from "@heroicons/react/solid";
import {Animated} from "react-animated-css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="fixed left-0 bottom-0 z-10 text-white m-4 flex flex-col items-center justify-end">
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <a
            href="https://github.com/riverdigger"
            target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" className="hover:text-black mb-2" />
          </a>
        </Animated>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <a
            href="https://www.linkedin.com/in/niallminer/"
            target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-blue-400 mb-2" />
          </a>
        </Animated>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <a
            href="https://www.instagram.com/niallmino/"
            target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-pink-400 mb-2" />
          </a>
        </Animated>
        <Animated animationIn="fadeInLeft" isVisible={true}>
          <a
            href="https://open.spotify.com/artist/4vtCqwB29gswN0fEKFRdCA?si=EXm50OzNQFus1d7Dd4pznA&dl_branch=1"
            target="_blank">
            <FontAwesomeIcon icon={faSpotify} size="2x" className="hover:text-green-400 mb-2" />
          </a>
        </Animated>
      </div>
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
          href="./resume_niall_miner.pdf"
          target="_blank"
          className="text-white inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0 shadow-md">
          Resume
          <PaperClipIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
