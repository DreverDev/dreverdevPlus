"use client";
import { fadeInService } from "@/services/fadeInService";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Presentation from "@/components/sections/Presentation";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {

  useEffect(() => {
    fadeInService();
  }, []);
  return (
    <>
      <Presentation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
