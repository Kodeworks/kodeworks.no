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
  'kunnskaper',
  'erfaringer',
  'konsulenter'
];

const AnimatedHeader = () => {
  const [dineIndex, setDineIndex] = useState(0);
  const [vaareIndex, setVaareIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDineIndex((prevIndex) => (prevIndex + 1) % dine.length);
      setVaareIndex((prevIndex) => (prevIndex + 1) % vaare.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="flex flex-col mt-16 pt-28 section-padding">
      <div className="flex items-center mb-7">
        <h2 className="mr-8 md:text-7xl text-3xl">Dine </h2>
        <h2 className="animated-word green-text md:text-7xl text-3xl">{dine[dineIndex]}</h2>
      </div>
      <div className="flex items-center md:text-[64px] text-[48px] mb-28">
        <h2 className="mr-8 green-text md:text-7xl text-3xl">Våre </h2>
        <h2 className="animated-word md:text-7xl text-3xl">{vaare[vaareIndex]}</h2>
      </div>
      <div className="flex self-end w-[60%]">
        <p className="lg:text-4xl md:text-xl text-lg">
          Vi er en gjeng teknologer som tror på verdiskapning gjennom åpenhet, kompetanse og dedikasjon.
          Som din teknologipartner er vi opptatt av å forstå dine behov og skape de beste løsningene for deg.
        </p>
      </div>
    </header>
  );
};

export default AnimatedHeader;