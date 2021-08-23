// src/components/Work.js

import React from "react";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import {Animated} from "react-animated-css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from "../data";

export default function Projects() {
  var isActive = false;

  function toggleActive() {
    isActive = !isActive;
    if (isActive) {
      document.getElementById("projects_container").classList.remove("overflow-hidden");
      document.getElementById("projects_container").classList.remove("max-h-88");
      document.getElementById("show_more").style.display = "none";
      document.getElementById("show_less").style.display = "flex";
    } else {
      document.getElementById("projects_container").classList.add("overflow-hidden");
      document.getElementById("projects_container").classList.add("max-h-88");
      document.getElementById("show_more").style.display = "flex";
      document.getElementById("show_less").style.display = "none";
    }
  }

  return (
    <section id="work" className="bg-gray-200 body-font section-p">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex items-center sm:justify-start justify-between mb-4">
          <h4 className="text-5xl ml-1 text-gray-900"><span className="hidden sm:inline">Side</span>&nbsp;<span className="font-bold">Projects</span></h4>
          <div className="flex-grow border-b border-gray-700 mx-8 hidden sm:block"></div>
          <div className="transform skew-x-12 bg-red-400 w-2 sm:mr-1 mr-0">&nbsp;</div>
          <div className="transform skew-x-12 bg-green-400 w-2 sm:mr-1 mr-0">&nbsp;</div>
          <div className="transform skew-x-12 bg-blue-400 w-2">&nbsp;</div>
        </div>
        <div id="projects_container" className={"flex flex-wrap justify-center mb-4 " + (isActive ? "" : "overflow-hidden max-h-88")}>
          {projects.map((project, i) => (
            <div className={"grow-sm m-4 flex flex-col justify-between items-start rounded-md shadow-lg hover:shadow-sm h-80 max-h-80 w-80 bg-white p-4 ring-4" + (i % 4 == 0 ? " ring-red-400" : "" ) + (i % 4 == 1 ? " ring-green-500" : "" ) + (i % 4 == 2 ? " ring-indigo-500" : "" ) + (i % 4 == 3 ? " ring-yellow-500" : "" )}>
            <Fade>
              <div>
                <div className="w-full flex justify-between items-center">
                  <a className="text-xl ml-1 text-gray-900 font-bold" href={project.link} target="_blank">{project.title}</a>
                  <div className="flex flex-grow justify-end items-center">
                  {project.links.map((link, i) => (
                    <a href={link.link} target="_blank"><FontAwesomeIcon icon={link.icon} className="mr-2 font-bold text-2xl" /></a>
                  ))}
                  </div>
                </div>
                <div className="overflow-ellipsis w-full text-left pt-2">
                <Animated animationIn="fadeInUp" isVisible={true}>
                {project.description}
                </Animated>
                </div>
              </div>
              <div className="w-full flex justify-between items-end">
                <div className="flex flex-grow justify-start items-center">
                {project.tags.map((tag, i) => (
                  <span className="mr-4">{tag}</span>
                ))}
                </div>
                <a
                href={project.link}
                target="_blank"
                className="w-1/3">
                <img
                alt="gallery"
                className="object-cover object-center md:rounded-lg rounded-t-lg "
                src={project.image}
                />
                </a>

              </div>
            </Fade>
            </div>
          ))}
        </div>
        <div id="show_more" className="cursor-pointer text-lg hover:text-gray-500 w-full flex justify-center items-center" onClick={ toggleActive }>
          Show More
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        <div id="show_less" className="cursor-pointer text-lg hover:text-gray-500 w-full flex justify-center items-center hidden" onClick={ toggleActive }>
          Show Less
          <ChevronUpIcon className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
