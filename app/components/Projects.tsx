'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../utils';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView  } from 'framer-motion';

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
								<Image   className='rounded-[15px]' src={item.logo} alt="Project"  width={69}
  height={69}
  sizes="(max-width: 768px) 60px, 69px"  />
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
								<Link target='_blank' href={item.behance}>
									<Image
										src="/images/behance.svg"
										alt="view on behance"
										width={135}
										height={100}
									/>
								</Link>
								<Link target='_blank' href={item.figma}>
									<Image
										src="/images/figma.svg"
										alt="view on figma"
										width={147}
										height={100}
									/>
								</Link>
							</div>
						</div>
						<p className="text-[#19170E] f-satoshi-bold text-lg md:text-xl pt-4">
							Preview
						</p>
						<div className="text-[#464229] text-sm md:text-base">
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

  const x = useTransform(scrollYProgress, [0, 1], ["-32%", "0%"]);

	const controls = useAnimation();

  const isInView = useInView(targetRef); 

  useEffect(() => {
    if (isInView) {
      controls.start({ x: '-100%', transition: { duration: 10, ease: "linear" } });
    } else {
      controls.stop(); 
    }
  }, [isInView, controls]);
	
	return ( 
    <section ref={targetRef} className="mt-6 relative">
      <div className="items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
				{[...cards, ...cards].map((card: string, index: number) => (
            <Image
              key={index}
              src={card}
              alt={`project preview ${index + 1}`}
              width={index % cards.length === 0 ? 510 : 165}  // Larger width for the first card
              height={index % cards.length === 0 ? 260 : 100} // Larger height for the first card
              // className="rounded-[12px] mr-4"
							className={`rounded-[12px] mr-4 ${index % cards.length === 0 ? 'w-[342px] md:w-[550px] h-[203px] md:h-[252px]' : 'w-[165px] h-[203px] md:h-[260px]'}`}  // Small width = 365, larger = 510

            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;
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