"use client"

import ClientContainer from "@/app/containers/ClientContainer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from 'react-icons/fi'

export default function Page(){
    return(
        <ClientContainer pageName="Fundify">
            <section className="responsive pt-16">
                <Navbar navItl="Home" navLink="/" />
                <main className={`pt-16 responsive`}>
                    <div className="flex items-center gap-2 f-p22">
                        <Link href='/'>Back to home</Link> <span className="f-satoshi">/</span> <Link href='/case-studies/fundify'>Fundify</Link>
                    </div>
                    <div className="w-full h-[250px] mt-4 relative">
                        <Image
                            src={'/images/fundify-2/Slide01.png'}
                            alt=""
                            fill
                            objectFit="cover"
                            className="rounded-2xl md:rounded-3xl"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <h1 className="text-3xl font-extrabold md:text-4xl f-satoshi mt-5">Fundify</h1>
                        <div className="flex items-center justify-between gap-2 mt-3">
                            <p className="text-[#1a1a1a] f-satoshi">7 min read <span className="opacity-0"> | </span> Febuary 5th, 2024</p>
                            <div className="flex items-center gap-2">
                                <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Behance <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                                <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Figma <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                                <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Download PDF <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                            </div>
                        </div>
                        <p className="text-base mt-7 f-satoshi text-black-text">Fundify was a task given to me by a company, thankfully i passed and eventually got the job. Here’s a break Down of what went into designing this product while hitting all the edges and requirements.</p>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Requirements for the task,  </h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Design a modern banking app.</span></p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Incorporate gamification features and reward system.</span></p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Prioritise enhancing user engagement and loyalty.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 space-y-4" data-aos="fade-up" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">The goal</h3>
                        <p className="text-base mt-5 f-satoshi text-black-text">Create a style that offers loyalty rewards for users with points that they collect over time through completing transactions or referrals. They can then exchange these points for cool perks.</p>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Demographics</h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Age:</span> Primarily 18-45 years old</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Occupation:</span> Young professionals, freelancers, and small business owners.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Location:</span> Urban and suburban areas with access to mobile banking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Needs</h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Simplified financial management.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Incentives for loyalty and continued usage.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Transparent and intuitive navigation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Behavioral Insights and User Goals</h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Users seek apps that reduce friction in completing financial tasks.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">They value personalization, such as rewards tailored to spending habits.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Users are more likely to engage with platforms that align with their aspirations, whether saving money, earning perks, or building financial discipline.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 space-y-5" data-aos="fade-up" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Research insight</h3>
                        <p className="text-base f-satoshi text-black-text">So rewards tap into fundamental human motivators, making users more likely to engage and return to the app when we explore topics like behavioural science and cognitive psychology.</p>
                        <div className="space-y-3" data-aos="fade-up">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Dopamine and Pleasure</span></p>
                            </div>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Mechanism:</span> Rewards trigger the release of dopamine, a neurotransmitter associated with pleasure and motivation. This creates a sense of satisfaction and reinforces the behaviour that led to the reward.</p>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Application:</span> When users earn points, badges, or discounts for completing tasks (e.g., making transactions), they experience a sense of achievement, encouraging repeat behaviour.</p>
                        </div>
                        <div className="space-y-3" data-aos="fade-up">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Operant Conditioning</span></p>
                            </div>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Mechanism:</span> Rewards are a form of positive reinforcement, a principle of operant conditioning. By providing a desirable outcome after a specific action, the app conditions users to repeat that behavior.</p>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Application:</span> For instance, rewarding users for consistent activity, like daily logins or transactions, conditions them to form habits around app usage.</p>
                        </div>
                        <div className="space-y-3" data-aos="fade-up">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Goal-Oriented Behavior</span></p>
                            </div>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Mechanism:</span> Humans are goal-driven, and rewards help structure a clear path to achieve those goals. Progress tracking (showing how close a user is to earning a reward) motivates users to complete tasks.</p>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Application:</span> Displaying progress bars, milestone badges, or “next reward unlocks at X points” creates a sense of purpose and drives continued engagement.</p>
                        </div>
                        <div className="space-y-3" data-aos="fade-up">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Habit Formation</span></p>
                            </div>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Mechanism:</span> Repeating actions to earn rewards helps build habits. Over time, users associate the app with positive outcomes, making it a regular part of their routine.</p>
                            <p className="f-satoshi text-black-text"><span className="font-semibold">Application:</span> Daily challenges or streak rewards (e.g., bonus points for using the app multiple days in a row) capitalize on habit loops.</p>
                        </div>
                    </div>
                    <div className="mt-7 space-y-5" data-aos="fade-up" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Execution</h3>
                        <p className="text-base f-satoshi text-black-text">Here’s what I came up with, now users can earn FundCoins by referrals, daily logins, completing tasks and what not, these tasks can be updated as time goes on making things fresh for the users and keeping them engaged in the grind. They can then exchange the points for benefits on the app.</p>
                        <div className="relative w-full h-[350px] mt-5 py-10 rounded-2xl md:rounded-3xl overflow-hidden">
                            <Image
                                src={'/images/fundify-2/Slide10.png'}
                                alt="fundify prototype"
                                fill
                                objectFit="cover"
                                className="rounded-2xl md:rounded-3xl hover:scale-105 ease-in-out duration-300"
                            />
                        </div>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Expected results</h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Apps with gamified rewards systems (like Duolingo) report significantly higher daily engagement rates (up to 3–4x more) compared to non-gamified alternatives.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Starbucks’ rewards program increased average weekly visits by 25% after implementing personalized point rewards.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">In loot-box style rewards, CTR increases by up to 60% due to the thrill of uncertainty.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Fitbit users who set goals and received rewards for progress showed a 27% increase in step counts over a month.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1">Duolingo’s streak feature improved DAU by 40% among users engaging in daily lessons.</p>
                            </div>
                        </div>
                        <p className="f-satoshi text-black-text mt-5">It's clear that systems who have implemented these psychological methods have seen a solid response from their user base, we can expect the same positive response in this case as well.</p>
                    </div>
                    <div className="mt-7 space-y-5" data-aos="fade-up" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Prototype</h3>
                        <div className="relative w-full h-[350px] mt-5 py-10 rounded-2xl md:rounded-3xl overflow-hidden">
                            <Image
                                src={'/images/fundify-2/Slide10.png'}
                                alt="fundify prototype"
                                fill
                                objectFit="cover"
                                className="rounded-2xl md:rounded-3xl hover:scale-105 ease-in-out duration-300"
                            />
                        </div>
                    </div>
                    <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Here are some takeaways from this project.</h3>
                        <div className="mt-4 space-y-3">
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">The Power of User-Centered Design:</span> This project reaffirmed the importance of placing users at the center of the design process. By conducting thorough research and usability testing, we were able to create an app that addressed key pain points while aligning with user goals. Understanding behaviours and motivations—like the psychological drivers behind rewards—was critical in designing features that were both engaging and functional.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Balancing Simplicity with Engagement:</span> The challenge of integrating a gamified rewards system taught the importance of maintaining simplicity while adding value. Clear navigation and intuitive flows ensured users could easily complete tasks without feeling overwhelmed by additional features.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Personalization Drives Loyalty:</span> A significant insight was the impact of personalized rewards. Offering options tailored to user preferences not only increased engagement but also fostered a sense of ownership and loyalty toward the platform.</p>
                            </div>
                            <div className="f-satoshi text-black-text flex gap-2"> 
                                <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                                <p className="flex-1"><span className="font-semibold">Iterative Design Leads to Better Results:</span> The iterative process, including feedback loops and refinements, highlighted how critical it is to stay flexible and open to changes. Each iteration brought us closer to a seamless and enjoyable user experience, demonstrating the value of continuous improvement.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </ClientContainer>
    )
}