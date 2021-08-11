// import React from "react";
//
// export default function App() {
//   return "App";
// }

// src/App.js
import React from "react";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Socials from "./components/Socials";

export default function App() {
  return (
    <main className="text-black bg-gray-200 body-font">
      <Navbar />
      <Landing />
      <About />
      <Work />
      {/*<Skills />
      <Testimonials />*/}
      <Contact />
      <Socials />
    </main>
  );
}
