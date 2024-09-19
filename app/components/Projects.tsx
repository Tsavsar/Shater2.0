import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <div className="f-satoshi">
    <p className='pb-10 text-[#464229]'>A collection of projects I’ve worked on in the process of learning and improving as a designer and to also show my ability to solve issues with design.</p>

      <div className="flex items-center gap-4">
      <Image src="/images/fundify/logo.svg" alt="Project" width={60} height={60}/>
      <div>
        <div className="flex items-center gap-2"><h2 className="font-bold text-lg text-[#19170E] ">Fundify</h2> <span className="text-[#C3C1B8] text-[10px] leading-[12.5px]">February, 2024</span></div>
        <p className="text-xs text-[#7C7C7C] w-[266px] font-normal">Empower your finances and earn rewards with every smart move.</p>
      </div>
      </div>
      <p className="text-[#19170E] font-bold text-lg pt-4">Preview</p>
      <p className="text-[#464229] text-sm">In the fast-paced world of fintech, user engagement is...
        <Link className="text-[#0A231D] underline" href="#"> read more</Link></p>
      
      <div>
      <Image src="/images/fundify/mobile.svg" alt="Mobile design" width={100} height={100}/>

      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <div className="flex">
      <Image src="/images/mobile.svg" alt="Mobile design" width={18} height={18}/>
      <Image src="/images/laptop.svg" alt="Laptop design" width={18} height={18}/>
      <Image src="/images/branding.svg" alt="Branding" width={18} height={18}/>
        </div>
      <p className="text-xs text-[#C3C1B8]">Mobile App, Website, Design System and Branding</p>
      </div>
      <hr className="bg-[#F0EEE8] w-[100%] h-[1px] mt-8 rounded-[24px]"/>
    </div>
  )
}

export default Projects