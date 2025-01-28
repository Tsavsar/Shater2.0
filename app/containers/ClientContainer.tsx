"use client"
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/general/Loader";

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientContainer({children, pageName}: Readonly<{children: React.ReactNode, pageName: string}>){
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        AOS.init()
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500); // Simulate a 3-second loading time
        return () => clearTimeout(timer);
    }, []);

    if(loading) return <Loader pageName={pageName} />

    return(
        <>
            <div className="blur-overlay" />
            {children}
            <Footer />
        </>
    )
}