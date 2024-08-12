import { useState } from "react";
import { GreenArrowLeft, GreenArrowRight } from "../Icons";

const CustomerReviews = () => {
  const allCustomerReviews = [
    {
      customer: "Equinor",
      text: "Kodeworks var helt fantastiske å jobbe med.",
      signature: "Signatur",
      picture: "/logos/equinor-logo.png",
    },
    {
      customer: "DNB",
      text: "Kodeworks var helt fantastiske å jobbe med.",
      signature: "Signatur DNB ",
      picture: "/logos/dnb.png",
    },
    {
      customer: "Kongsberg",
      text: "Kodeworks var helt fantastiske å jobbe med.",
      signature: "Signatur",
      picture: "/logos/kongsberg.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allCustomerReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allCustomerReviews.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col gap-12">
      <h2 className="section-title">Kundeomtaler</h2>
      <div className="hidden md:flex flex-row space-x-8">
        {
          allCustomerReviews.map((review) => (
            <article
              key={review.customer}
              className="flex flex-col w-1/3 items-center text-center gap-12"
            >
              <img
                className="md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-2xl"
                src={review.picture}
                alt={review.customer}
              />
              <p>
                {review.text}
                <br></br>
                <br></br>
                <i className="italic">{review.signature}</i>
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
                key={allCustomerReviews[currentIndex].customer}
                className="flex flex-col w-1/3 items-center text-center gap-12"
              >
                <img
                  className="w-[250px] rounded-2xl"
                  src={allCustomerReviews[currentIndex].picture}
                  alt={allCustomerReviews[currentIndex].customer}
                />
                <p>
                  {allCustomerReviews[currentIndex].text}
                  <br></br>
                  <br></br>
                  <i className="italic">{allCustomerReviews[currentIndex].signature}</i>
                </p>
              </article>
        <button onClick={handleNext} className="button-unstyled">
          <GreenArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
