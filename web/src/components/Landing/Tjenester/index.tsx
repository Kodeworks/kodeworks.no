import { useState } from 'react';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';

const Tjenester = () => {
  const tjenesteAlternativer = [
    {
      tittel: 'Utvikling',
      tekst: 'Fra ide til teknisk løsning. Vi hjelper i alle ledd.',
      bilde: '/images/tjenester_utvikling.webp',
    },
    {
      tittel: 'Kompetanse',
      tekst: 'Trenger du teknisk kompetanse for en kortere eller lengre periode, vi er klare.',
      bilde: '/images/tjenester_utvikling.webp',
    },
    {
      tittel: 'Samarbeid',
      tekst: 'Vi hjelper deg med å lansere ditt tidligfase prosjekt.',
      bilde: '/images/tjenester_utvikling.webp',
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
    <div className="flex flex-col items-center gap-12 section-padding">
      <h2 className="section-title">Våre tjenester</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {tjenesteAlternativer.map((tjeneste) => (
          <article
            key={tjeneste.tittel}
            className="flex flex-col w-1/3 items-center text-center gap-2"
          >
            <img
              className="md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-2xl"
              src={tjeneste.bilde}
              alt={tjeneste.tittel}
            />
            <h3>{tjeneste.tittel}</h3>
            <p>{tjeneste.tekst}</p>
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
