import { useEffect } from "react"

export const projectsData = [
  {
    logo: '/images/fundify/logo.png',
    title: 'Fundify',
    date: 'February, 2024',
    about: 'Empower your finances and earn rewards with every smart move.',
    note: 'In the fast-paced world of fintech, user engagement is key. Fundify is a banking app designed for seamless transactions, utility payments, and personalized savings goals—all while enhancing user loyalty through gamification and a robust rewards system.',
    images: ['/images/fundify/desktop.png', '/images/fundify/mobile-1.png',  '/images/fundify/mobile-2.png'], //  '/images/fundify/mobile-3.png',  '/images/fundify/mobile-4.png',  '/images/fundify/mobile-5.png'
    mobile: true,
    laptop:false,
    caseStudy: true,
    platform: 'Mobile App and Case Study',
    figma: 'https://www.figma.com/community/file/1343872681377831336/fundify-fintech-app',
    behance: 'https://www.behance.net/gallery/194894477/Fundify'
  },
  {
    logo: '/images/weave.svg',
    title: 'Weave Finance',
    date: 'December, 2024',
    about: 'Coming soon...',
    note: 'Weave is a banking solution designed by me, with the focal point being easy and quick internal payments with virtual cards that let you automate payments, track payment plans and more.',
    images: ['/images/weave/desktop.png', '/images/weave/mock.png', '/images/weave/weave-3.png'],
    mobile: true,
    laptop: true,
    caseStudy: true,
    platform: 'Mobile App, Website, Design System and Branding',
    figma: '#',
    behance: '#'
  },
  {
    logo: '/images/brew-time.svg',
    title: 'Brew Time Coffee Cafe',
    date: 'May, 2023',
    about: 'Discover our carefully crafted coffee blends, made with love and passion',
    note: 'Whether you\'re looking for a classic espresso or a specialty latte, we have something for every coffee lover at Brew Time.',
    images: ['/images/brew-time/desktop-1.png', '/images/brew-time/mobile-1.png', '/images/brew-time/mobile-2.png' ], //'/images/brew-time/mobile-3.png', '/images/brew-time/mobile-4.png'
    mobile: false,
    laptop: true,
    caseStudy: true,
    platform: 'Website, and Branding',
    figma: 'https://www.figma.com/community/file/1239225405863856193/brew-time',
    behance: 'https://www.behance.net/gallery/170538241/Brew-Time-Coffee-Shop-Case-study'
  },
  {
    logo: '/images/sonic.svg',
    title: 'Sonic Music',
    date: 'December, 2023',
    about: 'Listen and share the music you love.',
    note: 'Rooted in a deep passion for music, our app celebrates the boundless power of sound to inspire, connect, and transform. We believe music transcends barriers and unites people, so we\'ve crafted a platform where personal tastes flourish and commu',
    images: ['/images/sonic/desktop.png', '/images/sonic/mobile.png', '/images/sonic/mobile2.png'], //'/images/sonic/mobile-3.png', '/images/sonic/mobile-5.png', 
    mobile: true,
    laptop: true,
    caseStudy: true,
    platform: 'Mobile App, Website and Case study',
    figma: 'https://www.figma.com/community/file/1419774261236958960/soni',
    behance: 'https://www.behance.net/gallery/185834829/Sonic'
  },
  {
    logo: '/images/zero.svg',
    title: 'zero: Community for gamer.',
    date: 'April, 2023',
    about: 'Stream & Build your community.',
    note: 'Zero was created to assist Gamers looking to connect with other gamers our emphasis is on creating strong communities built by gamers and made for gamers.',
    images: ['/images/zero/desktop.png', '/images/zero/mobile.png',  '/images/zero/mobile1.png'], //'/images/zero/mobile2.png',  '/images/zero/mobile3.png',  '/images/zero/mobile4.png'
    mobile: true,
    laptop: false,
    caseStudy: true,
    platform: 'Mobile App, and Case study',
    figma: 'https://www.figma.com/community/file/1216144514380274245/zero-app-case-study',
    behance: 'https://www.behance.net/gallery/168381553/ZERO-Gaming-App'
  },
]

export const dropdownList = ["Projects", "Experience", "Education"]

