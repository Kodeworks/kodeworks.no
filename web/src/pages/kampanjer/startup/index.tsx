import { NextPageWithLayout } from '../../_app';
import CampaignContact from '../../../components/HomePage/ContactSection/CampaignContact';
import { useRef } from 'react';

const StartupPage: NextPageWithLayout = () => {
  const contact = {
    title: 'Book gratis konsulenttime',
    subject: 'Kampanje startups',
    redirect: 'https://kodeworks.no/takk',
  }

  const section2Ref = useRef<HTMLElement>(null);

  const contactRef = useRef<HTMLElement>(null);
  const headerHeight = 85 + 10; // Height of the fixed header in pixels

  function calcOffsetPosition(element: HTMLElement) {
    const elementPosition = element.getBoundingClientRect().top;
    return elementPosition + window.scrollY - headerHeight;
  };

  const scrollToSection2 = () => {
    if (section2Ref.current) {
      window.scrollTo({
        top: calcOffsetPosition(section2Ref.current),
        behavior: 'smooth'
      });
    }
  };

  function scrollToContact() {
    if (contactRef.current) {
      window.scrollTo({
        top: calcOffsetPosition(contactRef.current),
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="main mt-[100px]">

      <section className="flex flex-col w-full h-[calc(var(--vh, 1vh) * 100)]">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="max-h-xl max-w-lg flex lg:items-start items-center justify-center">
            <img src="/images/workshop.png" className="rounded-3xl max-w-full max-h-full" />
          </div>

          <div className="flex flex-col items-center lg:justify-start text-center gap-4 lg:gap-8 lg:ml-8">
            <div>
              <h2 className="mr-8 md:text-7xl text-5xl green-text mt-8">Gratis </h2>
              <h2 className="md:text-7xl text-5xl">konsulenttime</h2>
            </div>

            <p className="lg:text-4xl text-xl font-semibold">
              Vi hjelper deg med å finne ut hvordan du kan <span className="green-text">realisere ditt prosjekt.</span>
            </p>

            <BookNowBtn handleClick={scrollToContact} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-24 lg:mt-48">
          <svg
            onClick={scrollToSection2}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 13 8"
          >
            <path d="M1 1L6.5 6.5L12 1" stroke="#8f8f8f" strokeWidth="1.3" fill="none" />
          </svg>
        </div>
      </section>

      <section ref={section2Ref} className="flex flex-col w-full h-[calc(var(--vh, 1vh) * 100)] items-center mt-20 mb-20">
        <h1 className="text-4xl font-black text-center mb-12 lg:mb-20">
          Selskaper som bruker Kodeworks
        </h1>
        <div className="grid grid-cols-3 gap-4 gap-y-8 lg:gap-8 lg:gap-y-12">
          <div className="flex items-center justify-center">
            <img src="/logos/thales.png" className="max-w-full max-h-6" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/kongsberg.png" className="max-w-full max-h-6" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/remarkable.png" className="max-w-full max-h-6" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/statkraft.png" className="max-w-full max-h-6" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/dnb.png" className="max-w-full max-h-10" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/logos/obos.png" className="max-w-full max-h-6" />
          </div>
        </div>
        <h1 className="text-4xl font-black text-center lg:mt-20 mt-12 relative">
          Hva får du?
          <span
            className="absolute w-1/2 h-[2px] bg-current"
            style={{
              bottom: '-4px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </h1>
        <div className="space-y-4 lg:mt-12 mt-6 mb-10">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-white border-black rounded-none"
                checked
                readOnly
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="0" ry="0" fill="white" />
                <path d="M5 12l4 4L19 7" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <span className="ml-3 text-lg">Gå gjennom problemstillinger</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-white border-black rounded-none"
                checked
                readOnly
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="0" ry="0" fill="white" />
                <path d="M5 12l4 4L19 7" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <span className="ml-3 text-lg">Eksperthjelp i 30 minutter</span>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-white border-black rounded-none"
                checked
                readOnly
              />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="0" ry="0" fill="white" />
                <path d="M5 12l4 4L19 7" stroke="black" strokeWidth="2" />
              </svg>
            </div>
            <span className="ml-3 text-lg">Budsjettvurdering</span>
          </div>
        </div>

        <BookNowBtn handleClick={scrollToContact} />

      </section>


      <section ref={contactRef} className="mb-48">
        <h1 className="text-4xl font-black text-center mb-12 lg:mb-20">
          Book en uforpliktende gratis konsulenttime
        </h1>
        <div className="flex flex-row justify-evenly lg:justify-center items-center mb-12">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src="/images/david.png" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col items-center ml-4">
            <h2>David Garner</h2>
            <p>Konsulent, Kodeworks</p>
          </div>
        </div>

        <CampaignContact subject={contact.subject} />
      </section>

    </main>
  );
};

function BookNowBtn({ handleClick }: { handleClick: () => void }) {
  return (
    <button
      onClick={handleClick}
      className="btn btn-primary active:bg-green-950 rounded-xl text-white bg-green-900 font-bold text-xl w-fit px-6 py-2 cursor-pointer">
      Book Nå
    </button>
  )
}
StartupPage.getInitialProps = async () => {
  return {
    disableContact: true,
  };
};

export default StartupPage;
