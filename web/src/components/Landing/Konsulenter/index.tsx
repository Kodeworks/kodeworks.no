import { useEffect, useState } from 'react';

import { Person } from '../../../types';
import PersonTile from '../../PersonTile';
import { GreenArrowLeft, GreenArrowRight } from '../Icons';

const Konsulenter = ({ people }: { people: Person[] }) => {
  const [highlightedPeople, setHighlightedPeople] = useState<Person[]>([]);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * people.length);
    const randomPeople = people.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    console.log(randomPeople);
    setHighlightedPeople(randomPeople);
  }, [people]);

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
    setEndIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
    setEndIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center gap-12 section-padding">
      <h2 className="section-title">Våre Eksperter</h2>
      <div className="hidden md:flex flex-row ">
        <div className="flex items-center justify-between w-full space-x-12">
          <button onClick={handlePrevious} className="button-unstyled">
            <GreenArrowLeft />
          </button>
        {highlightedPeople.length > 0 && highlightedPeople.map((person, index) => (
          <article
            key={index}
            className="flex flex-col w-1/3 items-center justify-center text-center gap-12"
          >
            <div className="w-[300px] h-[400px] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={person.imageUrl}
                alt={person.firstName + ' ' + person.lastName}
              />
            </div>
          </article>
        ))}
          <button onClick={handleNext} className="button-unstyled">
            <GreenArrowRight />
          </button>
        </div>

      </div>
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={handlePrevious} className="button-unstyled">
          <GreenArrowLeft />
        </button>
        <div className="flex flex-col items-center text-center gap-2 w-4/5 max-w-xs mx-auto">
          {
            highlightedPeople.length > 0 && <PersonTile person={highlightedPeople[0]} />
          }
        </div>
        <button onClick={handleNext} className="button-unstyled">
          <GreenArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Konsulenter;