export const experienceData = [
  {
    logo: '/images/comp/zero.svg',
    role: 'Lead Product Designer',
    date: 'May, 2024 - Present',
    company: 'Opentape',
    location: 'Oslo, Norway.',
    note: 'With Opentape, I designed the website, established the design system, and developed the web app—a tool for screen recording and video management. My work focused on creating a cohesive user experience while ensuring that the platform was intuitive and scalable for future growth.',
    links: ['Opentape.io', 'app.opentape.io']
  },
  {
    logo: '/images/comp/iRecharge.svg',
    role: 'UI/UX Designer',
    date: 'March, 2024 - Present',
    company: 'iRecharge Tech',
    location: 'Abuja, Nigeria.',
    note: 'At iRecharge, I contributed to the mobile app, user dashboard, landing page, and various other features, all designed to support a system capable of handling over 15 transactions per minute. I focused on enhancing the user experience while ensuring the platform\'s efficiency and scalability to meet high-volume demands.',
    links: []
  },
  {
    logo: '/images/comp/hackmamba.svg',
    role: 'Lead Product Designer',
    date: 'March, 2024 - Present',
    company: 'Hackmamba',
    location: 'Delaware, USA.',
    note: 'I was responsible for designing the company’s website and blog, setting a clear visual direction and foundation for future community-driven projects. I also developed the company\'s design system, creating reusable UI components and establishing a consistent color palette, typography, and iconography, ensuring cohesive and scalable design across platforms.',
    links: ['Hackmamba.io']
  },
  {
    logo: '/images/comp/volla.svg',
    role: 'Product Designer',
    date: 'May, 2023 - August, 2023',
    company: 'Volla Pay',
    location: 'New York, NY.',
    note: 'I contributed to the development of key features for Volla Pay\'s mobile app and website, focusing on enhancing usability and ensuring a seamless user experience. My work helped streamline interactions and optimize the platform\'s overall performance.',
    links: ['Volla Pay App', 'vollapay.com']
  },
]

export const educationData = [
  {
    logo: '/images/uni.svg',
    title: 'BSc. Computer Science',
    date: '2019 - 2022',
    education: 'Baze University',
    location: 'Abuja, Nigeria.',
    note: 'I studied computer science at Baze university in Nigeria where I started my journey as a web developer, before I transitioned into design in my final year.',
  },
  {
    logo: '/images/edu.svg',
    title: 'Legend Internship Programme',
    date: '2021-2022',
    education: 'Legend',
    location: 'Abuja, Nigeria.',
    note: 'Went through a sensitisation and training on marketing and got to work with the tech department on some in house projects where I trained on how to develop websites from the ground up.',
  },
]

export const topAnime = [
  {
    title: 'Konosuba',
    link: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world',
  },
  {
    title: 'One Piece',
    link: 'https://www.crunchyroll.com/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world',
  },
  {
    title:  'Vinland Saga',
    link: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga',
  },
  {
    title: 'That Time I Got Reincarnated as a Slime',
    link: 'https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime',
  },
  {
    title:  'Wotakoi: Love Is Hard for Otaku',
    link: 'https://myanimelist.net/anime/35968/Wotaku_ni_Koi_wa_Muzukashii',
  },
  ]

export const musicArtist = [
  {
    title: 'Logic',
    link: 'https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L?si=fZHTmJWhQgiGpWgtgPS-CA',
  },
  {
    title: 'Superheaven',
    link: 'https://open.spotify.com/artist/1IHjrY7ygKbmLVoUV1VcXc?si=VjZA9XsAS7GN9LLfLOPuzg',
  },
  {
    title: 'The Marias',
    link: 'https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx?si=GdTfzckFRne1NMzOdiCmcw',
  },
  {
    title: 'Aurae',
    link: 'https://open.spotify.com/artist/3tZVXVqt6MP5k80gT723pM?si=PSf02kneTeCZ_hnTTU4j7A',
  },
  {
    title: 'TWICE',
    link: 'https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0?si=bBGN4NABQKCpQTf-M5khcQ',
  },
  ]

export const books = [
  {
    title: 'It\'s kind of a funny story',
    link: 'https://www.goodreads.com/book/show/248704.It_s_Kind_of_a_Funny_Story',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    link: 'https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban?from_search=true&from_srp=true&qid=m5OFOrpWXP&rank=1',
  },
  {
    title: 'Far Far Away',
    link: 'https://www.goodreads.com/book/show/16030663-far-far-away?from_search=true&from_srp=true&qid=c73Qi3uBP5&rank=1',
  },
  {
    title: '5 Point Someone',
    link: 'https://www.goodreads.com/book/show/105576.Five_Point_Someone?from_search=true&from_srp=true&qid=1zXYAag1e9&rank=1',
  },
  {
    title: 'Blink',
    link: 'https://www.goodreads.com/book/show/2142.Blink?from_search=true&from_srp=true&qid=NG7bntndNF&rank=4',
  },
  ]

  

  // Custom Hook for applying blur effect on scroll
  export const useBlurOnScroll = (elementSelector:string) => {
    useEffect(() => {
      // const blurTrigger = document.querySelector(trigger);
      const mainContent = document.querySelector(elementSelector);
      
      const options = {
        root: null, 
        threshold: 0, 
        rootMargin: "0px 0px 0px 0px",
      };
  
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // When the element hits the top, apply the blur effect
          entry.target.classList.add("blurred");
        } else {
          // When the element leaves the top, remove the blur effect
          entry.target.classList.remove("blurred");
        }
        });
      }, options);
      
      if (mainContent) {
        const elementsToObserve = mainContent.children;
        for (let i = 0; i < elementsToObserve.length; i++) {
        observer.observe(elementsToObserve[i]);
        }
      
        return () => {
        for (let i = 0; i < elementsToObserve.length; i++) {
          observer.unobserve(elementsToObserve[i]);
        }
        };
      }
      }, [elementSelector]);
  };
  
  export interface ICurrTrack{
  is_playing: boolean,
  title: string,
  artiste: string,
  image_url: string,
  preview_url: string,
  url: string
}