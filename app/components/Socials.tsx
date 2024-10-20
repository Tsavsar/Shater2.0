'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const Socials = () => {
	useEffect(() => {
		const list = document.querySelectorAll(".list-slide");
	
		const listObserver = new IntersectionObserver(
		  (entries) =>
			entries.forEach((entry, index) => {
			  const target = entry.target as HTMLElement;
	
			  if (entry.isIntersecting) {
				target.style.animationDelay = `${index * 0.3}s`;
				target.classList.add("c-animate");
				listObserver.unobserve(target);
			  } else {
				target.classList.remove("c-animate");
			  }
			}),
		  { threshold: 0.1 }
		);
	
		list.forEach((el) => {
		  listObserver.observe(el);
		});
	
		return () => {
		  list.forEach((el) => {
			listObserver.unobserve(el);
		  })
		};
	  }, []);

	return (
		<ul className="list-slide f-satoshi pt-6 flex flex-col md:flex-row md:w-[669px] md:flex-wrap md:gap-2">
			<li>
				<Link
          target='_blank'
					className="text-[#19170E] text-lg font-medium"
					href="https://x.com/Tsavsar_/">
					<span className="f-satoshi-medium">Twitter</span>{' '}
					<span className="text-sm text-[#B1AFA4]">
						for Valorant clips and sports rants.
					</span>
					<Image
						src="/images/arrow.svg"
						alt="Find my twitter account"
						width={14}
						height={14}
						style={{ display: 'inline-block' }}
					/>
				</Link>
			</li>

			<li>
				<Link
          target='_blank'
					className="text-[#19170E] text-lg font-medium"
					href="https://www.instagram.com/tsavsar__/">
					<span className="f-satoshi-medium">Instagram</span>{' '}
					<span className="text-sm text-[#B1AFA4]">
						for fits, vibes, and music
					</span>
					<Image
						src="/images/arrow.svg"
						alt="Find my twitter account"
						width={14}
						height={14}
						style={{ display: 'inline-block' }}
					/>
				</Link>
			</li>
			<li>
				<Link
        target='_blank'
					className="text-[#19170E] text-lg font-medium"
					href="https://www.pinterest.com/Tsavsar_/">
					<span className="f-satoshi-medium">Pinterest</span>{' '}
					<span className="text-sm text-[#B1AFA4]">
						picture of my car and the sky
					</span>
					<Image
						src="/images/arrow.svg"
						alt="Find my twitter account"
						width={14}
						height={14}
						style={{ display: 'inline-block' }}
					/>
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
