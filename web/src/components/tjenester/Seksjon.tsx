import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';
import Link from 'next/link';
interface Prop {
  seksjon: {
    bilde: string;
    tittel: string;
    tekst: string;
  };
  reverse: boolean;
}

export default function Seksjon({ seksjon, reverse }: Prop): JSX.Element {
  return (
    <article className={`${reverse ? 'justify-end' : ''} flex lg:flex-row flex-col gap-[44px]`}>
      <div
        className={`${
          reverse ? 'lg:order-last' : 'order-first'
        } w-full lg:w-[30%] h-[500px]  overflow-hidden`}
      >
        <img className="w-full h-full object-cover" src={seksjon.bilde} alt={seksjon.tittel} />
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col self-end justify-between">
        <div className="flex flex-col gap-4">
          <h3>{seksjon.tittel}</h3>
          <p className="mb-0">{seksjon.tekst}</p>
        </div>
      </div>
    </article>
  );
}
