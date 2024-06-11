import { Person } from '../../types';
import { getPeople } from '../../lib/sanity';

export default function People({ people }: { people: Person[] }): JSX.Element {
  return (
    <main className="main mt-0 pt-40">
      <section className="w-full">
        <header className="flex flex-col w-full lg:mb-20 mb-10">
          <div className="flex items-center mb-16">
            <h2 className="mr-8 md:text-7xl text-4xl">Våre </h2>
            <h2 className="green-text md:text-7xl text-4xl">eksperter</h2>
          </div>
          <p className="md:w-3/5 lg:w-1/2 xl:w-1/3 md:self-end self-start">
            I Kodeworks er vi 33 fantastiske mennesker som brenner for faget, fordelt på kontorer i Oslo og Trondheim. Vi tror på verdiskapning gjennom åpenhet, kompetanse og dedikasjon, og vi er engasjerte i å levere førsteklasses løsninger til våre kunder.
          </p>
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
