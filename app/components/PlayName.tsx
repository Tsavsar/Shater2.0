'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

const PlayName = () => {
	const audioRef = useRef<HTMLAudioElement>(null);

  console.log('playname')

	const handlePlayAudio = () => {
    console.log('clicked')
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

  const sayHello = () => {
    console.log('say hello')
  }
	return (
		<div>
      <button onClick={sayHello}>Click me</button>
			<audio ref={audioRef} controls>
				<source src="/audio/name.mp3" type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
			<button
				onClick={handlePlayAudio}
				className="bg-[#F0EEE8] hover:bg-slate-700 border-2 border-[#F5F3F0] rounded-full flex gap-[6px] items-center py-[6px] px-4">
				<Image
					src="/images/audio.svg"
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
