import Link from 'next/link';
import { serviceAlternatives } from '../../../constants/serviceAlternatives';

const Services = () => {
  return (
    <div className="flex flex-col">
      <h2 className="section-title">Våre tjenester</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {serviceAlternatives.map((service) => (
          <article
            key={service.title}
            className="flex flex-col w-1/3 items-start gap-2"
          >
            <img
              className='w-full'
              src={service.picture}
              alt={service.title}
            />
            <div className="w-full">
              <h3 className="mb-4 text-3xl">{service.title}</h3>
              <p className="text-xl">{service.text}</p>
            </div>
              <div className="lg:mt-8 mt-4">
                <Link href={`/tjenester/${service.slug}`} className="green-link">
                  Les mer
                </Link>
            </div>
          </article>
          
        ))}
      </div>
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full overflow-x-scroll">
        <div className="flex gap-6">
          {serviceAlternatives.map((service, index) => (
            <div
              key={service.title}
              className="snap-start flex-shrink-0 w-4/5 max-w-xs"
            >
              <img
                className="w-full"
                src={service.picture}
                alt={service.title}
              />
              <h3 className="text-base">{service.title}</h3>
              <p className="text-sm">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;