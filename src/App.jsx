import React from "react";
import AppNavbar from "./assets/navbar/AppNavbar";
import Hero from "./assets/hero/Hero";
import Portfolio from "./assets/portfolio/Portfolio";
import About from "./assets/about/About";

export default function App() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <Portfolio />
      <About />
    </>
  );
}
