"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from 'react-icons/fi'

import ClientContainer from "@/app/containers/ClientContainer";

export default function Page(){

    return(
        <ClientContainer pageName="Weave Finance">
        <section className="responsive pt-16">
            <Navbar navItl="Home" navLink="/" />
            <main className={`pt-16 responsive`}>
                <div className="flex items-center gap-2 f-p22">
                    <Link href='/'>Back to home</Link> <span className="f-satoshi">/</span> <Link href='/case-studies/weave-finance'>Weave Finance</Link>
                </div>
                <div className="w-full h-[250px] mt-4 relative">
                    <Image
                        src={'/images/weave-display-image.png'}
                        alt=""
                        fill
                        objectFit="cover"
                        className="rounded-2xl md:rounded-3xl"
                    />
                </div>
                <div data-aos="fade-up">
                    <h1 className="text-3xl font-extrabold md:text-4xl f-satoshi mt-5">Weave Finance</h1>
                    <div className="flex items-center justify-between gap-2 mt-3">
                        <p className="text-[#1a1a1a] f-satoshi">7 min read <span className="opacity-0"> | </span> December 23rd, 2024</p>
                        <div className="flex items-center gap-2">
                            <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Behance <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                            <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Figma <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                            <Link href={'/'} className="flex items-center gap-2 hover:gap-3 duration-300 ease-in-out text-[#9E9E9E] f-satoshi group">Download PDF <FiArrowUpRight size={18} className="group-hover:rotate-45 duration-300 ease-in-out" /> </Link>
                        </div>
                    </div>
                    <p className="text-base mt-7 f-satoshi text-black-text">Weave is a fintech solution based in Norway, created by me to showcase my real-world problem-solving abilities, as well as my approach to developing a product that is ready for that market.</p>
                </div>
                <div className="mt-7" data-aos="fade-up" data-aos-delay="100" data-aos-offest="100">
                    <h3 className="text-lg font-extrabold text-black f-satoshi">Weave has 4 primary issues it was created to solve, </h3>
                    <div className="mt-4 space-y-3">
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Subscription Inflexibility:</span> Services like Spotify don’t offer long-term plans, making it hard for users to prepay for multiple years.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Unauthorized Charges:</span> Users face random chargebacks or accidental charges from trials or untrusted platforms.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Group Payment Complexity:</span> Splitting shared expenses (e.g., group subscriptions) is cumbersome without a centralized solution.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Data Security Concerns:</span> Sharing primary card details on untrusted platforms increases the risk of fraud or misuse.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offest="100">
                    <div className="mt-7 space-y-4">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">The goal</h3>
                        <p className="text-base mt-5 f-satoshi text-black-text">Weave is a fintech solution based in Norway, created by me to showcase my real-world problem-solving abilities, as well as my approach to developing a product that is ready for that market.</p>
                    </div>
                    <div className="w-full h-[250px] mt-7 relative">
                        <Image
                            src={'/images/weave-cards-image.png'}
                            alt=""
                            fill
                            objectFit="cover"
                            className="rounded-2xl md:rounded-3xl"
                        />
                    </div>
                </div>
                <div className="mt-7 space-y-4" data-aos="fade-up" data-aos-offest="100">
                    <h3 className="text-lg font-extrabold text-black f-satoshi">Research insight</h3>
                    <p className="text-base f-satoshi text-black-text">My research was conducted with a sample pool of highly educated and tech savvy individuals around the age range of 16 to 35, from tech enthusiasts to music artists to business owners. I tried my best to simulate the environment where Weave would be used, Norway. Now why Norway?</p>
                    <p className="text-base f-satoshi text-black-text">Norway’s focus on sustainability aligns with our vision, creating a market eager for green financing and impactful financial tools.</p>
                    <p className="text-base f-satoshi text-black-text">Norway has a high adoption rate of digital banking services, with traditional banks across the country readily embracing them. For instance, mobile apps like Vipps specialize in P2P transfers and integrated online shopping. <br /> <span className="text-sm text-[#4F4F4F]">As a bonus, being an Arsenal fan, I have a slight bias towards Martin Ødegaard</span></p>
                    <p className="text-base f-satoshi text-black-text">It was a journey to answer the question, “What do users want?”</p>
                    <p className="text-base f-satoshi text-black-text">I conducted a poll to address a few questions: How many people use their bank’s mobile app daily? How many people have multiple subscriptions linked to one card? How many people would like to have a one-time card?</p>
                    <p className="text-base f-satoshi text-black-text">The researched showed;</p>
                    <div className="space-y-3" >
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1">Disposable virtual cards have gained traction as 67% of users feel safer using them for online transactions or trials.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1">Millennials and Gen Z represent the largest groups managing shared expenses, with 72% saying they frequently split bills for rent, streaming services, or group activities.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1">Automated subscriptions reduce user churn and increase satisfaction, with 82% of users preferring “set it and forget it” models.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1">64% of respondents said they prefer apps that consolidate multiple financial tasks into one platform.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-7" data-aos="fade-up">
                    <h3 className="text-lg font-extrabold text-black f-satoshi">Key objectives</h3>
                    <div className="mt-4 space-y-3">
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Simplify Subscription Management:</span> Provide users with a hassle-free way to manage recurring payments by offering options for long-term, automated plans like Weave Sub.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Enhance Transaction Security:</span> Protect users from unauthorized charges and fraud by offering temporary, disposable cards through Quick Weave.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Facilitate Shared Payments:</span> Make it seamless for groups to pool resources and manage shared expenses via Weave Spend’s group payment features.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Deliver User-Friendly Financial Tools:</span> Ensure the platform is intuitive and accessible, offering clear, practical solutions for common financial challenges.</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-base font-extrabold text-black f-satoshi mt-7" data-aos="fade-up">Proposed solutions</h3>
                <div>
                    {/* weave sub section */}
                    <div className="mt-7 space-y-4" data-aos="fade-up">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Weave Sub</h3>
                        <p className="f-satoshi text-black-text"><span className="font-semibold">Weave Sub:</span> Set up payments for apps like Spotify with no long-term plans. Users send money to a card, stored securely, for fully automated multi-year subscriptions.</p>
                        <p className="f-satoshi text-black-text">When designing Weave Sub, I carefully considered its engineering aspects. Users are prompted to create a card, and after funding it, they can add subscriptions.</p>
                        <p className="f-satoshi text-black-text">Once completed, they are directed to a page where they can view an overview, recent transactions on the card, and access additional details about it.</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-2 w-full" >
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up">
                            <Image
                                src={'/images/weave-sub-phone-1.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="50">
                            <Image
                                src={'/images/weave-sub-phone-2.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="100">
                            <Image
                                src={'/images/weave-sub-phone-3.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="150">
                            <Image
                                src={'/images/weave-sub-phone-4.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="200">
                            <Image
                                src={'/images/weave-sub-phone-5.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="250">
                            <Image
                                src={'/images/weave-sub-phone-6.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <p className="f-satoshi text-black-text mt-5">There is also a dedicated page for managing all their subscriptions, allowing users to adjust payment plans, freeze or cancel subscriptions, and add new ones. Additionally, users can view and download receipts for all previous payments made. <br /><br />Prototype:</p>
                        <div className="relative w-full h-[250px] mt-5 py-10">
                            <Image
                                src={'/images/weave-sub-prototype-image.png'}
                                alt="weave sub prototype"
                                fill
                                objectFit="contain"
                                className="rounded-2xl md:rounded-3xl"
                            />
                            <div className="h-full w-full bg-black/10 absolute top-0 left-0 rounded-2xl md:rounded-3x" />
                        </div>
                    </div>
                </div>
                <div>
                    {/* Quick Weave section */}
                    <div className="mt-7 space-y-4" data-aos="fade-up">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Quick Weave</h3>
                        <p className="f-satoshi text-black-text">
                            The biggest headache in this project was creating a solution unique to our platform, and I used Privacy as a significant source of inspiration. The challenge was that they handle third-party payments as funding sources, and I wasn&apos;t sure if I wanted to make my users do the same.
                            <br />
                            <br /> 
                            I realized that bypassing the fund card section and directly linking the one-time payment card to the user&apos;s personal account balance could significantly simplify the process, enhancing user experience and increasing the security of the product.
                        </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-2 w-full">
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up">
                            <Image
                                src={'/images/weave-quick-phone-1.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="50">
                            <Image
                                src={'/images/weave-quick-phone-2.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="100">
                            <Image
                                src={'/images/weave-quick-phone-3.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="150">
                            <Image
                                src={'/images/weave-quick-phone-4.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="200">
                            <Image
                                src={'/images/weave-quick-phone-5.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="250">
                            <Image
                                src={'/images/weave-sub-phone-6.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <p className="f-satoshi text-black-text mt-5">Another interesting design feature is the ability to see why a transaction failed. For instance, if I buy something on Amazon or a less reputable site, I wouldn&apos;t expect to be charged again in the middle of the night. However, when that happens, the system logs it, allowing you to see when a website attempted to charge you. <br /><br />Prototype:</p>
                        <div className="relative w-full h-[250px] mt-5 py-10">
                            <Image
                                src={'/images/weave-sub-prototype-image.png'}
                                alt="weave sub prototype"
                                fill
                                objectFit="contain"
                                className="rounded-2xl md:rounded-3xl"
                            />
                            <div className="h-full w-full bg-black/10 absolute top-0 left-0 rounded-2xl md:rounded-3x" />
                        </div>
                    </div>
                </div>
                <div>
                    {/* Weave Spend section */}
                    <div className="mt-7 space-y-4" data-aos="fade-up">
                        <h3 className="text-lg font-extrabold text-black f-satoshi">Quick Weave</h3>
                        <p className="f-satoshi text-black-text">
                            One of the challenges that made understanding Weave so difficult was the question of &quot;Why&quot;? For instance, why not just pool funds into one person&apos;s account instead of going through all this? It&apos;s a great question. 
                            <br />
                            <br />
                            My answer lies in management. I once worked in an office where multiple contributions were happening simultaneously, and we used an app that facilitated this process. It was a lifesaver for the person managing the funds, as I mentioned earlier.
                        </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-2 w-full">
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up">
                            <Image
                                src={'/images/weave-spend-phone-1.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="50">
                            <Image
                                src={'/images/weave-spend-phone-2.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="100">
                            <Image
                                src={'/images/weave-spend-phone-3.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="150">
                            <Image
                                src={'/images/weave-spend-phone-4.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative" data-aos="fade-up" data-aos-delay="200">
                            <Image
                                src={'/images/weave-spend-phone-5.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <div className="h-[250px] w-[200px] relative"data-aos="fade-up" data-aos-delay="250">
                            <Image
                                src={'/images/weave-spend-phone-6.png'}
                                alt=""
                                fill
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <p className="f-satoshi text-black-text mt-5">This experience led me to increase the number of cards a user can have on their account, allowing for the creation of multiple cards for various occasions. <br /><br />Prototype:</p>
                        <div className="relative w-full h-[250px] mt-5 py-10">
                            <Image
                                src={'/images/weave-sub-prototype-image.png'}
                                alt="weave sub prototype"
                                fill
                                objectFit="contain"
                                className="rounded-2xl md:rounded-3xl"
                            />
                            <div className="h-full w-full bg-black/10 absolute top-0 left-0 rounded-2xl md:rounded-3x" />
                        </div>
                    </div>
                </div>
                <div className="mt-7" data-aos="fade-up">
                    <h3 className="text-lg font-extrabold text-black f-satoshi">Here are some takeaways from this project.</h3>
                    <div className="mt-4 space-y-3">
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Engineers Will Hate Me:</span> While discussing this with several people, the main response was, &quot;And who will code it?&quot; With my background in coding, I completely understood their perspective, but it would certainly be interesting.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">A Lot Hole:</span> During the prototyping phase, I realized that there were many gaps in the project, which is concerning for a product that aims to launch. However, I see this more as a proof of concept, so please excuse any gaps and typos throughout the document; I am only human.</p>
                        </div>
                        <div className="f-satoshi text-black-text flex gap-2"> 
                            <div className="h-[5px] w-[5px] rounded-full bg-black mt-3" /> 
                            <p className="flex-1"><span className="font-semibold">Functionality Is Key:</span> Throughout this process, there were moments when I thought, &quot;Hey, this looks cool, but it doesn&apos;t work.&quot; I didn&apos;t design any visuals until there was a clear experience and idea in place, and that is truly what drives a product.</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </ClientContainer>
    )
}