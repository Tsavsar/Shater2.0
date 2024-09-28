import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Dropdown, { NavDropdownContainer } from './components/NavDropdown';
import NavDropdown from './components/NavDropdown';
import { useState } from 'react';
import MenuComponent from './components/MenuComponent';

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
							<a
								target="_blank"
								href="https://drive.google.com/file/d/19aVwNnWcFTDrvArQ5fKqwSutcZRnnSbp/view?usp=drive_link">
								<Image
									src="/images/download.svg"
									alt="Download CV"
									width={18}
									height={18}
								/>
								Download CV
							</a>
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
					<p className="min-[375px]:w-[342px] md:w-auto f-satoshi font-normal text-base pt-10 text-[#464229]">
						Shater Tsavsar ( /ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/ ) — product designer by day,
						Knicks & Arsenal fan by night. Currently building{' '}
						<span className=".f-satoshi-medium">Opentape</span>
						<a target="_blank" href="https://www.opentape.io/">
							<Image
								src="/images/arrow.svg"
								alt="What I'm currrently building"
								width={14}
								height={14}
								style={{ display: 'inline-block' }}
							/>
						</a>
						, my design approach focuses on solving real problems, optimizing
						user journeys, and making every interaction seamless.
					</p>

					<p className="min-[375px]:w-[342px] md:w-auto f-satoshi font-normal text-base pb-10 pt-4 text-[#464229]">
						Following my <span className="f-satoshi-medium">X (Twitter)</span>
						<a target="_blank" href="https://x.com/Tsavsar_/">
							<Image
								src="/images/arrow.svg"
								alt="What I'm currrently building"
								width={14}
								height={14}
								style={{ display: 'inline-block' }}
							/>
						</a>{' '}
						is the fastest way to reach me.
					</p>

					<MenuComponent />
				</main>
			</section>
			<Footer />
		</>
	);
}
