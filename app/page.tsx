import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
	return (
    <>
		<section className="responsive pt-16">
			<Navbar />
			<main className="pt-24">
				<ul className="identity f-p22 flex flex-wrap gap-2 min-[375px]:gap-[0.4rem] lg:gap-4 items-center text-[#464229] font-normal">
					<li className="">Product Designer</li>
					<hr className="divider" />
					<li className="">Writer</li>
					<hr className="divider" />
					<li className="">Designer Speaker</li>
				</ul>
				<h1 className="py-5 text-[#19170E] text-5xl name font-p22800 lg:w-[12ch]">
					Mchiaga Tsavsar Shater{' '}
				</h1>
				{/* links */}
				<ul className="flex flex-wrap gap-4 utility-links">
					<li>
						<a href="mailto:shatermt@gmail.com">
							<Image
								src="/images/email.svg"
								alt="Mail Shater"
								width={18}
								height={18}
							/>
							shatermt@gmail.com
						</a>
					</li>
					<li>
						<Link href="#">
							<Image
								src="/images/download.svg"
								alt="Download CV"
								width={18}
								height={18}
							/>
							Download CV
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image
								src="/images/playlist.svg"
								alt="Playlist"
								width={18}
								height={18}
							/>
							Playlist
						</Link>
					</li>
				</ul>
				{/* about */}
				<p className="min-[375px]:w-[342px] md:w-auto f-satoshi font-normal text-base py-10 text-[#464229]">
					Shater Tsavsar ( /ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/ ) — product designer by day,
					Knicks & Arsenal fan by night. Currently building Opentape, my design
					approach focuses on solving real problems, optimizing user journeys,
					and making every interaction seamless. I work closely with founders
					and developers, contributing to both design and overall product
					strategy, with strengths in user-centered design and turning complex
					ideas into intuitive interfaces.
				</p>

				<div className="flex pb-10 items-center gap-4">
					<div className="c-menu">
						<Image className='motion-safe:animate-pulse' src="/images/menu.svg" alt="Menu" width={16} height={16} />
						<span className='font-medium text-sm text-[#19170E]'>Menu</span>
					</div>
            <hr className='slant-divider'/>
					<div className="dropdown">
						<a href="#" className="flex gap-2 dropbtn">
							Projects
              <Image src="/images/dropdown.svg" alt="Dropdown" width={10} height={10} />

						</a>
						<div className="hidden dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
					</div>
				</div>

        <Projects/>

			</main>
		</section>
      <Footer/>
    </>
	);
}
