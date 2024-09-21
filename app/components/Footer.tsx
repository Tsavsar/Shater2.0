import React from 'react'
import Image from 'next/image'

const Footer = () => {
  let Dev;

  return (
    <div className='pt-80'>
      <div className="flex justify-between">
        <a href='mailto:shatermt@gmail.com'>shatermt@gmail.com</a>
        <div>
          <p>Designed By Shater</p>
          <p>Built By {Dev}</p>
        </div>
        <p>© 2024 Shater M. Tsavsar</p>
      </div>
    <Image src="/images/footer-desktop.svg" alt="Shatermt.com" width={2416} height={278} />
    </div>
  )
}

export default Footer