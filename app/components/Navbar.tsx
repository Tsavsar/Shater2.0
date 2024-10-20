import Image from "next/image"

interface INavbar{
  nav?: string
  navLink: string
  navItl: string
}

const  Navbar:React.FC<INavbar> = ({nav, navItl, navLink}) => {
  return (
    <nav className="flex justify-between items-center">
      <Image className="bg-[#F0EEE8] rounded-full ease-in-out" src="/images/shater-2.svg" alt="Shater - Product Designer" width={42} height={42}/>
      <a  className="f-p22 hover:opacity-60 flex items-center font-normal text-sm gap-2 text-[#0A231D]" href={navLink}><span className="f-p22">{nav} <span className="italic f-p22Italic">{navItl}</span></span> <Image src="/images/about-me.svg" alt={nav || navItl} width={10} height={6}/></a>
    </nav>
  )
}

export default Navbar