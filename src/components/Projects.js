// src/components/Projects.js

import React from "react";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { CodeIcon, DeviceMobileIcon, StarIcon, MusicNoteIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-200 body-font shadow-inner-md section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center justify-start mb-4">
          <h4 className="text-5xl ml-1 text-gray-900">Work</h4>
          <div className="flex-grow border-b border-gray-700 mx-8"></div>
        </div>
        <div className="flex flex-col text-white /*bg-white rounded-lg*/">
          {projects.map((project, i) => (
            <div className="flex items-center relative h-96 my-14">
            <Fade>
              <a
                href={project.link}
                target="_blank"
                className={"w-3/5 absolute shadow-lg h-full mx-2" + (i % 2 == 0 ? " right-14" : " left-12 ")}>
                  <img
                    alt="gallery"
                    className={"w-full object-cover object-center rounded-lg h-full inset-0 absolute"}
                    src={project.image}
                  />
                <div className={"w-full rounded-lg h-full bg-white opacity-70 hover:opacity-0 inset-0 absolute"}></div>
              </a>
              </Fade>
              <div className={"flex flex-col items-center justify-center w-2/5 h-full absolute grow" + (i % 2 == 0 ? " left-12" : " right-14")}>
              <Pulse>
                <div className="w-full flex items-end justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">
                    <FontAwesomeIcon icon={project.icon} className="mr-2" />
                    {project.title}
                  </h1>
                  <h1 className="text-xl italic text-gray-900">{project.subtitle}</h1>
                </div>
                <ul className={"text-left text-white rounded-md px-4 py-2 shadow-md w-full" + (i % 4 == 0 ? " bg-red-400" : "" ) + (i % 4 == 1 ? " bg-green-500" : "" ) + (i % 4 == 2 ? " bg-indigo-500" : "" ) + (i % 4 == 3 ? " bg-yellow-500" : "" )}>
                {project.description.map((description) => (
                  <li><span className={"mr-2 font-bold" + (i % 4 == 0 ? " text-red-600" : "" ) + (i % 4 == 1 ? " text-green-700" : "" ) + (i % 4 == 2 ? " text-indigo-700" : "" ) + (i % 4 == 3 ? " text-yellow-700" : "" )}>></span>{description}</li>
                ))}
                </ul>
                <div className="flex w-full justify-center items-center mt-2">
                  {project.tags.map((tag) => (
                    <div className="text-gray-900 w-1/4 mx-2">{tag}</div>
                  ))}
                </div>
                </Pulse>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
