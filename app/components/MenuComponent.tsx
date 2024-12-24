"use client";

import { useEffect, useState } from "react";
import { NavDropdownContainer } from "./NavDropdown";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Education from "./Education";
import Recommendations from "./Recommendations";

const MenuComponent = () => {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".tgt-slide");

    const observer = new IntersectionObserver(entries =>
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("menu-slide-in");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("menu-slide-in");
        }
      })
    );

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [activeItem]);

  return (
    <>
      <NavDropdownContainer defineActiveItem={setActiveItem} />

      {activeItem === "projects" && <Projects />}

      <div className="tgt-slide">{activeItem === "experience" && <Experiences />}</div>
      <div className="tgt-slide">{activeItem === "education" && <Education />}</div>
      <div className="tgt-slide">{activeItem === "recommendation" && <Recommendations />}</div>
    </>
  );
};

export default MenuComponent;
