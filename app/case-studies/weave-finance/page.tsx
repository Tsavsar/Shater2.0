"use client";

import { useEffect, useState } from "react";
import Loader from "../../components/general/Loader";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function page(){
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate a 3-second loading time
        return () => clearTimeout(timer);
    }, []);

    if(loading) return <Loader pageName="Case-studies / Weave Finance" />

    return(
        <section className="responsive pt-16">
            <Navbar navItl="Home" navLink="/" />
            <main className={`pt-16 responsive`}>
                <div className="flex items-center gap-2 f-p22">
                    <Link href='/'>Home</Link> <span className="f-satoshi">/</span> <Link href='/case-studies/weave-finance'>Weave Finance</Link>
                </div>
                <div className="w-full h-[250px] mt-4 relative">
                    <Image
                        src={'/images/weave-display-image.png'}
                        alt=""
                        fill
                        objectFit="cover"
                        className="rounded-xl md:rounded-2xl"
                    />
                </div>
                <h1 className="text-3xl font-extrabold md:text-4xl f-satoshi mt-5">Weave Finance</h1>
            </main>
        </section>
    )
}