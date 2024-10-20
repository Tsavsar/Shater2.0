"use client";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import MenuComponent from "./components/MenuComponent";
import Redirects from "./components/Redirects";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".tgt-slide");
    const list = document.querySelectorAll(".list-slide");
    const title = document.querySelectorAll(".title-slide");

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
        

          entry.target.classList.toggle("slide-in", entry.isIntersecting);
        }),
      { threshold: 0.5 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

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

    const RowObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.style.animationDelay = `${index * 0.3}s`;
            target.classList.add("title-slideIn");
          } else {
            target.classList.remove("title-slideIn");
          }
        }),
      { threshold: 0.1 }
    );

    title.forEach((el) => {
      RowObserver.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
      list.forEach((el) => {
        listObserver.unobserve(el);
      });
      title.forEach((el) => {
        RowObserver.unobserve(el);
      });
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="blur-overlay" /> {/* Fixed blur overlay */}
          <section className="responsive pt-16">
            <Navbar nav="About" navItl="me" navLink="/about" />
            <main className="pt-16">
              <ul className="identity f-p22 flex flex-wrap gap-2 min-[375px]:gap-[0.4rem] lg:gap-4 items-center text-[#464229] font-normal">
                <li className="title-slide">Product Designer</li>
                <hr className="divider" />
                <li className="title-slide">Writer</li>
                <hr className="title-slidedivider" />
                <li className="title-slide">Design Speaker</li>
              </ul>
              <h1 className=" py-5 text-[#19170E] text-5xl name font-mena800 lg:w-[12ch]">
                Mchiaga Tsavsar Shater{" "}
              </h1>
              {/* links */}
              <ul className="flex flex-wrap gap-4 utility-links">
                <li className=" ">
                  <a href="mailto:shatermt@gmail.com">
                    <Image
                      src="/images/email.svg"
                      alt="Mail Shater"
                      width={18}
                      height={18}
                    />
                    <span>
                      shatermt<span className="f-satoshi">@</span>gmail.com
                    </span>
                  </a>
                </li>
                <li className="">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/19aVwNnWcFTDrvArQ5fKqwSutcZRnnSbp/view?usp=drive_link"
                  >
                    <Image
                      src="/images/download.svg"
                      alt="Download CV"
                      width={18}
                      height={18}
                    />
                    Download CV
                  </a>
                </li>
                <li className="">
                  <a
                    target="_blank"
                    href="https://open.spotify.com/playlist/5bopKzHxH3tTAE2vt4GbQa?si=54fc1c9115d342d7"
                  >
                    <Image
                      src="/images/playlist.svg"
                      alt="Playlist"
                      width={18}
                      height={18}
                    />
                    Playlist
                  </a>
                </li>
              </ul>
              {/* about */}
              <p className="min-[375px]:w-[342px] md:w-auto f-satoshi font-normal text-base pt-10 text-[#464229]">
                Shater Tsavsar{" "}
                <span className="text-[#C3C1B8]">
                  ( /ˈʃɑː-teɪ/ /ˈtɑːv-sɑː/ )
                </span>{" "}
                — product designer by day, Knicks & Arsenal fan by night.
                Currently building{" "}
                <span className=".f-satoshi-medium">Opentape</span>
                <a target="_blank" href="https://www.opentape.io/">
                  <Image
                    src="/images/arrow.svg"
                    alt="What I'm currrently building"
                    width={14}
                    height={14}
                    style={{ display: "inline-block" }}
                  />
                </a>
                , my design approach focuses on solving real problems, <br />
                optimizing user journeys, and making every interaction seamless.
              </p>

              {/* socials */}
              <div className="flex gap-4 min-[375px]:w-[342px] md:w-auto  pb-10 pt-4 items-center">
                <Redirects
                  style="text-[#7C7C7C] f-satoshi text-[15px] leading-[22.5px]"
                  href="https://x.com/Tsavsar_/"
                  text="X(Twitter)"
                  alt="Shater's twitter"
                />
                <Redirects
                  style="text-[#7C7C7C] f-satoshi text-[15px] leading-[22.5px]"
                  href="#"
                  text="Linkedin"
                  alt="Shater's linkedin"
                />
                <Redirects
                  style="text-[#7C7C7C] f-satoshi text-[15px] leading-[22.5px]"
                  href="https://www.behance.net/gallery/194894477/Fundify"
                  text="Behance"
                  alt="Shater's behance"
                />
              </div>

              <MenuComponent />
            </main>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
