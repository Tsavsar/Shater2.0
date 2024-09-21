import React from 'react'
import Image from 'next/image'

const Footer = () => {
  let Dev;

  return (
    <div className='pt-40'>
      <div className="c-md-responsive f-satoshi">
      <div className="flex justify-between">
        <a className='text-[#9A9A9A] font-light text-[9px] md:text-xs' href='mailto:shatermt@gmail.com'>shatermt@gmail.com</a>
        <div className='flex gap-2'>
          <p className='gradient-text font-light text-[9px] md:text-xs'>Designed By Shater</p>
          <p className='text-[#9A9A9A] font-light text-[9px] md:text-xs'>Built By {Dev}</p>
        </div>
        <p className='text-[#9A9A9A] font-light text-[9px] md:text-xs'>© 2024 Shater M. Tsavsar</p>
      </div>
      </div>
    <Image src="/images/footer-desktop.svg" alt="Shatermt.com" width={2416} height={278} />
    </div>
  )
}

export default Footer