"use client";
import Image from "next/image";
import Link from "next/link";
import { topAnime, musicArtist, books, formatDateTime } from "../utils";
import Arrow from "./Arrow";
import CTooltip from "./CTooltip";
import PlayName from "./PlayName";
import Redirects from "./Redirects";
import Socials from "./Socials";
import { ICurrTrack } from "../utils";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SpinnerAbout from "./SpinnerAbout";
import useNowPlaying from "../hooks/useNowPlaying";

const images = [
  "/images/shater-1.jpeg",
  "/images/shater-2.png",
  "/images/shater-3.png",
  "/images/shater-4.png",
  "/images/shater-5.png",
];

const imagestwo = [
  "/images/shater-6.png",
  "/images/shater-7.png",
  "/images/shater-8.png",
  "/images/shater-9.png",
];

export const About = () => {
  //const [currentTrack, setCurrentTrack] = useState<ICurrTrack | null>(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<unknown | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spiderMan, setSpiderMan] = useState(false);
  const [hoverSkull, setHoverSkull] = useState(false);
  const [hoverMartin, setHoverMartin] = useState(false);
  const [hoverJosh, setHoverJosh] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const TIME_TO_REFRESH = 10 * 1000;

  const {currentTrack, loading} = useNowPlaying()

  console.log(currentTrack)
  console.log(currentTrack.playedAt)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 500); //
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const imgslide = document.querySelectorAll(".image-slide");
    const slideTwo = document.querySelectorAll(".slide-two");

    const elObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            elObserver.unobserve(entry.target);
          } else {
            entry.target.classList.remove("slide-in");
          }
        }),
      { threshold: 0.5 }
    );

    slideTwo.forEach((el) => {
      elObserver.observe(el);
    });

    const imageObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.style.animationDelay = `${index * 0.3}s`;
            target.classList.add("i-animate");
            imageObserver.unobserve(target);
          } else {
            target.classList.remove("i-animate");
          }
        }),
      { threshold: 0.1 }
    );

    imgslide.forEach((el) => {
      imageObserver.observe(el);
    });

    return () => {
      slideTwo.forEach((el) => {
        elObserver.unobserve(el);
      });
      imgslide.forEach((el) => {
        imageObserver.unobserve(el);
      });
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <SpinnerAbout />
      ) : (
        <section className="responsive pt-16">
          <Navbar navItl="Home" navLink="/" />
          <main className={`pt-16`}>
            <article className="mb-16 overflow-hidden relative">
              <div className="overflow-hidden relative bg-[#F0EEE84D] p-[0.6rem] flex justify-between items-center border rounded-2xl border-[#F0EEE8]">
                <div className="flex items-center gap-3 ">
                  <Image
                    className="rounded-md bg-gray-50"
                    src={currentTrack?.image_url || "/images/shater-2.png"}
                    alt=""
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className=" flex gap-1 text-[#181817] text-lg f-satoshi-bold ">
                      <span className="break-music">
                        {currentTrack?.title || "Clueless"}
                      </span>
                      <Redirects
                        href={currentTrack?.url || "#"}
                        text={""}
                        alt="Currently playing"
                      />
                    </p>
                    <p className="text-[#979797] break-music text-sm f-satoshi">
                      {currentTrack?.artiste || "Black Bones"}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-[3.5rem] -top-[1.3rem]">
                  <Image
                    width={100}
                    height={178}
                    objectFit="contain"
                    className=" spinningImg"
                    src="/images/vinyl-2.svg"
                    alt="now playing"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                {currentTrack?.is_playing ? (
                  <>
                    <Image
                      src="/images/greendot.svg"
                      alt="currently playing"
                      width={12}
                      height={12}
                    />
                    <p className="f-satoshi-medium text-[#19170E] text-base">
                      Currently playing
                      <span>{formatDateTime(currentTrack?.playedAt)}</span>
                      <span>{currentTrack?.playedAt}</span>
                      {currentTrack?.playedAt &&
                      <span>
                        on {formatDateTime(currentTrack?.playedAt)}
                      </span>
                      }
                    </p>
                  </>
                ) : (
                  <>
                    <Image
                      src="/images/greydot.svg"
                      alt="currently playing"
                      width={12}
                      height={12}
                    />
                    <p className="f-satoshi-medium text-[#B4B4B4] text-base">
                      Last played
                    </p>
                  </>
                )}
              </div>
            </article>

            {/* section - page intro */}
            <div className="slide-two flex justify-between items-center">
              <h1 className="text-3xl f-p22 text-[#19170E]">
                About <span className="f-p22Italic">me.</span>
              </h1>

              <CTooltip />
            </div>
            {/* section - name */}
            <div className="relative">
              <p className="slide-two f-satoshi text-base text-[#464229] pt-5 pb-10">
                Alright, let’s do this one last time...... My name is{" "}
                <span
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="cursor-pointer"
                >
                  Shater D. Tsavsar.
                </span>
              </p>
              {isHovered && (
                <Image
                  src="/images/luffy.svg"
                  alt="hater D. Tsavsar"
                  width={190}
                  height={108}
                  className="dropdown-slide absolute left-[50%] -top-24 z-10"
                />
              )}
            </div>
            {/* section - name pronun */}
            <div className="slide-two f-satoshi md:flex justify-between items-center">
              <p className="text-[#19170E] text-3xl min-[375px]:text-[2.5rem] md:text-[3.35rem] leading-[60px] md:leading-[78px]">
                /ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/{" "}
              </p>
              <div>
                <PlayName />
              </div>
            </div>
            {/* section - about  */}
            <div className="slide-two pt-6 f-satoshi text-[#464229] text-base">
              <p className="relative">
                <span className="">
                  {" "}
                  And for the last couple of years I&apos;ve been the one and
                  only pixel pushing, Jesus loving, sports{" "}
                </span>{" "}
                analysing, anime power scaling, friendly
                <span className=""> neighbourhood </span>
                <span
                  onMouseEnter={() => setSpiderMan(true)}
                  onMouseLeave={() => setSpiderMan(false)}
                  className="cursor-pointer relative comic-neue-regular line-through text-[#46422966]"
                >
                  Spider-Man
                </span>{" "}
                {spiderMan && (
                  <Image
                    src="/images/spiderman.svg"
                    alt="Spider man"
                    width={122}
                    height={180}
                    className="dropdown-slide absolute -top-[25px] right-[28px] z-10"
                  />
                )}
                <span className="">Product Designer.</span>
              </p>
              <p className="py-5">
                I designed a bunch of products, worked with startups, crafted
                design systems, and then I designed again... and again and again
                and again. But after everything, I still love being a product
                designer. I mean, who wouldn&apos;t?
              </p>
              <p>
                So no matter how many challenges I face, I always find a way to
                come back. Because the only thing standing between bad design
                and the users is me. There&apos;s only one product designer like
                me.{" "}
                <span className="uppercase f-satoshi-medium">
                  And you&apos;re looking at him.
                </span>
              </p>
            </div>
            {/* socials */}
            <div className="pt-14">
              <p className="slide-two f-p22 text-[32px] leading-8 text-[#19170E]">
                I exist on the <span className="f-p22Italic">interwebs...</span>
              </p>
              <Socials />
            </div>
            {/* picture reel */}
            <div className="pt-14">
              <p className="f-p22 text-[32px] leading-8 text-[#19170E]">
                Enjoy this show reel of pictures.......
                <span className="slide-two ml-1 f-p22Italic text-base text-[#B1AFA4]">
                  or dont
                </span>
              </p>
              {/* mobile photo */}
              <section className="mt-7">
                {/* flex flex-wrap gap-[10px] w-[343px] md:w-[680px] */}
                <div className="hidden w-[610px] overflow-hidden">
                  {/* <img className="w-[160px] h-[250px] rounded-tr-[16px] rounded-br-[16px] object-cover md:w-[80px] hidden md:block" src="/images/shater-1.jpeg" alt="Image 1" /> */}
                  <div className=" flex gap-[10px] w-[680px] whitespace-nowrap">
                    {images.map((src, index) => (
                      <div
                        key={index}
                        className={`relative w-[160px] h-[250px] ${
                          index === 0 ? "w-[100px]" : ""
                        }`}
                      >
                        <Image
                          className={`rounded-2xl ${
                            index === 0 ? "rounded-l-none" : ""
                          }`}
                          src={src}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-[10px] overflow-x-scroll whitespace-nowrap">
                    {imagestwo.map((src, index) => (
                      <div
                        key={index}
                        className={`relative w-[160px] h-[250px] ${
                          index === 0 ? "w-[100px]" : ""
                        }`}
                      >
                        <Image
                          className={`rounded-2xl`}
                          src={src}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

        
    <div className="relative overflow-hidden w-full h-[250px]">
      {/* Scrolling content */}
      <div className="flex gap-[10px] animate-scroll">
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative w-[160px] h-[250px] flex-shrink-0"
          >
            <Image
              className="rounded-2xl"
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-3 relative overflow-hidden w-full h-[250px]">
      {/* Scrolling content */}
      <div className="flex gap-[10px] animate-scroll-two">
        {[...imagestwo, ...imagestwo].map((src, index) => (
          <div
            key={index}
            className="relative w-[160px] h-[250px] flex-shrink-0"
          >
            <Image
              className="rounded-2xl"
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  


              </section>
            </div>
            {/* useful facts */}
            <div className="pt-14 ">
              <div className="relative">
                <span className="md:absolute md:-left-[65px] md:top-1 f-p22Italic text-base text-[#B1AFA49C] block">
                  not so<span className="f-satoshi">*</span>
                </span>
                <p className="slide-two f-p22 text-[32px] leading-8 text-[#19170E]">
                  {" "}
                  Useful facts about <span className="f-p22Italic">me</span>
                </p>
              </div>
              <div className="pt-5 text-[#232323] f-satoshi-medium text-base">
                <p className="slide-two ">
                  Fueled by faith and guided by grace.
                </p>
                <div className="pt-8 flex flex-col md:flex-row gap-3 md:justify-between">
                  <p className="slide-two min-[375px]:w-[329px]">
                    These 3 usually keep me up at night. I also own a lot of
                    jerseys.
                  </p>
                  <div className="flex items-center gap-8">
                    <Image
                      src="/images/gun1.svg"
                      alt="interests"
                      width={90}
                      height={41}
                      className="grayscale opacity-5 hover:opacity-100 hover:grayscale-0"
                    />
                    <Image
                      src="/images/knicks.svg"
                      alt="interests"
                      width={88}
                      height={33}
                      className="grayscale opacity-15 hover:opacity-100 hover:grayscale-0"
                    />
                    <Image
                      src="/images/hawk.svg"
                      alt="interests"
                      width={90}
                      height={37}
                      className="grayscale opacity-15 hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                </div>
                {/* i make great playlist... */}
                <p className="slide-two pt-8 min-[390px]:w-[342px] md:w-auto">
                  I make <span className="f-satoshi-bold">AMAZING</span>{" "}
                  playlists, follow me on{" "}
                  <Link
                    href="https://open.spotify.com/user/313xafwvqml3ot3ewtswx5p3r6aq?si=1601ce0a2e0e43e9"
                    target="_blank"
                  >
                    Spotify
                    <Image
                      src="/images/arrow.svg"
                      alt="Follow my spotify account"
                      width={14}
                      height={14}
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <span className="ml-1">
                    if you&apos;re looking for new music!!
                  </span>
                </p>
                {/* currently watching... */}
                <div className="flex items-center pt-8">
                  <div className="md:w-[464px]">
                    <p className="slide-two ">
                      I&apos;m currently on Episode 700 of One Piece! I also own
                      a number of anime figures.
                    </p>
                    <p className="pt-5 f-satoshi-bold">
                      Here&apos;s my top 5 anime:
                    </p>
                  </div>
                  <Image
                    className="hidden md:block grayscale hover:grayscale-0 transition-transform duration-500 ease-in-out"
                    src={hoverSkull ? "/images/skull.svg" : "/images/anime.svg"}
                    alt="I watch a lot of anime"
                    width={191}
                    height={69}
                    onMouseEnter={() => setHoverSkull(true)}
                    onMouseLeave={() => setHoverSkull(false)}
                    style={{
                      transform: hoverSkull ? "scale(1.02)" : "scale(1)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  />
                  {/* <div
      className="inline-block"
      onMouseEnter={() => setHoverSkull(true)}
      onMouseLeave={() => setHoverSkull(false)}
    >
      <Image
        className="hidden md:block grayscale hover:grayscale-0 transition-transform duration-500 ease-in-out"
        src={hoverSkull ? "/images/skull.svg" : "/images/anime.svg"}
        alt="I watch a lot of anime"
        width={191}
        height={69}
        style={{
          transform: hoverSkull ? 'scale(1.05)' : 'scale(1)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      />
    </div> */}
                </div>

                {/*  anime list */}
                <div className="slide-two flex flex-wrap gap-3 pt-2">
                  {topAnime.map((item) => (
                    <Link key={item.title} href={item.link}>
                      {item.title}
                      <Arrow alt={item.title} />
                    </Link>
                  ))}
                </div>
                {/* x-box */}
                <p className="slide-two py-8">
                  I&apos;ve been using xbox for over 15 years, I currently use a
                  series S
                </p>
                {/* fav sports man */}
                <p className="slide-two pb-8 relative">
                  My favourite basketball player is{" "}
                  <Link
                    onMouseEnter={() => setHoverJosh(true)}
                    onMouseLeave={() => setHoverJosh(false)}
                    target="_blank"
                    href="https://www.espn.com/nba/player/_/id/3062679/josh-hart"
                    className="relative"
                  >
                    Josh Hart <Arrow alt="Josh Hart" />
                    {hoverJosh && (
                      <Image
                        src="/images/joshhart.svg"
                        alt="Spider man"
                        width={190}
                        height={108}
                        className="dropdown-slide absolute -top-14 right-0 z-10"
                      />
                    )}
                  </Link>{" "}
                  and my favourite football player is{" "}
                  <Link
                    onMouseEnter={() => setHoverMartin(true)}
                    onMouseLeave={() => setHoverMartin(false)}
                    target="_blank"
                    href="https://www.transfermarkt.com/martin-odegaard/profil/spieler/316264"
                    className="relative"
                  >
                    Martin Ødegaard
                    <Arrow alt="Martin" />
                  </Link>
                  {hoverMartin && (
                    <Image
                      src="/images/martin.svg"
                      alt="Spider man"
                      width={122}
                      height={180}
                      className="absolute dropdown-slide left-[15%] -top-4 z-10"
                    />
                  )}
                </p>
                {/* music taste */}
                <div className="pb-8">
                  <p className="text-[#232323]">
                    5 Artists to explain my music taste
                  </p>
                  <div className="slide-two flex flex-wrap gap-3 pt-2">
                    {musicArtist.map((item) => (
                      <Link
                        className="text-[#19170E]"
                        key={item.title}
                        href={item.link}
                      >
                        {item.title}
                        <Arrow alt={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* chess */}
                <p className="slide-two pb-8 text-[#232323]">
                  I play a lot of chess and my favourite opening is the{" "}
                  <Redirects
                    href="https://www.chess.com/openings/Queens-Pawn-Opening-Chigorin-Variation"
                    text="Queen's Pawn: Chigorin Variation"
                    alt="Queen's Pawn: Chigorin Variation"
                  />{" "}
                  with white and the{" "}
                  <Redirects
                    href="https://www.chess.com/openings/Kings-Pawn-Opening"
                    alt="King's Pawn Opening"
                    text="King's Pawn Opening"
                  />{" "}
                  with black.
                </p>

                {/* books */}
                <div className="pb-8">
                  <p className=" text-[#232323]">
                    I read a little and these are my favourite books;
                  </p>
                  <div className="slide-two flex flex-wrap gap-3 pt-2">
                    {books.map((item) => (
                      <Link
                        className="text-[#19170E]"
                        key={item.title}
                        href={item.link}
                      >
                        {item.title}
                        <Arrow alt={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border border-[#F0EEE8] rounded-md flex justify-between items-center py-3 px-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/gift.svg"
                    alt="gift for you"
                    width={24}
                    height={24}
                  />
                  <p className="f-satoshi text-[#232323] text-[15px] leading-[19.5px]">
                    I promised you a surprise so here you go.{" "}
                  </p>
                </div>
                <Link
                  className="min-[375px]:w-[28%] md:w-auto text-sm text-[#0A231D] f-p22 motion-safe:animate-bounce "
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  Click{" "}
                  <span className="f-p22Italic">
                    me<span className="f-satoshi">!</span>
                  </span>
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </section>
      )}
    </>
  );
};

export default About;
