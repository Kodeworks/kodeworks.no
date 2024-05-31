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
    <header className="flex flex-col mt-16 pt-28 mx-16">
      <div className="flex items-center md:text-8xl text-3xl mb-7">
        <h2 className="mr-8">Dine </h2>
        <h2 className="animated-word green-text">{dine[dineIndex]}</h2>
      </div>
      <div className="flex items-center md:text-[64px] text-[48px] mb-28">
        <h2 className="mr-8 green-text">Våre </h2>
        <h2 className="animated-word">{vaare[vaareIndex]}</h2>
      </div>
      <div className="flex self-end w-[50%]">
        <p>
          Vi er en gjeng teknologer som tror på verdiskapning gjennom åpenhet, kompetanse og dedikasjon.
          Som din teknologipartner er vi opptatt av å forstå dine behov og skape de beste løsningene for deg.
        </p>
      </div>
    </header>
  );
};

export default AnimatedHeader;