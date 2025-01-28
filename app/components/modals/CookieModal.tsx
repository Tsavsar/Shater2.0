"use client"
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CookieModal(){
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 3500);
    }, []);

    const handleClose = () => {
        setShowModal(false)
    }

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
                        className="h-fit w-full md:w-[400px] bg-white rounded-2xl p-2 md:p-5 space-y-2 md:space-y-5"
                    >
                        <div className="w-full h-[250px] bg-[#f5f5f5] rounded-xl">
                            {/* <Image
                                src={'/images/cookie-modal-image.png'}
                                alt="Shater cookie image"
                                fill
                                objectFit="cover"
                            /> */}
                        </div>
                        <div className="flex items-center gap-2 md:gap-5">
                            <button className="bg-[#f5f5f5] hover:bg-[#ddd] hover:scale-105 text-black flex-1 h-[50px] rounded-md duration-300 ease-in-out" onClick={handleClose}>Decline</button>
                            <button className="bg-black text-white f-satoshi flex-1 hover:scale-105 text-black flex-1 h-[50px] rounded-md duration-300 ease-in-out" onClick={handleClose}>Accept</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}