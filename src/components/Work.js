// src/components/Work.js

import React from "react";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { CodeIcon, DeviceMobileIcon, StarIcon, MusicNoteIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { experience } from "../data";

export default function Work() {
  return (
    <section id="work" className="bg-gray-200 body-font section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center sm:justify-start justify-between mb-4">
          <h4 className="text-5xl ml-1 text-gray-900"><span className="font-bold">Work</span>&nbsp;<span className="hidden sm:inline">Experience</span></h4>
          <div className="flex-grow border-b border-gray-700 mx-8 hidden sm:block"></div>
          <div className="transform skew-x-12 bg-red-400 w-2 sm:mr-1 mr-0">&nbsp;</div>
          <div className="transform skew-x-12 bg-green-400 w-2 sm:mr-1 mr-0">&nbsp;</div>
          <div className="transform skew-x-12 bg-blue-400 w-2">&nbsp;</div>
        </div>
        <div className="flex flex-col text-white /*bg-white rounded-lg*/">
          {experience.map((project, i) => (
            <div className="flex items-center flex-col md:flex-row relative md:h-96 bg-white md:bg-transparent rounded-lg md:rounded-none md:my-14 mb-14">
            <Fade>
              <a
                href={project.link}
                target="_blank"
                className={"md:w-3/5 w-full md:absolute shadow-lg h-full mx-2" + (i % 2 == 0 ? " md:right-14" : " md:left-12 ")}>
                  <img
                    alt="gallery"
                    className={"w-full object-cover object-center md:rounded-lg rounded-t-lg h-full md:inset-0 md:absolute"}
                    src={project.image}
                  />
                <div className={"w-full rounded-lg h-full bg-white opacity-70 hover:opacity-0 inset-0 absolute"}></div>
              </a>
              </Fade>
              <div className={"flex flex-col items-center justify-center w-full xl:w-2/5 md:w-7/12 h-full md:absolute grow z-10 md:z-auto bg-white md:bg-transparent rounded-lg md:rounded-none" + (i % 2 == 0 ? " md:left-12" : " md:right-14")}>
                <div className="w-full flex items-end justify-between bg-white md:bg-transparent rounded-t-lg md:rounded-none mb-2 p-2 md:mb-0 md:p-0 flex-wrap xl:flex-nowrap">
                  <h1 className="xl:text-3xl text-2xl font-bold text-gray-900">
                    <FontAwesomeIcon icon={project.icon} className="mr-2" />
                    {project.title}
                  </h1>
                  <h1 className="text-xl italic text-gray-900">{project.subtitle}</h1>
                </div>
                <Pulse>
                <ul className={"text-left text-white rounded-md px-4 py-2 shadow-md w-full" + (i % 4 == 0 ? " bg-red-400" : "" ) + (i % 4 == 1 ? " bg-green-500" : "" ) + (i % 4 == 2 ? " bg-indigo-500" : "" ) + (i % 4 == 3 ? " bg-yellow-500" : "" )}>
                {project.description.map((description) => (
                  <li><span className={"mr-2 font-bold" + (i % 4 == 0 ? " text-red-600" : "" ) + (i % 4 == 1 ? " text-green-700" : "" ) + (i % 4 == 2 ? " text-indigo-700" : "" ) + (i % 4 == 3 ? " text-yellow-700" : "" )}>></span>{description}</li>
                ))}
                </ul>
                </Pulse>
                <div className="flex w-full justify-center items-center my-2 rounded-b-lg bg-white md:rounded-none md:bg-transparent">
                  {project.tags.map((tag) => (
                    <div className="text-gray-900 w-1/4 mx-2">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
