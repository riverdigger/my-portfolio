// import React from "react";
//
// export default function App() {
//   return "App";
// }

// src/App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Socials from "./components/Socials";

export default function App() {
  return (
    <main className="text-black bg-white body-font">
      <Navbar />
      <About />
      <Projects />
      {/*<Skills />
      <Testimonials />
      <Contact />*/}
      <Socials />
    </main>
  );
}
