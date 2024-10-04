import React, { useEffect, useState } from 'react';
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
import About from '../components/About';

const page = () => {
	
	return (
		<>
			<section className="responsive pt-16">
				<Navbar navItl="Home" navLink="/" />
				<main className={`pt-24`}>
				<About/>	
				</main>
				<Footer/>
			</section>
		</>
	);
};

export default page;
