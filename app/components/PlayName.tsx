'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';

const PlayName = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false)

	const handlePlayAudio = () => {
    console.log('clicked')
		if (audioRef.current) {
			if(!isPlaying){
				audioRef.current.play();
				setIsPlaying(true)
			}
		}
	};

	const handleAudioEnded = () => {
		setIsPlaying(false)
	}

	return (
		<div>
			<audio onEnded={handleAudioEnded} ref={audioRef} style={{display: 'none'}}>
				<source src="/audio/name.mp3" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
			<button
				onClick={handlePlayAudio}
				className="bg-[#F0EEE8] hover:opacity-70 border-2 border-[#F5F3F0] rounded-full flex gap-[6px] items-center py-[6px] px-4">
				<Image
					src={`${isPlaying ? '/images/speaker.svg' : '/images/audio.svg'}`}
					alt="Play audio"
					width={14.25}
					height={15}
				/>
				Play audio
			</button>
		</div>
	);
};

export default PlayName;
