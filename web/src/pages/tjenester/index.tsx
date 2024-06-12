import ProjectTile from '../../components/ProjectTile';
import dictionary from '../../utils/dict';
import { useClipContent } from '../../context/ClipContentContext';
import { fmt, getLocale, useTranslation } from '../../utils/useTranslation';
import { useRouter } from 'next/router';
import { getProjects } from '../../lib/sanity';
import { Project } from '../../types';
import Seksjon from '../../components/tjenester/Seksjon';

export default function Projects({ projects }: { projects: Project[] }): JSX.Element {
  const tjeneste = {
    imageUrl: '/images/illustration-1.jpg',
    title: 'Tjeneste 1',
    shortDescription: 'Tjeneste 1 short description',
    description:
      'Hos Kodeworks er vi lidenskapelige når det kommer til kunstig intelligens (AI). Vi utvikler avanserte AI-løsninger som hjelper våre kunder med å automatisere prosesser, analysere store mengder data og forbedre beslutningstaking. Våre tjenester inkluderer maskinlæring, naturlig språkprosessering og dataanalyse.',
    sections: [
      {
        imageUrl: '/static/photos/tjenester/kodeworks-tjenester1.png',
        title: 'Utvikling',
        description:
          'Vi utvikler skreddersydde løsninger for våre kunder, fra enkle nettsider til komplekse applikasjoner. Vi har bred kompetanse innenfor flere teknologier og plattformer, og vi er opptatt av å levere løsninger som er skalerbare, sikre og brukervennlige.',
      },
      {
        imageUrl: '/static/photos/tjenester/kodeworks-tjenester2.png',
        title: 'Design',
        description: 'Vi designer brukervennlige og estetisk tiltalende løsninger som',
      },
      {
        imageUrl: '/static/photos/tjenester/kodeworks-tjenester3.png',
        title: 'Design',
        description: 'Vi designer brukervennlige og estetisk tiltalende løsninger som',
      },
    ],
  };

  return (
    <main className="main mt-0 pt-40">
      <section>
        <header className="flex flex-col w-full">
          <div className="flex items-center mb-16">
            <h2 className="mr-8 header-title"> { tjeneste.title } </h2>
          </div>

          <div className="header-text-container">
            <p className="header-text">
                {tjeneste.description}
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-y-36 lg:mt-36 md:mt-24 mt-12 w-full">
          {tjeneste.sections.map((section, index) => (
            <Seksjon key={index} section={section} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>
    </main>
  );
}

/**
 * If/when we move tjenester to Sanity, we can fetch it here.
 */
// export async function getStaticProps() {
//   const tjenester = await getTjenester();

//   return {
//     props: {
//       tjenester,
//     },
//     revalidate: 10,
//   };
// }
