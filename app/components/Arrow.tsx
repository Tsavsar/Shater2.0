import React from 'react'
import Image from 'next/image'

interface IArrow{
  alt: string,
}

const Arrow:React.FC<IArrow> = ({alt}) => {
  return (
    <Image
    src="/images/arrow.svg"
    alt={alt}
    width={14}
    height={14}
    style={{ display: 'inline-block' }}
  />  )
}

export default Arrow