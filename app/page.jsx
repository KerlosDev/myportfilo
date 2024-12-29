import Image from "next/image";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Soical from "./components/Soical";
import Projects from "./components/Projects";

export default function Home() {
  return (

    <div>

      

      <Nav></Nav>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
     <Soical></Soical>

    </div>
  );
}
