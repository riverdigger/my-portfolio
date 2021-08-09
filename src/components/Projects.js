// src/components/Projects.js

import React from "react";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { CodeIcon, DeviceMobileIcon, StarIcon, MusicNoteIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-200 body-font shadow-inner-md">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center justify-center mb-4 border-b border-gray-700">
          <h4 className="text-5xl ml-1 text-gray-900">WORK EXPERIENCE</h4>
        </div>
        <div className="flex flex-col text-white">
          {projects.map((project, i) => (
            <div className="flex items-center relative h-96 my-14">
              <Fade>
                <img
                  alt="gallery"
                  className={"w-3/5 object-cover object-center rounded-lg h-full mx-2 absolute" + (i % 2 == 0 ? " right-14" : " left-12 ")}
                  src={project.image}
                />
              </Fade>
              <div className={"w-3/5 rounded-lg h-full mx-2 absolute bg-white opacity-60 hover:opacity-0" + (i % 2 == 0 ? " right-14" : " left-12")}></div>
              <div className={"flex flex-col items-center justify-center w-1/3 h-full absolute grow" + (i % 2 == 0 ? " left-12" : " right-14")}>
              <Pulse>
                <div className="w-full flex items-end justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
                  <h1 className="text-2xl font-bold text-gray-900">{project.subtitle}</h1>
                </div>
                <div className={"text-white rounded-md px-4 py-2 shadow-md w-full" + (i % 4 == 0 ? " bg-red-500" : "" ) + (i % 4 == 1 ? " bg-green-400" : "" ) + (i % 4 == 2 ? " bg-blue-400" : "" ) + (i % 4 == 3 ? " bg-yellow-400" : "" )}>
                  {project.description}
                </div>
                <div className="flex w-full justify-center items-center mt-2">
                  <div className={"rounded-md w-1/4 shadow-md mx-2" + (i % 4 == 0 ? " bg-yellow-400" : "" ) + (i % 4 == 1 ? " bg-red-500" : "" ) + (i % 4 == 2 ? " bg-green-400" : "" ) + (i % 4 == 3 ? " bg-blue-400" : "" )}>Tag 1</div>
                  <div className={"rounded-md w-1/4 shadow-md mx-2" + (i % 4 == 0 ? " bg-blue-400" : "" ) + (i % 4 == 1 ? " bg-yellow-400" : "" ) + (i % 4 == 2 ? " bg-red-500" : "" ) + (i % 4 == 3 ? " bg-green-400" : "" )}>Tag 2</div>
                  <div className={"rounded-md w-1/4 shadow-md mx-2" + (i % 4 == 0 ? " bg-green-400" : "" ) + (i % 4 == 1 ? " bg-blue-400" : "" ) + (i % 4 == 2 ? " bg-yellow-400" : "" ) + (i % 4 == 3 ? " bg-red-500" : "" )}>Tag 3</div>
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
