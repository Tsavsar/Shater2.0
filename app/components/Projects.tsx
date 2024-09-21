'use client'
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../utils';

const Projects = () => {
	return (
		<div className="f-satoshi">
			<p className="font-normal text-base text-[#464229]">
				A collection of projects I’ve worked on in the process of learning and
				improving as a designer and to also show my ability to solve issues with
				design.
			</p>

			<>
				{projectsData.map((item) => (
					<div className='pt-10' key={item.title}>
						<div className="flex items-center gap-4">
							<Image
								src={item.logo}
								alt="Project"
								width={60}
								height={60}
							/>
							<div>
								<div className="flex items-center gap-2">
									<h2 className="font-bold text-lg text-[#19170E] ">{item.title}</h2>
									<span className="text-[#C3C1B8] text-[10px] leading-[12.5px]">
										{item.date}
									</span>
								</div>
								<p className="text-xs text-[#7C7C7C] min-[375px]:w-[266px] font-normal">
									{item.about}
								</p>
							</div>
						</div>
						<p className="text-[#19170E] font-bold text-lg pt-4">Preview</p>
						<div className="text-[#464229] text-sm">
              <p className='break-ellipsis'>
							{item.note}
              </p>
							<Link className="text-[#0A231D] underline" href="#">
								read more
							</Link>
						</div>

						<div className='flex' >
              {item.images.map(item => (
                <img
                style={{borderRadius: '12px', width: '342px', objectFit: 'cover', height:'192px'}}
                key={item}
                  src={item}
                  alt="Preview of project"
                  // width={342}
                  // height={100}
                />

              ))}
						</div>

						<div className="flex items-center gap-4 mt-4">
							<div className="flex">
                {item.mobile &&
								<Image
									src="/images/mobile.svg"
									alt="Mobile design"
									width={18}
									height={18}
								/>
                }
                {item.laptop &&
								<Image
									src="/images/laptop.svg"
									alt="Laptop design"
									width={18}
									height={18}
								/>
                }
                {item.caseStudy &&
								<Image
									src="/images/branding.svg"
									alt="Branding"
									width={18}
									height={18}
								/>
                }
							</div>
							<p className="text-xs text-[#C3C1B8]">
								{item.platform}
							</p>
						</div>
						<hr className="bg-[#F0EEE8] w-[100%] h-[1px] mt-8 rounded-[24px]" />
					</div>
				))}
			</>
		</div>
	);
};

export default Projects;
