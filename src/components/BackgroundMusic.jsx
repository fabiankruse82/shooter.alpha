import React, { useEffect } from 'react';

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio('/src/audio/background.mp3');
    audio.loop = true; // Loop the background music
    audio.volume = 0.5; // Set the volume to 50%
    audio.play();

    // Cleanup on component unmount
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BackgroundMusic;
