import { Kontakt } from '../../components/Landing';
import Seksjon from '../../components/tjenester/Seksjon';
import { tjenesteAlternativer } from '../../constants/tjenesteAlternativer';

interface Props {
  slug: string;
}

export default function Tjenester({ slug }: Props): JSX.Element {
  const tjeneste = tjenesteAlternativer.find((tjeneste) => tjeneste.slug === slug) ?? tjenesteAlternativer[0];
  return (
    <main className="main mt-0 pt-40">
      <section className='lg:mb-40 mb-24'>
        <header className="flex flex-col w-full">
          <div className="flex items-center mb-16">
            <h2 className="mr-8 header-title"> {tjeneste.tittel} </h2>
          </div>
          <div className="header-text-container">
            <p className="header-text">{tjeneste.tekst}</p>
          </div>
        </header>
        <div className="flex flex-col gap-y-36 lg:mt-36 md:mt-24 mt-12 w-full">
          {tjeneste.seksjoner.map((seksjon, index) => (
            <Seksjon key={index} seksjon={seksjon} reverse={index % 2 !== 0} />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  return {
    props: {
      slug,
    },
  };
}