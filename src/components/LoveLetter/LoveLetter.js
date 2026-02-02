import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';
import imgFile from './IMG.jpeg';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log('Playback succeeded'))
          .catch(e => console.error('Playback failed:', e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div
      className={`envelope ${isOpen ? 'open' : ''}`}
      onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}
    >
      <div className="flap"></div>
      <div className="body"></div>

      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {/* Text */}
          <div>
            My Billu Seth🖤,<br />
            Never have I been so blessed as to fall in love with someone as wonderful as you.
            I never imagined that meeting you again at a tattoo parlour, after so long, could change my entire life...
            <br />
            i loveeee youuuu the most my one True Love :)
            <br /><br />
            always yours ∞ ,
            <br />
            SatyaJeet The Raslmalai Sharma
          </div>

          {/* Image */}
          <img
            src={imgFile}
            alt="Love"
            style={{
              width: '130px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioFile}
        onError={(e) => console.error('Audio error:', e.message)}
      />
    </div>
  );
};

export default LoveLetter;
