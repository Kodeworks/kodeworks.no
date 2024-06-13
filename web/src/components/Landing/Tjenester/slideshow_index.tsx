import { useState } from 'react';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';
import Button from '../../Button';
import Link from 'next/link';

const Tjenester = () => {
  const tjenesteAlternativer = [
    {
      tittel: 'Utvikling',
      // tekst: 'Fra ide til teknisk løsning. Vi hjelper i alle ledd.',
      tekst: 'Innleie av konsulenter for å dekke deres kapasitetsbehov for nøkkelkompetanse og rask verdiskapning.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester1.png',
    },
    {
      tittel: 'Prosjekt',
      tekst: 'Har dere behov for at vi tar oss av alt det tekniske i et utviklingsprosjekt? Vi hjelper deg å levere.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester3.png',
    },
    {
      tittel: 'Effektivisere',
      tekst: 'AI har kommet for fullt og vi kan hjelpe deg med å effektivisere prosesser og ta i bruk ny teknologi.',
      bilde: '/static/photos/tjenester/kodeworks-tjenester2.png',
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
    <div className="flex flex-col">
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
              <h3 className="mb-4 text-3xl">{tjeneste.tittel}</h3>
              <p className="text-xl">{tjeneste.tekst}</p>
            </div>
            {/* <Link href="/tjenester" className="green-link">
              Les mer
            </Link> */}
            
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
