import React from 'react';
import { experienceData } from '../utils';
import Image from 'next/image';

const Experiences = () => {
	return (
		<div className="f-satoshi">
			<p className="font-normal text-base text-[#464229]">
				A highlight of the companies and teams I've worked with, solving design
				challenges and contributing to meaningful product solutions.
			</p>

			<>
				{experienceData.map((item) => (
					<div className="pt-10" key={item.role}>
						<div className="md:flex md:items-center md:justify-between">
							<div className="flex items-center gap-4">
                <div>
								<Image src={item.logo} alt="Project" width={60} height={60} />
                </div>
								<div>
									<div className="grid md:flex items-center md:gap-2">
										<h2 className="f-satoshi-bold text-lg text-[#19170E] ">
											{item.role}
										</h2>
										<span className="text-[#C3C1B8] text-[12px] leading-[15px]">
											{item.date}
										</span>
									</div>
									<p className="text-sm flex gap-2 items-center text-[#7C7C7C] min-[375px]:w-[266px] md:w-[315px] font-normal">
										{item.company}
										<hr className="divider" />
										{item.location}
									</p>
								</div>
							</div>
						</div>
            <div className="flex">
              <div className="hidden md:flex justify-center w-[10%] mt-5">
              <hr className='divider-2'/>
              </div>
              <div>
						<p className="text-[#464229] md:w-[591px] text-base pt-4">{item.note}</p>
						<div className="flex items-center pt-4">
							<p className="text-[15px] leading-[20.25px] mr-2">
								Contributions:{' '}
							</p>
							<div className=" min-[390px]:flex min-[390px]:gap-2">
								{item.links.map((item, index) => (
									<a
										key={index}
										className="f-satoshi-medium text-[#19170E]"
										target="_blank"
										href={`https://${item}`}>
										{item}
										<Image
											src="/images/arrow.svg"
											alt="What I'm currrently building"
											width={14}
											height={14}
											style={{ display: 'inline-block' }}
										/>
									</a>
								))}
							</div>
						</div>
              </div>
            </div>
					</div>
				))}
			</>

			<div className="flex items-center mt-8 gap-3 p-4 border border-[#F0EEE8] rounded-xl">
				<Image
					src="/images/linkedin.svg"
					alt="Linkedin"
					width={24}
					height={24}
				/>
				<p className="text-[#232323] text-[15px] leading-[19.9px]">
					Older positions can be found on my LinkedIn or on my CV
				</p>
			</div>

			<button className='flex justify-center items-center mt-10 w-full'>
				<a
        className='border-2 border-[#f5f3f0] bg-[#f0eee8] px-4 py-[6px] rounded-[34px] flex gap-1.5'
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
			</button>
		</div>
	);
};

export default Experiences;
