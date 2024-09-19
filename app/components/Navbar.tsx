import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src="/images/shater.svg" alt="Shater - Product Designer" width={42} height={42}/>
      <Link className="f-p22 flex items-center font-normal text-sm gap-2 text-[#0A231D]" href="/about"><span>About <span className="italic">me</span></span> <img src="/images/about-me.svg" alt="Go to about page"/></Link>
    </nav>
  )
}

export default Navbar