import Image from 'next/image';

const Office = () => {

  const offices = [
    {
     title: 'Vårt kontor i Oslo',
     image: '/static/photos/oslokontor.jpeg',
     description: 'Vi har moderne kontorer midt i Oslo. Her blir det arrangert mingler, og Magic the gathering'
    },
    {
     title: 'Vårt kontor i Trondheim',
     image: '/static/photos/trondheimkontor.jpeg',
     description: 'Vårt kontor i Trondheim er under renovasjon, vi venter spent på Fjordgata 2.0'
    }
  ]

  return (
    <div className="flex flex-col gap-y-16">
      {offices.map((office, index) => {
        return (
          <div 
            key={office.title}
            className={`${index % 2 === 0 ? 'items-start' : 'items-end'} flex flex-col w-full justify-end gap-2`}
          >
            <h3>{office.title}</h3>
            <div className={`${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex md:flex-row flex-col justify-between md:items-end items-start w-full gap-6`}>
              <img
                src={office.image}
                alt=''
                className='md:max-h-80 aspect-video max-w-full'
              />
              <div className='md:w-2/4 w-2/3'>
                <h3 className={`${index % 2 === 0 ? 'md:text-right text-left' : 'text-left'}`}>{office.description}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Office;
