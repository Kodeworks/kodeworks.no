import { useState } from "react";
import { GreenArrowLeft, GreenArrowRight } from "../Icons";

const Kundeomtaler = () => {
  const alleKundeOmtaler = [
    {
      selskap: "Equinor",
      tekst: "Kodeworks var helt fantastiske å jobbe med.",
      signatur: "Signatur",
      bilde: "/logos/equinor-logo.png",
    },
    {
      selskap: "DNB",
      tekst: "Kodeworks var helt fantastiske å jobbe med.",
      signatur: "Signatur DNB ",
      bilde: "/logos/dnb.png",
    },
    {
      selskap: "Kongsberg",
      tekst: "Kodeworks var helt fantastiske å jobbe med.",
      signatur: "Signatur",
      bilde: "/logos/kongsberg.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? alleKundeOmtaler.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === alleKundeOmtaler.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col gap-12 section-padding">
      <h2 className="section-title">Kundeomtaler</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {
          alleKundeOmtaler.map((kundeOmtale) => (
            <article
              key={kundeOmtale.selskap}
              className="flex flex-col w-1/3 items-center text-center gap-12"
            >
              <img
                className="md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-2xl"
                src={kundeOmtale.bilde}
                alt={kundeOmtale.selskap}
              />
              <p>
                {kundeOmtale.tekst}
                <br></br>
                <br></br>
                <i className="italic">{kundeOmtale.signatur}</i>
              </p>
            </article>
          ))
        }
      </div>
      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full">
        <button onClick={handlePrevious} className="button-unstyled">
          <GreenArrowLeft />
        </button>
          <article
                key={alleKundeOmtaler[currentIndex].selskap}
                className="flex flex-col w-1/3 items-center text-center gap-12"
              >
                <img
                  className="w-[250px] rounded-2xl"
                  src={alleKundeOmtaler[currentIndex].bilde}
                  alt={alleKundeOmtaler[currentIndex].selskap}
                />
                <p>
                  {alleKundeOmtaler[currentIndex].tekst}
                  <br></br>
                  <br></br>
                  <i className="italic">{alleKundeOmtaler[currentIndex].signatur}</i>
                </p>
              </article>
        <button onClick={handleNext} className="button-unstyled">
          <GreenArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Kundeomtaler;
