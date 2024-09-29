'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../utils';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
					<div className="pt-10" key={item.title}>
						<div className="md:flex md:items-center md:justify-between">
							<div className="flex items-center gap-4">
								<Image src={item.logo} alt="Project" width={60} height={60} />
								<div>
									<div className="flex items-center gap-2">
										<h2 className="f-satoshi-bold text-lg text-[#19170E] ">
											{item.title}
										</h2>
										<span className="text-[#C3C1B8] text-[10px] leading-[12.5px]">
											{item.date}
										</span>
									</div>
									<p className="text-sm text-[#7C7C7C] min-[375px]:w-[266px] md:w-[315px] font-normal">
										{item.about}
									</p>
								</div>
							</div>
							<div className="hidden md:grid">
								<a href="">
									<Image
										src="/images/behance.svg"
										alt="view on behance"
										width={135}
										height={100}
									/>
								</a>
								<a href="">
									<Image
										src="/images/figma.svg"
										alt="view on figma"
										width={135}
										height={100}
									/>
								</a>
							</div>
						</div>
						<p className="text-[#19170E] f-satoshi-bold text-lg pt-4">
							Preview
						</p>
						<div className="text-[#464229] text-sm">
							<p className="break-ellipsis">{item.note}</p>
							<Link
								className="text-[#0A231D] text-xs font-bold underline"
								href="#">
								read more
							</Link>
						</div>

						<HorizontalScrollCarousel cards={item.images}/>

						<div className="flex items-center gap-2 mt-4">
							<div className="flex gap-2">
								{item.mobile && (
									<Image
										src="/images/mobile.svg"
										alt="Mobile design"
										width={18}
										height={18}
									/>
								)}
								{item.laptop && (
									<Image
										src="/images/laptop.svg"
										alt="Laptop design"
										width={18}
										height={18}
									/>
								)}
								{item.caseStudy && (
									<Image
										src="/images/branding.svg"
										alt="Branding"
										width={18}
										height={18}
									/>
								)}
							</div>
							<p className="text-xs text-[#C3C1B8]">{item.platform}</p>
						</div>
						<hr className="bg-[#F0EEE8] w-[100%] h-[1px] mt-8 rounded-[24px]" />
					</div>
				))}
			</>
		</div>
	);
};

interface IHorizontal{
	cards: string[]
}

const HorizontalScrollCarousel:React.FC<IHorizontal> = ({cards}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return ( 
    <section ref={targetRef} className="relative">
      <div className="items-center overflow-hidden overflow-x-scroll">
        <motion.div style={{ x }} className="flex">
          {cards.map((card:string) => {
            return <Card src={card} key={card} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;

interface CardProps {
	src: string;
}
export const Card: React.FC<CardProps> = ({ src }) => {
	//console.log(src)
	return (<>
	<div className="flex items-center gap-x-2">
	<div className='relative min-w-[500px] h-[200px]'>
	
			<Image className='absolute inset-0 rounded-xl' fill objectFit='contain' src={src} alt={src}   />
		
	</div>
	</div>

  {/* <div className="relative">
		<div className='w-[450px] h-[400px]'>
    <Image
      className="rounded-xl"
      src={src}
      alt={src}
		fill
			style={{objectFit: 'contain'}}
    />
  </div>
</div> */}
	</>
	);
};

// const Card = ({ src }:{src:any}) => {
//   return (
//     <div
//       key={src}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//         src
//         </p>
//       </div>
//     </div>
//   );
// };