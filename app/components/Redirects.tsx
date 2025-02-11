import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

interface IRedirects{
  href: string
  text: string
  style?:string
}

const Redirects:React.FC<IRedirects> = ({href, text, style}) => {
  return (
    <Link target="_blank" href={href} className={`flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#1a1a1a] f-satoshi group ${style}`}>{text} <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
  )
}

export default Redirects