import React, { useState, useEffect } from 'react';
import './AnimatedHeader.css';



const firstWords = [ 
  'ideer',
  'prosjekter',
  'tanker',
  'planer',
  'spesifikasjoner',
  'drømmer',
];

const secondWords = [
  'utviklere',
  'eksperter',
  'erfaringer',
  'konsulenter'
];

const AnimatedHeader = () => {
  const [firstWordsIndex, setFirstWordsIndex] = useState(0);
  const [secondWordsIndex, setSecondWordsIndex] = useState(0);
  const [backwardsAnimation, setBackwardsAnimation] = useState(false);
  const [startAnimate, setStartAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFirstWordsIndex((prevIndex) => (prevIndex + 1) % firstWords.length);
      setSecondWordsIndex((prevIndex) => (prevIndex + 1) % secondWords.length);
      setStartAnimate(true);
      setBackwardsAnimation(!backwardsAnimation);
    }, 4000);

    return () => clearInterval(intervalId);
  });

  return (
    <header className="flex flex-col mt-16 pt-20 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-7">
        <h2 className="mr-3 header-title">Dine </h2>
        <h2 className={`${startAnimate ? backwardsAnimation ? 'animated-word-reversed': 'animated-word' : ''} singleSlide header-title green-text `}>{firstWords[firstWordsIndex]}</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-20">
        <h2 className="mr-3 green-text header-title">Våre </h2>
        <h2 className={`${startAnimate ? backwardsAnimation ? 'animated-word-reversed': 'animated-word' : ''} singleSlide header-title`}>{secondWords[secondWordsIndex]}</h2>
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