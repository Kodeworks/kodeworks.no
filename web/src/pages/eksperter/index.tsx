import { Person } from '../../types';
import { getPeople } from '../../lib/sanity';
import PageHeader from '../../components/PageHeader';

export default function People({ people }: { people: Person[] }): JSX.Element {
  return (
    <main className="main mt-0 pt-40">
      <section className="w-full">
        <header className="flex flex-col w-full lg:mb-20 mb-10">
          <PageHeader firstWord={'Våre '} secondWord={'eksperter'}/>
          <div className="header-text-container">
            <p className="header-text">
              I Kodeworks er vi { people.length } fantastiske mennesker som brenner for faget, fordelt på kontorer i Oslo og Trondheim. Vi tror på verdiskapning gjennom åpenhet, kompetanse og dedikasjon, og vi er engasjerte i å levere førsteklasses løsninger til våre kunder.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {
            people.map((person, index) => {
              return (
                <article
                  key={index}
                  className="flex flex-col text-center"
                >
                  <div className="lg:h-[65vh] h-[80vh] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
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
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const people = await getPeople();

  return {
    props: {
      people,
    },
    revalidate: 10,
  };
}
