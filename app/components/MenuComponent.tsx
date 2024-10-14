'use client';

import { useState } from "react";
import { NavDropdownContainer } from "./NavDropdown";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Education from "./Education";
import Recommendations from "./Recommendations";

const MenuComponent = () => {
  const [activeItem, setActiveItem] = useState('')

  return (
    <>
    <NavDropdownContainer defineActiveItem={setActiveItem}/>

    {activeItem === 'projects' && 
    <Projects/>
    }

    {activeItem === 'experience' && 
    <Experiences/>
    }

    {activeItem === 'education' && 
    <Education/>
    }

    {activeItem === 'recommendation' && 
    <Recommendations/>
    }
    </>
  )
}

export default MenuComponent