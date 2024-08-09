import React, { useState, useEffect } from 'react';
import './AnimatedHeader.css';



const dine = [ 
  'ideer',
  'prosjekter',
  'tanker',
  'planer',
  'spesifikasjoner',
  'drømmer',
];

const vaare = [
  'utviklere',
  'eksperter',
  'erfaringer',
  'konsulenter'
];

const AnimatedHeader = () => {
  const [dineIndex, setDineIndex] = useState(0);
  const [vaareIndex, setVaareIndex] = useState(0);
  const [backwardsAnimation, setBackwardsAnimation] = useState(false);
  const [startAnimate, setStartAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDineIndex((prevIndex) => (prevIndex + 1) % dine.length);
      setVaareIndex((prevIndex) => (prevIndex + 1) % vaare.length);
      setStartAnimate(true);
      setBackwardsAnimation(!backwardsAnimation);
    }, 4000);

    return () => clearInterval(intervalId);
  });

  return (
    <header className="flex flex-col mt-16 pt-20 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-7">
        <h2 className="mr-3 header-title">Dine </h2>
        <h2 className={`${startAnimate ? backwardsAnimation ? 'animated-word-reversed': 'animated-word' : ''} singleSlide header-title green-text `}>{dine[dineIndex]}</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-20">
        <h2 className="mr-3 green-text header-title">Våre </h2>
        <h2 className={`${startAnimate ? backwardsAnimation ? 'animated-word-reversed': 'animated-word' : ''} singleSlide header-title`}>{vaare[vaareIndex]}</h2>
      </div>
      <div className="header-text-container">
        <p className="header-text">
          Vi er en gjeng teknologer som tror på verdiskapning gjennom åpenhet, kompetanse og dedikasjon.
          Som din teknologipartner er vi opptatt av å forstå dine behov og skape de beste løsningene for deg.
        </p>
      </div>
    </header>
  );
};

export default AnimatedHeader;