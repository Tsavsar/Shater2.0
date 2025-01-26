"use client";

import { useEffect, useState } from "react";
import Loader from "../components/general/Loader";
import Navbar from "../components/Navbar";

export default function Page(){
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate a 3-second loading time
        return () => clearTimeout(timer);
    }, []);

    if(loading) return <Loader pageName="Case-studies" />

    return(
        <section className="responsive pt-16">
            <Navbar navItl="Home" navLink="/" />
                <main className={`pt-16`}>

                </main>
        </section>
    )
}