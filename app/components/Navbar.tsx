import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src="/images/shater.svg" alt="Shater - Product Designer" width={42} height={42}/>
      <a  className="f-p22 flex items-center font-normal text-sm gap-2 text-[#0A231D]" href="/about"><span className="f-p22">About <span className="italic f-p22">me</span></span> <Image src="/images/about-me.svg" alt="Go to about page" width={10} height={6}/></a>
    </nav>
  )
}

export default Navbar