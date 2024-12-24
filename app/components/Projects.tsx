"use client";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../utils";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import Modal from "./Modal";

const Projects = () => {
  const [isEllipsisActive, setIsEllipsisActive] = useState("");

  const toggleEllipsis = (word: string) => {
    const value = word.toLowerCase();
    if (value === isEllipsisActive) {
      setIsEllipsisActive("");
    } else {
      setIsEllipsisActive(value);
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".tgt-slide");

    const observer = new IntersectionObserver(entries =>
      entries.forEach(
        entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("slide-in");
          }
        },
        { threshold: 0.5 }
      )
    );

    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="f-satoshi">
      <p className="tgt-slide font-normal text-base text-[#464229]">
        A collection of projects I’ve worked on in the process of learning and improving as a designer and to also show
        my ability to solve issues with design.
      </p>

      <>
        {projectsData.map(item => (
          <div className="tgt-slide pt-10" key={item.title}>
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-[15px]"
                  src={item.logo}
                  alt="Project"
                  width={69}
                  height={69}
                  sizes="(max-width: 768px) 60px, 69px"
                  placeholder="blur"
                  blurDataURL={item.base}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="f-satoshi-bold text-lg text-[#19170E] ">{item.title}</h2>
                    <span className="text-[#C3C1B8] text-[10px] leading-[12.5px]">{item.date}</span>
                  </div>
                  <p className="text-sm text-[#7C7C7C] min-[375px]:w-[266px] md:w-[315px] font-normal">{item.about}</p>
                </div>
              </div>
              <div className="hidden md:grid">
                <Link target="_blank" href={item.behance}>
                  <Image src="/images/behance.svg" alt="view on behance" width={135} height={100} />
                </Link>
                <Link target="_blank" href={item.figma}>
                  <Image src="/images/figma.svg" alt="view on figma" width={147} height={31} />
                </Link>
              </div>
            </div>
            <p className="text-[#19170E] f-satoshi-bold text-lg md:text-xl pt-4">Preview</p>
            <div className="text-[#464229] text-sm md:text-base">
              <p className={isEllipsisActive === item.title.toLowerCase() ? "expanded" : " break-ellipsis"}>
                {item.note}
              </p>
              <button
                className="text-[#0A231D] text-xs font-bold underline dropdown-slide"
                onClick={() => toggleEllipsis(item.title)}
              >
                {isEllipsisActive === item.title.toLowerCase() ? "read less" : "read more"}
              </button>
            </div>

            <HorizontalScrollCarousel
              cards={item.images}
              title={item.title}
              logo={item.logo}
              behance={item.behance}
              date={item.date}
              description={item.about}
            />

            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-2">
                {item.mobile && <Image src="/images/mobile.svg" alt="Mobile design" width={18} height={18} />}
                {item.laptop && <Image src="/images/laptop.svg" alt="Laptop design" width={18} height={18} />}
                {item.caseStudy && <Image src="/images/branding.svg" alt="Branding" width={18} height={18} />}
              </div>
              <p className="text-xs text-[#C3C1B8]">{item.platform}</p>
            </div>

            <div className="flex mt-4 items-center justify-between md:hidden">
              <Link target="_blank" href={item.figma}>
                <Image src="/images/view-in-figma-mobile.svg" alt="view on figma" width={121} height={34} />
              </Link>
              <Link target="_blank" href={item.behance}>
                <Image src="/images/behance-mobile.svg" alt="view on behance" width={135} height={34} />
              </Link>
            </div>
            <hr className="bg-[#F0EEE8] w-[100%] h-[1px] mt-8 rounded-[24px]" />
          </div>
        ))}
      </>
    </div>
  );
};

interface IHorizontal {
  cards: string[];
  title: string;
  logo: string;
  behance: string;
  date: string;
  description: string;
}

