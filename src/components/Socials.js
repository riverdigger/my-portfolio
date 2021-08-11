// src/components/Navbar.js

import {Animated} from "react-animated-css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from "../data";

export default function Socials() {
  return (
    <div className="bg-white lg:sticky lg:top-0 lg:z-10 pt-2 lg:pt-0">
      <ul className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:z-10 m-4 flex lg:flex-col flex-row items-center lg:justify-end justify-center lg:py-6">
        <li className="mb-4 text-white">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <div className="h-6 lg:border-l border-t border-white"></div>
          </Animated>
        </li>
        {socials.map((social) => (
          <li className={"hover:" + social.color + " mb-4 lg:text-white mx-2 lg:mx-0 " + social.color}>
            <Animated animationIn="fadeInLeft" isVisible={true}>
              <a
                href={social.href}
                target="_blank"
                >
                <FontAwesomeIcon icon={social.icon} size="2x" className="shadow-svg" />
              </a>
            </Animated>
          </li>
        ))}
      </ul>
    </div>
  );
}
