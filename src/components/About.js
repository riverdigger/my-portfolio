// src/components/About.js

import React from "react";
import {Animated} from "react-animated-css";
import { VolumeUpIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { MusicNoteIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function About() {
  return (
    <section id="about" className="h-screen gradient">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-center h-full">
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-start text-left">
        <Animated animationIn="fadeInUp" isVisible={true}>
          <p className="text-2xl font-medium text-white bg-white bg-opacity-20 transform -skew-x-12 px-3">// Hi I'm</p>
        </Animated>
          <div className="flex flex-col justify-start items-center my-7">
            <p className="italic font-bold sm:text-5x; text-9xl mx-4 font-large text-white">NIALL MINER</p>
            {/*<div className="flex items-center justify-between">
              <div className="flex flex-row items-center justify-start italic text-white mr-7">
                <CodeIcon className="w-10" />
                <h4 className="text-2xl ml-1">Websites</h4>
              </div>
              <div className="flex flex-row items-center justify-start italic text-white mr-7">
                <DeviceMobileIcon className="w-10" />
                <h4 className="text-2xl ">Mobile Apps</h4>
              </div>
              <div className="flex flex-row items-center justify-start italic text-white">
                <StarIcon className="w-10" />
                <h4 className="text-2xl ">Video Games</h4>
              </div>
            </div>*/}
          </div>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <p className="text-2xl max-w-3xl mb-4 font-medium text-white bg-white bg-opacity-20 transform -skew-x-12 px-3">// Software developer with experience in full stack development, defect tracking, database management</p>
          </Animated>
          <Animated animationIn="fadeInUp" isVisible={true}>
          <div className="flex justify-center shadow-md">
            <a
              href="#contact"
              className="inline-flex items-center text-white bg-gray-900 bg-opacity-20 transform -skew-x-12 px-3 hover:bg-gray-800 text-lg">
              Let's Build Something
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}
