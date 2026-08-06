import React from 'react';
import { About } from "@/sections/About";
import { Experience } from "@/sections/experience";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Contact } from "@/sections/contact";
import { Navbar } from "@/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
