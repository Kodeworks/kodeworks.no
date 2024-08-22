import { useEffect, useState } from 'react';
import './styles.css';

interface Props {
  subject: string;
}

const CampaignContact = ({ subject }: Props) => {
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
  return (
    <>
      <div
        id="kontaktoss"
        className={dispatchSuccess ? 'hidden' : 'flex lg:flex-row flex-col items-center justify-center gap-10 w-full'}
      >
        <form className="w-full flex flex-col items-center" id="form">
          <input type="hidden" name="access_key" value="462247df-28ef-4e87-a5c8-8f4fc7263636" />
          <input type="hidden" name="subject" value={subject} />
          <input type="hidden" name="from_name" value="kodeworks.no" />
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col lg:w-1/3 w-4/5 gap-4 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Navn</label>
                <input
                  type="text"
                  required
                  id="name"
                  name="navn"
                  autoComplete='name'
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
                  autoComplete='email'
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
                  autoComplete='tel'
                  placeholder="Ditt telefonnummer"
                  className="contact-input"
                />
              </div>
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

export default CampaignContact;
