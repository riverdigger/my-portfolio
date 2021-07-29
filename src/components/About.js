// src/components/About.js

import React from "react";
import { VolumeUpIcon } from "@heroicons/react/solid";

export default function About() {
  const audio_phonetics = new Audio("./niall.mp3");

  function showAudioIcon(e) {
    var audio_icon = document.getElementById('volume-up-icon');
    unfade(audio_icon);
    // audio_icon.style.display = "block";
  }

  function hideAudioIcon(e) {
    var audio_icon = document.getElementById('volume-up-icon');
    fade(audio_icon);
    // audio_icon.style.display = "none";
  }

  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
  }

  function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
  }
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <div className="flex items-center justify-start">
              Hi, I'm&nbsp;
              <div className="flex items-center justify-start cursor-pointer hover:text-green-400" onClick={ () => audio_phonetics.play() } onMouseOver={ showAudioIcon } onMouseLeave={ hideAudioIcon } >
                Niall
                <VolumeUpIcon
                  id="volume-up-icon"
                  className="hidden w-5 mx-1 text-green-400"
                />
              </div>
            </div>
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
