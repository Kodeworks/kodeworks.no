import Section from '../../components/Services/Section';
import { serviceAlternatives } from '../../constants/serviceAlternatives';

interface Props {
  slug: string;
}

export default function Services({ slug }: Props): JSX.Element {
  const service = serviceAlternatives.find((service) => service.slug === slug) ?? serviceAlternatives[0];
  return (
    <main className="main mt-0 pt-40">
      <section className='lg:mb-40 mb-24'>
        <header className="flex flex-col w-full">
          <div className="flex items-center mb-16">
            <h2 className="mr-8 header-title"> {service.title} </h2>
          </div>
          <div className="header-text-container">
            <p className="header-text">{service.text}</p>
          </div>
        </header>
        <div className="flex flex-col gap-y-36 lg:mt-36 md:mt-24 mt-12 w-full">
          {service.sections.map((seksjon, index) => (
            <Section key={index} section={seksjon} reverse={index % 2 !== 0} />
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