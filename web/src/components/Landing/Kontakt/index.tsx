import "./styles.css";

const Kontakt = () => {
  return (
    <div id="kontaktoss" className="flex lg:flex-row flex-col section-padding gap-10 w-full">
      <img
        src="/static/photos/kontoret.jpeg"
        alt="Kodeworks kontoret Oslo"
        className="w-3/6 h-full object-cover overflow-hidden"
      />
      <div className="flex flex-col items-start lg:justify-between justify-start gap-4 w-full">
        <h2>Kontakt oss</h2>
        <p>
          Vil du ha rask hjelp eller ekspertråd? <br></br>
          Ta kontakt med oss for generell støtte, eller ring David direkte.
        </p>
        <div className="flex flex-col items-start">
          <p className="flex items-center justify-center gap-4">
            <img src="/static/icons/email.svg" />
            post@kodeworks.no
          </p>
          <p className="flex items-center justify-center gap-4">
            <img src="/static/icons/phone.svg" />
            +47 416 70 269
          </p>
        </div>


        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <div className="flex flex-col lg:w-1/3 w-2/3 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="navn">
                  Navn
                </label>
                <input type="text" id="navn" placeholder="Ola Nordmann" className="kontakt-input" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">
                  E-mail
                </label>
                <input type="email" id="email" placeholder="ola@gmail.no" className="kontakt-input" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="navn">
                  Telefon nummer
                </label>
                <input type="tel" id="navn" placeholder="99 99 99 99" className="kontakt-input" />
              </div>
          </div>

            <div className="flex flex-col gap-2 lg:w-1/2 w-2/3">
              <label htmlFor="melding">
                Melding
              </label>
              <textarea id="navn" placeholder="Skriv en melding til oss" rows={10} className="kontakt-input h-full" />
            </div>
          </div>

          <button className="button text-xl px-20 py-3 lg:w-1/3 w-2/3">Send</button>

      </div>
    </div>
  );
};

export default Kontakt;
