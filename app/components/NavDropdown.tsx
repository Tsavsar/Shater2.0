"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dropdownList } from "../utils";

interface INavDropdown {
  defineActiveItem: (e: string) => void;
}

export const NavDropdownContainer: React.FC<INavDropdown> = ({ defineActiveItem }) => {
  const [mobile, setMobile] = useState(true);
  const [desktop, setDesktop] = useState(true);
  const [activeItem, setActiveItem] = useState("projects");

  const handleTextChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerText.toLowerCase();
    setActiveItem(text);
    setMobile(false);
    setDesktop(false);
    //defineActiveItem(text)
  };

  useEffect(() => {
    defineActiveItem(activeItem);
  }, [activeItem, defineActiveItem]);

  useEffect(() => {
    defineActiveItem(dropdownList[0].toLowerCase());
    setActiveItem(dropdownList[0].toLowerCase());
  }, [defineActiveItem]);

  const toggleMenu = () => {
    setMobile(!mobile);
    setDesktop(!desktop);
  };

  return (
    <NavDropdown
      handleTextChange={handleTextChange}
      desktop={desktop}
      activeItem={activeItem}
      mobile={mobile}
      toggleMenu={toggleMenu}
    />
  );
};

interface NavDropdownProps {
  handleTextChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mobile: boolean;
  desktop: boolean;
  activeItem: string;
  toggleMenu: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = props => {
  useEffect(() => {
    const title = document.querySelectorAll(".title-slide");

    const RowObserver = new IntersectionObserver(
      entries =>
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.style.animationDelay = `${index * 0.3}s`;
            target.classList.add("title-slideIn");
            // RowObserver.unobserve(target);
          } else {
            target.classList.remove("title-slideIn");
          }
        }),
      { threshold: 0.1 }
    );

    title.forEach(el => {
      RowObserver.observe(el);
    });

    return () => {
      title.forEach(el => {
        RowObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex pb-10 items-center gap-4" data-aos="fade-up" data-aos-delay="350">
      <div className="c-menu">
        <>
          <svg className="svg-area" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(8,8)">
              <circle id="radar" cx="0" cy="0" r="6" />
              <circle id="core" cx="0" cy="0" r="4" />
            </g>
          </svg>
        </>
        <span className="f-satoshi font-medium text-sm text-[#19170E]">Menu</span>
      </div>
      <hr className="slant-divider" />
      {/* mobile -onMouseLeave={props.handleMobileLeave} onMouseEnter={props.handleMobileEnter} */}

      <div onClick={props.toggleMenu} className="md:hidden cursor-pointer  relative">
        <div className="capitalize dropdown-active flex items-center gap-4">
          {props.activeItem}
          <Image className="mobile-dropdown" src="/images/mobile-dropdown.svg" alt="Dropdown" width={10} height={10} />
          <div className={`${props.mobile ? "grid" : "hidden"} absolute -left-8 -top-24`}>
            <div className="z-30 dropdown-slide rounded-xl grid p-4 px-8 dropdown-mobile cursor-pointer mt-[8rem] bg-[#F9F8F6] border-[#F5F3F0] border gap-4">
              {dropdownList
                .filter(item => item.toLowerCase() !== props.activeItem)
                .map(item => (
                  <button
                    key={item}
                    onClick={props.handleTextChange}
                    className="capitalize py-1 text-left hover:opacity-70"
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
        </div>
        {/* grid */}
      </div>
      {/* desktop */}
      <div className="hidden md:flex">
        <div
          onClick={props.toggleMenu}
          className="relative cursor-pointer capitalize dropdown-active flex items-center gap-4"
        >
          <span>{props.activeItem}</span>
          <Image
            className=""
            src={props.desktop ? "/images/active.svg" : "/images/dropdown.svg"}
            alt="Dropdown"
            width={props.desktop ? 5 : 10}
            height={props.desktop ? 5 : 10}
          />
          <div className={`${props.desktop ? "flex" : "hidden"} dropdown-children items-center gap-4`}>
            {dropdownList
              .filter(item => item.toLowerCase() !== props.activeItem)
              .map(item => (
                <button key={item} onClick={props.handleTextChange} className="cop-dropdown-link hover:opacity-70">
                  {item}
                </button>
              ))}
            {/* <a className='dropdown-link' href="#">Education</a>
      <a className='dropdown-link' href="#">Recommendation</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
