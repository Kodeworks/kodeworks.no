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
    <header className="flex flex-col md:mt-[15%] mt-[30%] gap-36">
      <div className="flex items-center md:ml-[20%] ml-[5%] md:text-[64px] text-[48px] uppercase">
        <span className="mr-8">Dine </span>
        <span className="animated-word pink-text">{dine[dineIndex]}</span>
      </div>
      <div className="flex items-center md:ml-[35%] ml-[20%] md:text-[64px] text-[48px] uppercase">
        <span className="mr-8">Våre </span>
        <span className="animated-word green-text">{vaare[vaareIndex]}</span>
      </div>
    </header>
  );
};

export default AnimatedHeader;