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
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col justify-center align-start">
            <div className="flex flex-row items-center justify-center italic text-yellow-400 mr-7">
              <CodeIcon className="w-10" />
              <h4 className="sm:text-4xl text-3xl font-medium title-font ml-1">Websites</h4>
            </div>
            {/*<div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
              href={project.link}
              key={project.image}
              className="sm:w-1/4 h-1/4 w-100 p-4">
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
          <div className="flex flex-col justify-center align-start">
            <div className="flex flex-row items-center justify-center italic text-red-500 mr-7">
            <DeviceMobileIcon className="w-10" />
            <h4 className="sm:text-4xl text-3xl font-medium title-font ">Mobile Apps</h4>
            </div>
          </div>
          <div className="flex flex-col justify-center align-start">
            <div className="flex flex-row items-center justify-center italic text-green-400">
            <StarIcon className="w-10" />
            <h4 className="sm:text-4xl text-3xl font-medium title-font ">Video Games</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
