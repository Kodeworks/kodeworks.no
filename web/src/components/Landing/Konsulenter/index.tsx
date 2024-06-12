import { useEffect, useState } from 'react';
import { Person } from '../../../types';
import Link from 'next/link';

const Konsulenter = ({ people }: { people: Person[] }) => {
  const [highlightedPeople, setHighlightedPeople] = useState<Person[]>([]);

  useEffect(() => {
    const randomPeople = people.sort(() => 0.5 - Math.random()).slice(0, 3);
    setHighlightedPeople(randomPeople);
  }, [people]);

  return (
    <div className="flex flex-col">
      <h2 className="section-title">Våre Eksperter</h2>
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col lg:items-center justify-between w-full">
        {highlightedPeople.length > 0 && highlightedPeople.map((person, index) => (
          <article
            key={index}
            className="flex flex-col lg:w-1/3 w-full  text-center"
          >
            <div className="lg:w-[25vw] h-[60vh] overflow-hidden">
              <img
                className="w-full h-full object-cover overflow-hidden"
                src={person.imageUrl}
                alt={person.firstName + ' ' + person.lastName}
              />
            </div>
            <div className="flex items-start flex-col">
              <p className="text-lg font-bold mt-2">
                {person.firstName} {person.lastName}
              </p>
            </div>
          </article>
        ))}
        </div>
      </div>
      <div className="lg:mt-8 mt-4">
          <Link href="/eksperter" className="green-link">
            Se alle våre eksperter
          </Link>
      </div>
    </div>
  );
};

export default Konsulenter;
