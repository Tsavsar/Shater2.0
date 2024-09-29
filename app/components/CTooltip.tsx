'use client';
import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

interface ICTooltip {
	parent?: string;
	text?: string;
}

const CTooltip: React.FC<ICTooltip> = () => {
	return (
		<div className="">
			<div>
				<a className="cursor-pointer" id="my-anchor-element-id">
					<Image src="/images/info.svg" alt="Info" width={24} height={24} />
				</a>
        {/* backgroundColor: '#fff', color: '#232323', */}
				<Tooltip anchorSelect="#my-anchor-element-id" style={{ borderRadius: '8px'}} className='rounded-md border border-[#F0EEE8] text-sm font-normal py-[6px] px-4'
        >
					<div className="bg-transparent w-[250px] min-[375px]:w-[300px] md:w-[550px] flex gap-3">
						<Image src="/images/info.svg" alt="Info" width={24} height={24} />
						<p>
							This section contains little to no Info on my professional life
							and it's purely personal vibes, enjoy! There's a surprise at the
							end.
						</p>
					</div>
				</Tooltip>
			</div>
		</div>
	);
};

export default CTooltip;
