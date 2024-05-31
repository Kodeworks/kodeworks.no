import { useState } from 'react';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';
import Button from '../../Button';
import Link from 'next/link';

const Tjenester = () => {
  const tjenesteAlternativer = [
    {
      tittel: 'Utvikling',
      tekst: 'Fra ide til teknisk løsning. Vi hjelper i alle ledd.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester1.png',
    },
    {
      tittel: 'Kompetanse',
      tekst: 'Trenger du teknisk kompetanse for en kortere eller lengre periode, vi er klare.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester2.png',
    },
    {
      tittel: 'Samarbeid',
      tekst: 'Vi hjelper deg med å lansere ditt tidligfase prosjekt.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tjenesteAlternativer.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tjenesteAlternativer.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col section-padding">
      <h2 className="section-title">Våre tjenester</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {tjenesteAlternativer.map((tjeneste) => (
          <article
            key={tjeneste.tittel}
            className="flex flex-col w-1/3 items-start gap-2"
          >
            <div className="">
              <img
                className='w-full'
                src={tjeneste.bilde}
                alt={tjeneste.tittel}
              />
            </div>
            <div className="w-full">
              <h3 className="mb-4">{tjeneste.tittel}</h3>
              <p>{tjeneste.tekst}</p>
            </div>
            <Link href="/tjenester" className="green-link">
              Les mer
            </Link>
            
          </article>
        ))}
      </div>
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={handlePrevious} className="button-unstyled">
          <GreenArrowLeft />
        </button>
        <div className="flex flex-col items-center text-center gap-2 w-4/5 max-w-xs mx-auto">
          <img
            className="w-4/5 rounded-2xl"
            src={tjenesteAlternativer[currentIndex].bilde}
            alt={tjenesteAlternativer[currentIndex].tittel}
          />
          <h3 className="text-base">{tjenesteAlternativer[currentIndex].tittel}</h3>
          <p className="text-sm">{tjenesteAlternativer[currentIndex].tekst}</p>
        </div>
        <button onClick={handleNext} className="button-unstyled">
          <GreenArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Tjenester;
