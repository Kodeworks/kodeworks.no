import { useEffect, useState } from "react";
import "./styles.css";

const Kontakt = () => {
  const [ dispatchSuccess, setDispatchSuccess ] = useState(false);
  const [ hasMountedForm, setHasMountedForm ] = useState(false);
  const [ isDispatching, setIsDispatching ] = useState(false);
   
  function mountFormDispatcher() {
    const form = document.querySelector("form");
    if (!form) return;
    setHasMountedForm(true);
    form.addEventListener("submit", async (e) => {
      setIsDispatching(true);
      e.preventDefault();

      try {
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);
        const jsonPayload = JSON.stringify(formObject);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: jsonPayload,
        });
        if (response.ok) {
          setDispatchSuccess(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setIsDispatching(false);
        }, 2000);
      }
    });
  }

  useEffect(() => {
    if (!hasMountedForm) {
      mountFormDispatcher();
    }
  });


  return (
    <>
    <div id="kontaktoss" className={dispatchSuccess ? 'hidden' : 'flex lg:flex-row flex-col gap-10 w-full'}>
      <img
        src="/static/photos/kontoret.jpeg"
        alt="Kodeworks kontoret Oslo"
        className="md:w-3/6 w-4/5 h-full object-cover overflow-hidden"
      />
      <div className="flex flex-col items-start lg:justify-between justify-start gap-4 w-full">
        <h2>Kontakt oss</h2>
        <p>
          Vil du ha rask hjelp eller ekspertråd? <br></br>
          Ta kontakt med oss for generell støtte, eller ring David direkte.
        </p>
        <div className="flex flex-col items-start">
          <p className="flex items-center justify-center gap-4">
            <img src="/static/icons/email.svg" alt="Email icon" />
            post@kodeworks.no
          </p>
          <p className="flex items-center justify-center gap-4">
            <img src="/static/icons/phone.svg" alt="Phone icon" />
            +47 416 70 269
          </p>
        </div>

        <form className="w-full" id="form">
          <input type="hidden" name="access_key" value="462247df-28ef-4e87-a5c8-8f4fc7263636" />
          <input type="hidden" name="subject" value="Ny kontakt webside" />
          <input type="hidden" name="from_name" value="kodeworks.no" />
          <input type="hidden" name="redirect" value="https://kodeworks.no/#kontaktoss" />
          <div className="flex lg:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col lg:w-1/3 w-4/5 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="navn">
                    Navn
                  </label>
                  <input type="text" required id="navn" name="navn" placeholder="Ola Nordmann" className="kontakt-input" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email">
                    E-mail
                  </label>
                  <input type="email" required id="email" name="epost" placeholder="ola@gmail.no" className="kontakt-input" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="navn">
                    Telefon nummer
                  </label>
                  <input type="tel" id="navn" required name="telefon" placeholder="99 99 99 99" className="kontakt-input" />
                </div>
            </div>

              <div className="flex flex-col gap-2 lg:w-1/2 w-4/5">
                <label htmlFor="melding">
                  Melding
                </label>
                <textarea id="navn" name="melding" placeholder="Skriv en melding til oss" rows={10} className="kontakt-input h-full" />
              </div>
            </div>

            <button type="submit" disabled={isDispatching} className="button text-xl mt-4 py-3 pl-2 px-2 lg:w-1/3 w-4/5">
              {isDispatching ? "Sender..." : "Send melding"}
            </button>
          </form>

      </div>
    </div>
    <div className={dispatchSuccess ? 'flex flex-col text-center section-padding gap-10 w-full mb-32' : 'hidden'}>
      <h2>
        Takk for din henvendelse! <br></br>
      </h2>
      <p>
        Vi har mottatt din melding og vil ta kontakt med deg så raskt som mulig.
      </p>
    </div>
    </>
  );
};

export default Kontakt;
