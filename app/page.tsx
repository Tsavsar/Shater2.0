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
			<main className="pt-16">
				<ul className="identity flex f-p22 gap-1 min-[375px]:gap-4 items-center text-[#464229] font-normal">
					<li className="">Product Designer</li>
					<hr className="divider" />
					<li className="">Writer</li>
					<hr className="divider" />
					<li className="">Designer Speaker</li>
				</ul>
				<h1 className="py-5 text-[#19170E] text-5xl font-extrabold">
					Mchiaga Tsavsar Shater{' '}
				</h1>
				<ul className="flex flex-wrap gap-4 utility-links">
					<li>
						<Link href="#">
							<Image
								src="/images/email.svg"
								alt="Mail Shater"
								width={18}
								height={18}
							/>
							shatermt@gmail.com
						</Link>
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
				<p className="f-satoshi py-10 text-[#464229]">
					Shater Tsavsar ( /ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/ ) — product designer by day,
					Knicks & Arsenal fan by night. Currently building Opentape, my design
					approach focuses on solving real problems, optimizing user journeys,
					and making every interaction seamless. I work closely with founders
					and developers, contributing to both design and overall product
					strategy, with strengths in user-centered design and turning complex
					ideas into intuitive interfaces.as into intuitive interfaces.
				</p>

				<div className="flex pb-10 items-center gap-4">
					<div className="menu">
						<Image src="/images/menu.svg" alt="Menu" width={16} height={16} />
						Menu
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
      {/* <Footer/> */}
    </>
	);
}
