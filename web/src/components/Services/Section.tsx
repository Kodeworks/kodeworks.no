import { useRouter } from 'next/router';

import { Project } from '../../types';
import { fmt, getLocale } from '../../utils/useTranslation';
import Link from 'next/link';
interface Prop {
  section: {
    picture: string;
    title: string;
    text: string;
  };
  reverse: boolean;
}

export default function Section({ section, reverse }: Prop): JSX.Element {
  return (
    <article className={`${reverse ? 'justify-end' : ''} flex lg:flex-row flex-col gap-[44px]`}>
      <div
        className={`${
          reverse ? 'lg:order-last' : 'order-first'
        } w-full lg:w-[30%] h-[500px]  overflow-hidden`}
      >
        <img className="w-full h-full object-cover" src={section.picture} alt={section.title} />
      </div>
      <div className="lg:w-1/3 w-full flex flex-col self-end justify-between">
        <div className="flex flex-col gap-4">
          <h3 className='section-title'>{section.title}</h3>
          <p className="mb-0 section-text">{section.text}</p>
        </div>
      </div>
    </article>
  );
}
