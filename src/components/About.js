// src/components/About.js

import React from "react";
import { VolumeUpIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { MusicNoteIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/solid";

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
    <section id="about" className="h-screen gradient">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-center h-full">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="sm:text-3xl text-2xl font-medium text-white bg-white bg-opacity-20 transform -skew-x-12 px-3">// Hi I'm</p>
          {/*<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-start cursor-pointer hover:text-green-400" onClick={ () => audio_phonetics.play() } onMouseOver={ showAudioIcon } onMouseLeave={ hideAudioIcon } >
                Niall
                <VolumeUpIcon
                  id="volume-up-icon"
                  className="hidden w-5 mx-1 text-green-400"
                />
              </div>
            </div>
          </h1>*/}
          <div className="flex flex-col justify-start items-center my-7">
            <p className="italic font-bold sm:text-5x; text-9xl mx-4 font-large text-white">NIALL MINER</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center justify-start italic text-white mr-7">
                <CodeIcon className="w-10" />
                <h4 className="text-2xl ml-1">Websites</h4>
              </div>
              <div className="flex flex-row items-center justify-start italic text-white mr-7">
                <DeviceMobileIcon className="w-10" />
                <h4 className="text-2xl ml-1">Mobile Apps</h4>
              </div>
              <div className="flex flex-row items-center justify-start italic text-white">
                <StarIcon className="w-10" />
                <h4 className="text-2xl ml-1">Video Games</h4>
              </div>
            </div>
          </div>
          <p className="sm:text-3xl text-2xl max-w-3xl mb-4 font-medium text-white bg-white bg-opacity-20 transform -skew-x-12 px-3">// Software Developer with experience in full stack development, defect tracking, database management</p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
              Let's Build Something
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        {/*<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>*/}
      </div>
    </section>
  );
}
