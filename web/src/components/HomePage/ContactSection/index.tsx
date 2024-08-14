import { useEffect, useState } from 'react';
import './styles.css';

interface Props {
  title?: string;
  body?: string;
  subject?: string;
  redirect?: string;
}

const ContactSection = ({ title, subject, body, redirect }: Props) => {
  const [dispatchSuccess, setDispatchSuccess] = useState(false);
  const [hasMountedForm, setHasMountedForm] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);

  function mountFormDispatcher() {
    const form = document.querySelector('form');
    if (!form) return;
    setHasMountedForm(true);
    form.addEventListener('submit', async (e) => {
      setIsDispatching(true);
      e.preventDefault();

      try {
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);
        const jsonPayload = JSON.stringify(formObject);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
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

  if (!title) {
    return (
      <>
        <div
          id="kontaktoss"
          className={dispatchSuccess ? 'hidden' : 'flex lg:flex-row flex-col gap-10 w-full'}
        >
          <img
            src="/static/photos/kontoret.jpeg"
            alt="KodeWorks Oslo"
            className="md:w-3/6 w-4/5 h-full object-cover overflow-hidden"
          />
          <div className="flex flex-col items-start lg:justify-between justify-start gap-4 w-full">
            <h2>Kontakt oss</h2>
            <p>
              Vil du ha rask hjelp eller ekspertråd? <br></br>
              Ta kontakt med oss så hjelper vi deg.
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
                    <label htmlFor="name">Navn</label>
                    <input
                      type="text"
                      required
                      id="name"
                      name="navn"
                      placeholder="Ditt navn"
                      className="contact-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Epost</label>
                    <input
                      type="email"
                      required
                      id="email"
                      name="epost"
                      placeholder="din@epost.no"
                      className="contact-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="telephone">Telefon</label>
                    <input
                      type="tel"
                      id="telephone"
                      required
                      name="telefon"
                      placeholder="Ditt telefonnummer"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-1/2 w-4/5">
                  <label htmlFor="message">Melding</label>
                  <textarea
                    id="message"
                    name="melding"
                    placeholder="Skriv en melding til oss"
                    rows={10}
                    className="contact-input h-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isDispatching}
                className="button text-xl mt-4 py-3 pl-2 px-2 lg:w-1/3 w-4/5"
              >
                {isDispatching ? 'Sender...' : 'Send melding'}
              </button>
            </form>
          </div>
        </div>
        <div
          className={dispatchSuccess ? 'flex flex-col text-center gap-10 w-full mb-32' : 'hidden'}
        >
          <h2>
            Takk for din henvendelse! <br></br>
          </h2>
          <p>Vi har mottatt din melding og vil ta kontakt med deg så raskt som mulig.</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          id="kontaktoss"
          className={dispatchSuccess ? 'hidden' : 'flex lg:flex-row flex-col gap-10 w-full'}
        >
          <div className="flex flex-col items-start lg:justify-between justify-start gap-4 w-full">
            {/* <h2>{title}</h2> */}
            {body && (
              <p>
                {body}
              </p>
            )}
            <form className="w-full" id="form">
              <input type="hidden" name="access_key" value="462247df-28ef-4e87-a5c8-8f4fc7263636" />
              <input type="hidden" name="subject" value={subject} />
              <input type="hidden" name="from_name" value="kodeworks.no" />
              <input
                type="hidden"
                name="redirect"
                value={redirect || 'https://kodeworks.no/#kontaktoss'}
              />
              <div className="flex lg:flex-row flex-col gap-4 w-full">
                <div className="flex flex-col lg:w-1/3 w-4/5 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Navn</label>
                    <input
                      type="text"
                      required
                      id="name"
                      name="navn"
                      placeholder="Ditt navn"
                      className="contact-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Epost</label>
                    <input
                      type="email"
                      required
                      id="email"
                      name="epost"
                      placeholder="din@epost.no"
                      className="contact-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="telephone">Telefon</label>
                    <input
                      type="tel"
                      required
                      id="telephone"
                      name="telefon"
                      placeholder="Ditt telefonnummer"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-1/2 w-4/5">
                  <label htmlFor="message">Melding</label>
                  <textarea
                    id="message"
                    name="melding"
                    placeholder="Si noe kort om prosjektet (valgfritt)"
                    rows={5}
                    className="contact-input h-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isDispatching}
                className="button text-xl mt-4 py-3 pl-2 px-2 lg:w-1/3 w-4/5"
              >
                {isDispatching ? 'Booker...' : 'Book nå'}
              </button>
            </form>
          </div>
        </div>
        <div
          className={dispatchSuccess ? 'flex flex-col text-center gap-10 w-full mb-32' : 'hidden'}
        >
          <h2>
            Takk for din henvendelse! <br></br>
          </h2>
          <p>Vi vil kontakte deg snart for å avtale tid for gratis konsultasjon.</p>
        </div>
      </>
    );
  }
};

export default ContactSection;
