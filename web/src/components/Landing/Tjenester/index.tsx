import Link from 'next/link';
import { tjenesteAlternativer } from '../../../constants/tjenesteAlternativer';

const Tjenester = () => {
  return (
    <div className="flex flex-col">
      <h2 className="section-title">Våre tjenester</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {tjenesteAlternativer.map((tjeneste) => (
          <article
            key={tjeneste.tittel}
            className="flex flex-col w-1/3 items-start gap-2"
          >
            <img
              className='w-full'
              src={tjeneste.bilde}
              alt={tjeneste.tittel}
            />
            <div className="w-full">
              <h3 className="mb-4 text-3xl">{tjeneste.tittel}</h3>
              <p className="text-xl">{tjeneste.tekst}</p>
            </div>
              <div className="lg:mt-8 mt-4">
                <Link href={`/tjenester/${tjeneste.slug}`} className="green-link">
                  Les mer
                </Link>
            </div>
          </article>
          
        ))}
      </div>
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full overflow-x-scroll">
        <div className="flex gap-6">
          {tjenesteAlternativer.map((tjeneste, index) => (
            <div
              key={tjeneste.tittel}
              className="snap-start flex-shrink-0 w-4/5 max-w-xs"
            >
              <img
                className="w-full"
                src={tjeneste.bilde}
                alt={tjeneste.tittel}
              />
              <h3 className="text-base">{tjeneste.tittel}</h3>
              <p className="text-sm">{tjeneste.tekst}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tjenester;