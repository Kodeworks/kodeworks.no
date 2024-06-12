import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';
import Link from 'next/link';
interface Prop {
  section: {
    imageUrl: string;
    title: string;
    description: string;
  };
  reverse: boolean;
}

export default function Seksjon({ section, reverse }: Prop): JSX.Element {
  return (
    <article className={`${reverse ? 'justify-end' : ''} flex lg:flex-row flex-col gap-[44px]`}>
      <div
        className={`${
          reverse ? 'lg:order-last' : 'order-first'
        } w-full lg:w-[30%] h-[500px]  overflow-hidden`}
      >
        <img className="w-full h-full object-cover" src={section.imageUrl} alt={section.title} />
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full flex flex-col self-end justify-between">
        <div className="flex flex-col gap-4">
          <h3>{section.title}</h3>
          <p className="mb-0">{section.description}</p>
        </div>
      </div>
    </article>
  );
}