const HorizontalScrollCarousel: React.FC<IHorizontal> = ({ cards, title, logo, behance, date, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openModal = (index: number) => {
    if (index >= cards.length) {
      setActiveImageIndex(index % cards.length);
    } else {
      setActiveImageIndex(index);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    setModalOpen(false);
  };
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-32%", "0%"]);

  const controls = useAnimation();

  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: "-100%",
        transition: { duration: 10, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  // Handler for Next Image in the Modal
  const nextImage = () => {
    setActiveImageIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  // Handler for Previous Image in the Modal
  const prevImage = () => {
    setActiveImageIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };

  const isHorizontal = ["fundify", "weave finance"].includes(title.toLowerCase());

  return (
    <>
      {/* IMAGE SLIDER */}
      <section ref={targetRef} className="mt-6 relative">
        <div className="items-center overflow-x-auto hide-scrollbar">
          <motion.div style={{ x }} className="flex space-x-4 whitespace-nowrap">
            {[...cards, ...cards].map((card: string, index: number) => (
              <Image
                onClick={() => openModal(index)}
                key={index}
                src={card}
                alt={`project preview ${index + 1}`}
                width={isHorizontal ? 510 : index % cards.length === 0 ? 510 : 165} // Larger width for the first card
                height={isHorizontal ? 552 : index % cards.length === 0 ? 260 : 100} // Larger height for the first card
                // className="rounded-[12px] mr-4"
                className={`cursor-pointer rounded-[12px] mr-4 ${
                  isHorizontal
                    ? "w-[342px] md:w-[1024px] h-[203px] md:h-auto"
                    : index % cards.length === 0
                    ? "w-[342px] md:w-[550px] h-[203px] md:h-[252px]"
                    : "w-[165px] h-[203px] md:h-[260px]"
                }`} // Small width = 365, larger = 510
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SLIDESHOW */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
        <div
          className="relative rounded-lg w-[342px] md:w-[768px]"
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={closeModal}
              className="flex justify-center items-center py-[6px] px-[16px] bg-[#F0EEE8] border-2 border-[#E9E5DC3D] w-[56px] rounded-2xl"
            >
              <Image className="" src="/images/close-btn.svg" width={7} height={7} alt="close modal" />
            </button>
          </div>
          <div
            className={`w-[342px] mx-auto md:w-[768px]  ${
              title.toLowerCase() === "fundify"
                ? "bg-[#141414]"
                : title.toLowerCase() == "weave finance"
                ? "bg-[#080D17]"
                : title.toLowerCase() === "brew time coffee cafe"
                ? "bg-[#3A3432]"
                : title.toLowerCase() == "sonic music"
                ? "bg-[#110B3B]"
                : "bg-[#120C2A]"
            } `}
          >
            {/* Active Image */}
            <Image
              key={activeImageIndex}
              src={cards[activeImageIndex]}
              alt={title}
              width={title.toLowerCase() === "fundify" ? 842 : activeImageIndex === 0 ? 842 : 710} // Larger width for the first card
              height={260}
              className="object-contain h-[50vh] md:h-[70vh]"
              //className={`h-[50vh] ${activeImageIndex === 0 ? 'object-fill' : 'object-contain'}}`}
              //className={`rounded-lg object-contain ${activeImageIndex === 0 ? 'w-[842px] md:w-[842px] h-[203px] md:h-[290px]' : 'w-[842px] h-[203px] md:h-[290px]'}`}  // Small width = 365, larger = 510
            />
          </div>
          <div className=" flex justify-end gap-2 mt-4">
            <button
              onClick={prevImage}
              className="py-[6px] px-[16px] bg-[#F0EEE8] border-2 border-[#E9E5DC3D] w-[56px] rounded-2xl flex justify-center items-center"
            >
              <Image className="" src="/images/left-btn.svg" width={7} height={7} alt="Prev image" />
            </button>
            <button
              onClick={nextImage}
              className="py-[6px] px-[16px] bg-[#F0EEE8] border-2 border-[#E9E5DC3D] w-[56px] rounded-2xl flex justify-center items-center"
            >
              <Image className="" src="/images/right-btn.svg" width={7} height={7} alt="Next image" />
            </button>
          </div>

          <section className="mt-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-[15px]"
                  src={logo}
                  alt="Project"
                  width={69}
                  height={69}
                  sizes="(max-width: 768px) 60px, 69px"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="f-satoshi-bold text-lg text-white ">{title}</h2>
                    <span className="text-[#F0F0F0] text-[10px] leading-[12.5px]">{date}</span>
                  </div>
                  <p className="text-sm text-[#F1F1F1] min-[375px]:w-[266px] md:w-[315px] font-normal">{description}</p>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <Link target="_blank" href={behance}>
                  <Image src="/images/behance.svg" alt="view on behance" width={135} height={100} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Projects;
