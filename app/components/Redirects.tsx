import Link from 'next/link'
import React from 'react'
import Arrow from './Arrow'

interface IRedirects{
  href: string
  text: string
  alt: string
  style?:string
}

const Redirects:React.FC<IRedirects> = ({href, text, alt, style}) => {
  return (
    <Link className={style} href={href} target='_blank'>{text}<Arrow alt={alt}/></Link>
  )
}

export default Redirects