import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Benefits from "./components/BenefitsSection/Benefits";
import Courses from "./components/CoursesSection/Courses";
import InstructorSection from "./components/InstructorSection/InstructorSection";

export default function App() {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Courses />
      <InstructorSection />
    </div>
  );
}
