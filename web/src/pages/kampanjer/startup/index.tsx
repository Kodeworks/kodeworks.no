import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../_app';

const StartupPage: NextPageWithLayout = () => {
  const sections = [
    {
      title: 'Realisere din idé',
      text: 'Vi ser ofte at startups står ovenfor utfordringer med å realisere sine prosjekter raskt og kostnadseffektivt. Å leie inn et team av konsulenter som jobber digitalt eller in-house kan ofte være en mer lønnsom og bedre løsning enn å ansette flere folk for enkeltstående prosjekter.',
      imageUrl: '/static/photos/tjenester/kodeworks-tjenester1.png',
      imageAlt: 'Bilde av tech folk som sitter rundt et bord med pcer.',
      reverse: false,
    },
    {
      title: 'Hva får du?',
      text: 'Sammen gjennomgår vi dine prosjektkrav, og kommer med anbefalinger for hvordan du kan realisere prosjektet. Vi gir deg en oversikt over hva som er mulig å få til, og hva som er realistisk innenfor din tidsramme og budsjett.',
      imageUrl:
        'https://cdn.sanity.io/images/zkl0178p/production/d763f0c01be6aea31f7da09052738ded1db0db73-960x522.jpg',
      imageAlt: 'Håndtrykk mellom to personer.',
      reverse: true,
    },
  ];

  return (
    <main className="main mt-0 pt-40">
      <section>
        <header className="flex flex-col w-full">
          <div className="flex flex-wrap items-center mb-16">
            <h2 className="mr-8 md:text-7xl text-5xl green-text ">Gratis </h2>
            <h2 className="md:text-7xl text-5xl">konsulenttime</h2>
          </div>

          <div className="header-text-container">
            <p className="header-text">
              Vi tilbyr gratis konsulenttime for start-ups og scale-ups som ønsker å realisere sine
              IT-prosjekter.
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-y-36 lg:mt-36 md:mt-24 mt-12 w-full">
          {sections.map((section, index) => {
            return (
              <article
                key={index}
                className={`${
                  section.reverse ? 'justify-end' : ''
                } flex lg:flex-row flex-col items-center gap-[44px]`}
              >
                <img
                  className={`${
                    section.reverse ? 'lg:order-last' : 'order-first'
                  } lg:w-[30%] w-full`}
                  style={{ aspectRatio: '16/9', maxHeight: '300px' }}
                  src={section.imageUrl}
                  alt={section.imageAlt}
                />
                <div className="lg:w-1/3 w-full flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h3 className="section-title">{section.title}</h3>
                    {section.text && <p className="section-text">{section.text}</p>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

const CustomKontakt = () => {
  return <div className="section-padding">Kontakt oss</div>;
};

StartupPage.getInitialProps = async () => {
  return {
    kontakt: {
      title: 'Book gratis konsulenttime',
      subject: 'Kampanje startups',
      redirect: 'https://kodeworks.no/kampanje/startups/#kontaktoss',
    },
  };
};

export default StartupPage;
