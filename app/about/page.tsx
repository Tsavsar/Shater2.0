import React from 'react';
import Navbar from '../components/Navbar';
import CTooltip from '../components/CTooltip';
//import Image from 'next/image';
import PlayName from '../components/PlayName';

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

					<div className="f-satoshi md:flex justify-between items-center">
						<p className="text-[#19170E] text-3xl min-[375px]:text-[2.5rem] md:text-[3.35rem] leading-[60px] md:leading-[78px]">
							/ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/{' '}
						</p>
						<PlayName/>
					</div>
				</main>
			</section>
		</>
	);
};

export default page;
