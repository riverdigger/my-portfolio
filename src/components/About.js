// src/components/About.js

import React from "react";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { experience } from "../data";

export default function About() {
  return (
    <section id="about" className="body-font /*shadow-inner-md*/ section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center justify-start mb-4">
          <h4 className="text-5xl ml-1 text-gray-900">A Bit&nbsp;<span className="font-bold">About</span>&nbsp;Me</h4>
          <div className="flex-grow border-b border-gray-700 mx-8"></div>
        </div>
        <Fade>
        <div className="flex">
          <div className="flex flex-col justify-center items-center w-1/3 grow">
            <img
              alt="gallery"
              className={"w-full object-cover object-center rounded-lg h-full shadow-md"}
              src="./me.jpg"
            />
          </div>
          <div className="inline flex-col justify-center items-center w-2/3 m-10 text-xl">
            Hi there! My name is Niall Miner and I'm a Website Developer with experience in <span className="inline font-bold">full stack development</span>, <span className="inline font-bold">defect tracking</span>, <span className="inline font-bold">database management</span>, who has releases for websites, mobile applications, and video games. I'm an avid programmer with a degree in Computer Science from Colorado School of Mines who loves rock climbing, guitar, mountain biking, and being creative.
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}
