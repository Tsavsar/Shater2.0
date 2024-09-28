import React from 'react'
import { educationData } from '../utils'
import Image from 'next/image'

const Education = () => {
  return (
		<div className="f-satoshi">
      	<p className="font-normal text-base text-[#464229]">
				From textbooks to tech, here's where I hit the books and built the foundation for my design career.
			</p>

      <>
				{educationData.map((item) => (
					<div className="pt-10" key={item.title}>
						<div className="md:flex md:items-center md:justify-between">
							<div className="flex items-center gap-4">
                <div>
								<Image src={item.logo} alt="Project" width={60} height={60} />
                </div>
								<div>
									<div className="grid md:flex items-center md:gap-2">
										<h2 className="f-satoshi-bold text-lg text-[#19170E] ">
											{item.title}
										</h2>
										<span className="text-[#C3C1B8] text-[12px] leading-[15px]">
											{item.date}
										</span>
									</div>
									<p className="text-sm flex gap-2 items-center text-[#7C7C7C] min-[375px]:w-[266px] md:w-[315px] font-normal">
										{item.education}
										<hr className="divider" />
										{item.location}
									</p>
								</div>
							</div>
						</div>
            <div className="flex">
              <div className="hidden md:flex justify-center w-[10%] mt-5">
              <hr className='h-[61px] divider-2'/>
              </div>
              <div>
						<p className="text-[#464229] md:w-[591px] text-base pt-4">{item.note}</p>
              </div>
            </div>
					</div>
				))}
			</>
      </div>
  )
}

export default Education