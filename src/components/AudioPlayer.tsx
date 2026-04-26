import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt auto-play, though browsers may block it until user interaction
    if (audioRef.current) {
      audioRef.current.play().then(() => {
          setIsPlaying(true);
      }).catch((err) => {
          console.log("Autoplay prevented or file not found:", err.message);
          setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch((err) => {
            console.log("Audio play prevented or file not found:", err);
        });
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        src="/sanmao.mp3"
        autoPlay
        loop
        onError={(e) => {
          console.log("Audio file not found or could not be loaded. Please upload sanmao.mp3 to the public directory.");
        }}
      />
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-[#C46210] rounded-full flex items-center justify-center text-white shadow-lg focus:outline-none hover:bg-[#a6530e] transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="ml-1 fill-current" />}
      </button>
    </div>
  );
}
