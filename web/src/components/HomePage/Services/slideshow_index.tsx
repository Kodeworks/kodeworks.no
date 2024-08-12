import { useState } from 'react';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';

const Services = () => {
  const serviceAlternatives = [
    {
      title: 'Utvikling',
      // text: 'Fra ide til teknisk løsning. Vi hjelper i alle ledd.',
      text: 'Innleie av konsulenter for å dekke deres kapasitetsbehov for nøkkelkompetanse og rask verdiskapning.',
      picture: '/static/photos/tjenester/kodeworks-tjenester1.png',
    },
    {
      title: 'Prosjekt',
      text: 'Har dere behov for at vi tar oss av alt det tekniske i et utviklingsprosjekt? Vi hjelper deg å levere.',
      picture: '/static/photos/tjenester/kodeworks-tjenester3.png',
    },
    {
      title: 'Effektivisere',
      text: 'AI har kommet for fullt og vi kan hjelpe deg med å effektivisere prosesser og ta i bruk ny teknologi.',
      picture: '/static/photos/tjenester/kodeworks-tjenester2.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? serviceAlternatives.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === serviceAlternatives.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col">
      <h2 className="section-title">Våre tjenester</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {serviceAlternatives.map((service) => (
          <article
            key={service.title}
            className="flex flex-col w-1/3 items-start gap-2"
          >
            <div className="">
              <img
                className='w-full'
                src={service.picture}
                alt={service.title}
              />
            </div>
            <div className="w-full">
              <h3 className="mb-4 text-3xl">{service.title}</h3>
              <p className="text-xl">{service.text}</p>
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
            src={serviceAlternatives[currentIndex].picture}
            alt={serviceAlternatives[currentIndex].title}
          />
          <h3 className="text-base">{serviceAlternatives[currentIndex].title}</h3>
          <p className="text-sm">{serviceAlternatives[currentIndex].text}</p>
        </div>
        <button onClick={handleNext} className="button-unstyled">
          <GreenArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
