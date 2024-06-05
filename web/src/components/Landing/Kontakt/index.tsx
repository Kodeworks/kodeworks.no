const Kontakt = () => {
  return (
    <div id="kontaktoss" className="flex lg:flex-row flex-col section-padding gap-6">
      <img
        src="/static/photos/kontoret.jpeg"
        alt="Kodeworks kontoret Oslo"
        className="w-2/5 h-full object-cover overflow-hidden"
      />
      <div className="flex flex-col items-start justify-start gap-4">
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

        <div className="flex flex-row lg:flex-col gap-4">
          <div className="flex lg:flex-col flex-row">
            <div className="flex flex-col gap-2">
              <label htmlFor="navn">
                Navn
              </label>
              <input id="navn" placeholder="Ola Nordmann" className="kontakt-input" />
            </div>
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default Kontakt;
