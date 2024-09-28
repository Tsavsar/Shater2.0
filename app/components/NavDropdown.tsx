'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { dropdownList } from '../utils';

interface INavDropdown{
  defineActiveItem: (e:any) => void;
}

export const NavDropdownContainer:React.FC<INavDropdown> = ({defineActiveItem}) => {
  const [mobile, setMobile] = useState(false)
  const [desktop, setDesktop] = useState(false)
  const [activeItem, setActiveItem] = useState('projects')

  const handleTextChange = (e: { target: any; }) => {
    let text = e.target.innerText.toLowerCase()
    setActiveItem(text)
    setMobile(false)
    setDesktop(false)
    //defineActiveItem(text)
  }

  const handleMobileLeave = () => {
    setMobile(false)
  }
  const handleMobileEnter = () => {
    setMobile(true)
  }
  const handleDesktopLeave = () => {
    setDesktop(false)
  }
  const handleDesktopEnter = () => {
    setDesktop(true)
  }

  useEffect(() => {
    defineActiveItem(activeItem)
  }, [activeItem])
  
  useEffect(() => {
      defineActiveItem(activeItem)
      setActiveItem(dropdownList[0].toLowerCase())
  }, [dropdownList])

  return(
    <NavDropdown handleTextChange={handleTextChange} desktop={desktop} activeItem={activeItem} handleDesktopEnter={handleDesktopEnter} handleDesktopLeave={handleDesktopLeave} handleMobileLeave={handleMobileLeave} handleMobileEnter={handleMobileEnter} mobile={mobile}/>
  )
}

interface NavDropdownProps {
  handleMobileLeave: () => void;  
  handleMobileEnter: () => void;  
  handleDesktopLeave: () => void;  
  handleDesktopEnter: () => void;  
  handleTextChange: (e:any) => void;  
  mobile: boolean;              
  desktop: boolean;              
  activeItem: string          
};

const NavDropdown: React.FC<NavDropdownProps> = (props) => {
  return (
    <div className="flex pb-10 items-center gap-4">
    <div className="c-menu">
      <Image
        className="motion-safe:animate-pulse"
        src="/images/menu.svg"
        alt="Menu"
        width={16}
        height={16}
      />
      <span className="f-satoshi font-medium text-sm text-[#19170E]">Menu</span>
    </div>
    <hr className="slant-divider" />
    {/* mobile */}
    
    <div  onMouseLeave={props.handleMobileLeave} onMouseEnter={props.handleMobileEnter} className="md:hidden cursor-pointer  relative">
    <div  className="capitalize dropdown-active flex items-center gap-4">
      {props.activeItem}
      <Image
        className='mobile-dropdown'
        src="/images/mobile-dropdown.svg"
        alt="Dropdown"
        width={10}
        height={10}
      />
      <div className={`${props.mobile ? 'grid' : 'hidden'} absolute -left-4 `}>
     <div className='rounded-xl grid p-4 dropdown-mobile cursor-pointer mt-[10rem] bg-[#F9F8F6] border-[#F5F3F0] border gap-4'>
     {dropdownList.filter(item => item.toLowerCase() !== props.activeItem).map(item => (
      <button onClick={props.handleTextChange} className='capitalize text-left hover:opacity-70'>{item}</button>
     ))}
     </div>
      </div>
    </div>
    {/* grid */}
  </div>
  {/* desktop */}
    <div className="hidden md:flex">
    <div  onMouseLeave={props.handleDesktopLeave} onMouseEnter={props.handleDesktopEnter}  className="relative cursor-pointer capitalize dropdown-active flex items-center gap-4">
    <span>{props.activeItem}</span>
      <Image
        className=''
        src={props.desktop ? '/images/active.svg' : '/images/dropdown.svg'}
        alt="Dropdown"
        width={props.desktop ? 5 : 10}
        height={props.desktop ? 5 :10}
      />
      <div className={`${props.desktop ? 'flex' : 'hidden'} dropdown-children items-center gap-4`}>
      {dropdownList.filter(item => item.toLowerCase() !== props.activeItem).map(item => (
        <button onClick={props.handleTextChange} className='dropdown-link hover:opacity-70'>{item}</button>

      ))}
      {/* <a className='dropdown-link' href="#">Education</a>
      <a className='dropdown-link' href="#">Recommendation</a> */}
      </div>
    </div>
  </div>
    
  </div>
  )
}

export default NavDropdown
