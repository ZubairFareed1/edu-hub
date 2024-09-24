// React Imports
import React from "react";

// UI Components Imports
import InstructorSection from "./components/InstructorSection/InstructorSection";
import TestimonalSection from "./components/TestimonalSection/TestimonalSection";
import Benefits from "./components/BenefitsSection/Benefits";
import Courses from "./components/CoursesSection/Courses";
import Hero from "./components/HeroSection/Hero";
import Header from "./components/Header/Header";

// Stylesheets Imports
import "./App.css";
import { useEffect } from "react";

/**
 * @description The main App component.
 * @returns {React.JSX.Element}
 * @example
 * ```
 * return <App />
 * ```
 */
export default function App() {
  // Adds and removes the context menu event listener to prevent default the event effects
  useEffect(() => {
    const preventDefaultConextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", preventDefaultConextMenu);

    return () => {
      document.removeEventListener("contextmenu", preventDefaultConextMenu);
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Benefits />
      <Courses />
      <InstructorSection />
      <TestimonalSection />
    </div>
  );
}
