import Link from 'next/link';
import Image from 'next/image';

const Socials = () => {
	return (
		<ul className="f-satoshi pt-6 flex flex-col md:flex-row md:w-[669px] md:flex-wrap md:gap-2">
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
