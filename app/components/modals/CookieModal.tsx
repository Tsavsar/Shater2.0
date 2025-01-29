"use client"
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CookieModal(){
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const isShown = localStorage.getItem('requested-cookie-permission');

        if(!isShown){
            setTimeout(() => {
                setShowModal(true)
            }, 5000);
        } 
    }, []);

    const handleClose = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('requested-cookie-permission', 'shown');
        }

        setShowModal(false)
    };

    return(
        <AnimatePresence>
            {showModal && (
                <motion.div 
                    initial={{backgroundColor: 'transparent'}} 
                    animate={{backgroundColor: '#00000050'}} 
                    exit={{backgroundColor: 'transparent'}} 
                    className="h-screen w-full bg-black/50 fixed top-0 left-0 z-[10001] p-10 md:p-20 flex items-end justify-end"
                >
                    <motion.div 
                        initial={{x: 600, opacity: 0.5}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: 600, opacity: 0.5}}
                        className="h-fit w-full md:w-[280px] bg-white rounded-3xl p-2 md:p-5 space-y-2 md:space-y-5 border-4 border-black/20"
                    >
                        <div className="w-full h-[110px] relative">
                            <Image
                                src={'/images/cookie-banner-image.svg'}
                                alt="Shater cookie image"
                                fill
                                objectFit="contain"
                            />
                        </div>
                        <p className="text-xs text-[#4f4f4f] f-satoshi">A website cookie is a small piece of data sent to your browser when you visit a website.</p>
                        <p className="f-satoshi text-sm text-primary-black">We use cookies to enhance your experience, analyze site traffic, and personalize content. By clicking &quot;Accept&quot; you consent to our use of cookies.</p>
                        <div className="flex items-center gap-2">
                            <button className="bg-[#F5F4F0] hover:bg-[#f5f5f5] text-black flex-1 h-[50px] rounded-full duration-300 ease-in-out f-p22" onClick={handleClose}>Nahh</button>
                            <button className="bg-black text-white f-satoshi flex-1 text-black flex-1 h-[50px] rounded-full f-p22" onClick={handleClose}>Accept</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}