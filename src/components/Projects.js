// src/components/Projects.js

import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { MusicNoteIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-200 body-font shadow-inner-md">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center justify-center mb-4 border-b border-gray-700">
          <h4 className="text-5xl ml-1 text-gray-900">WORK EXPERIENCE</h4>
        </div>
        <div className="flex flex-col text-white">
          {projects.map((project, i) => (
            <div className="flex items-center relative h-96 my-14">
              <img
                alt="gallery"
                className={"w-3/5 object-cover object-center rounded-lg h-full mx-2 absolute" + (i % 2 == 0 ? " right-14" : " left-12 ")}
                src={project.image}
              />
              <div className={"w-3/5 rounded-lg h-full mx-2 absolute bg-white opacity-60 hover:opacity-0" + (i % 2 == 0 ? " right-14" : " left-12")}></div>
              <div className={"flex flex-col items-center justify-center w-1/3 h-full absolute grow" + (i % 2 == 0 ? " left-12" : " right-14")}>
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
              </div>
            </div>
          ))}
        </div>
        {/*<div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>*/}
      </div>
    </section>
  );
}
