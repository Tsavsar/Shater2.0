import React from 'react';
import Navbar from '../components/Navbar';
import CTooltip from '../components/CTooltip';
import Image from 'next/image';
import PlayName from '../components/PlayName';
import Link from 'next/link';
import Socials from '../components/Socials';
import { books, musicArtist, topAnime } from '../utils';
import Arrow from '../components/Arrow';
import Redirects from '../components/Redirects';
import Footer from '../components/Footer';

const page = () => {
	return (
		<>
			<section className="responsive pt-16">
				<Navbar navItl="Home" navLink="/" />
				<main className="pt-24">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl f-p22 text-[#19170E]">
							About <span className="f-p22Italic">me.</span>
						</h1>

						<CTooltip />
					</div>
					<p className="f-satoshi text-base text-[#464229] pt-5 pb-10">
						Alright, let’s do this one last time...... My name is Shater D.
						Tsavsar.
					</p>
					{/* name pronunciation */}
					<div className="f-satoshi md:flex justify-between items-center">
						<p className="text-[#19170E] text-3xl min-[375px]:text-[2.5rem] md:text-[3.35rem] leading-[60px] md:leading-[78px]">
							/ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/{' '}
						</p>
						<PlayName />
					</div>
					{/* about  */}
					<div className="pt-6 f-satoshi text-[#464229] text-base">
						<p>
							And for the last couple of years I&apos;ve been the one and only
							pixel pushing, Jesus loving, sports analysing, anime power
							scaling, friendly neighbourhood{' '}
							<span className="comic-neue-regular line-through text-[#46422966]">
								Spider-Man
							</span>{' '}
							Product Designer.
						</p>
						<p className="py-5">
							I designed a bunch of products, worked with startups, crafted
							design systems, and then I designed again... and again and again
							and again. But after everything, I still love being a product
							designer. I mean, who wouldn&apos;t?
						</p>
						<p>
							So no matter how many challenges I face, I always find a way to
							come back. Because the only thing standing between bad design and
							the users is me. There&apos;s only one product designer like me.{' '}
							<span className="uppercase f-satoshi-medium">
								And you&apos;re looking at him.
							</span>
						</p>
					</div>
					{/* socials */}
					<div className="pt-14">
						<p className="f-p22 text-[32px] leading-8 text-[#19170E]">
							I exist on the <span className="f-p22Italic">interwebs...</span>
						</p>
						<Socials />
					</div>
					{/* picture reel */}
					<div className="pt-14">
						<p className="f-p22 text-[32px] leading-8 text-[#19170E]">
							Enjoy this show reel of pictures.......
							<span className="ml-1 f-p22Italic text-base text-[#B1AFA4]">
								or dont
							</span>
						</p>
					</div>

					{/* useful facts */}
					<div className="pt-14 ">
						<div className="relative">
							<span className="md:absolute md:-left-[65px] md:top-1 f-p22Italic text-base text-[#B1AFA49C] block">
								not so*
							</span>
							<p className="f-p22 text-[32px] leading-8 text-[#19170E]">
								{' '}
								Useful facts about <span className="f-p22Italic">me</span>
							</p>
						</div>
						<div className="pt-5 text-[#232323] f-satoshi-medium text-base">
							<p className="">Fueled by faith and guided by grace.</p>
							<div className="pt-8 flex flex-col md:flex-row gap-3 md:justify-between">
								<p className="min-[375px]:w-[329px]">
									These 3 usually keep me up at night. I also own a lot of
									jerseys.
								</p>
								<Image
									src="/images/sports.svg"
									alt="interests"
									width={318}
									height={42}
								/>
							</div>
							{/* i make great playlist... */}
							<p className="pt-8 min-[390px]:w-[342px] md:w-auto">
								I make <span className="f-satoshi-bold">AMAZING</span>{' '}
								playlists, follow me on{' '}
								<Link
									href="https://open.spotify.com/user/313xafwvqml3ot3ewtswx5p3r6aq?si=1601ce0a2e0e43e9"
									target="_blank">
									Spotify
									<Image
										src="/images/arrow.svg"
										alt="Follow my spotify account"
										width={14}
										height={14}
										style={{ display: 'inline-block' }}
									/>
								</Link>
								<span className="ml-1">
									if you&apos;re looking for new music!!
								</span>
							</p>
							{/* currently watching... */}
							<div className="flex items-center pt-8">
								<div className="md:w-[464px]">
									<p>
										I&apos;m currently on Episode 700 of One Piece! I also own a
										number of anime figures.
									</p>
									<p className="pt-5 f-satoshi-bold">
										Here&apos;s my top 5 anime:
									</p>
								</div>
								<Image
									className="hidden md:block"
									src="/images/anime.svg"
									alt="I watch a lot of anime"
									width={191}
									height={69}
								/>
							</div>

							{/*  anime list */}
							<div className="flex flex-wrap gap-3 pt-2">
								{topAnime.map((item) => (
									<Link key={item.title} href={item.link}>
										{item.title}
										<Arrow alt={item.title} />
									</Link>
								))}
							</div>
							{/* x-box */}
							<p className="py-8">
								I&apos;ve been using xbox for over 15 years, I currently use a
								series S
							</p>
							{/* fav sports man */}
							<p className="pb-8">
								My favourite basketball player is{' '}
								<button>
									Josh Hart <Arrow alt="Josh Hart" />
								</button>{' '}
								and my favourite football player is{' '}
								<button>
									Martin Ødegaard
									<Arrow alt="Martin" />
								</button>
							</p>
							{/* music taste */}
							<div className="pb-8">
								<p className="text-[#232323]">
									5 Artists to explain my music taste
								</p>
								<div className="flex flex-wrap gap-3 pt-2">
									{musicArtist.map((item) => (
										<Link
											className="text-[#19170E]"
											key={item.title}
											href={item.link}>
											{item.title}
											<Arrow alt={item.title} />
										</Link>
									))}
								</div>
							</div>

							{/* chess */}
							<p className="pb-8 text-[#232323]">
								I play a lot of chess and my favourite opening is the{' '}
								<Redirects
									href="https://www.chess.com/openings/Queens-Pawn-Opening-Chigorin-Variation"
									text="Queen's Pawn: Chigorin Variation"
									alt="Queen's Pawn: Chigorin Variation"
								/>{' '}
								with white and the{' '}
								<Redirects
									href="https://www.chess.com/openings/Kings-Pawn-Opening"
									alt="King's Pawn Opening"
									text="King's Pawn Opening"
								/>{' '}
								with black.
							</p>

							{/* books */}
							<div className='pb-8'>
								<p className=" text-[#232323]">
									I read a little and these are my favourite books;
								</p>
								<div className="flex flex-wrap gap-3 pt-2">
									{books.map((item) => (
										<Link
											className="text-[#19170E]"
											key={item.title}
											href={item.link}>
											{item.title}
											<Arrow alt={item.title} />
										</Link>
									))}
								</div>
							</div>




						</div>
						<div className='border border-[#F0EEE8] rounded-md flex justify-between items-center py-3 px-4'>
							<div className='flex items-center gap-2'>
							<Image src='/images/gift.svg' alt="gift for you" width={24} height={24}/>
							<p className='f-satoshi text-[#232323] text-[15px] leading-[19.5px]'>I promised you a surprise so here you go. </p>
							</div>
							<Link className='min-[375px]:w-[28%] md:w-auto text-sm text-[#0A231D] f-p22' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Click <span className='f-p22Italic'>me!</span></Link>
						</div>
					</div>
				</main>
				<Footer/>
			</section>
		</>
	);
};

export default page;
