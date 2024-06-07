import { useContext, useEffect } from 'react';
import { ClipContentContext } from '../../context/ClipContentContext';
import { urlFor } from '../../lib/sanity';
import { useClipText } from '../../utils/useClipText';

interface Props {
  contactSchema: NonNullable<Sanity.Default.Schema.Contact>;
}

export default function Contact({ contactSchema }: Props) {
  const { changeClipMode } = useContext(ClipContentContext);

  const shouldClipText = useClipText([{ id: 'contact', colorMode: 'grey-mode' }]);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText, changeClipMode]);
  return (
    <section
      className="col-span-1 lg:col-span-2 flex flex-col gap-5 relative py-16 justify-center"
      id="contact"
    >
      <div className="full-screen-width h-full absolute bg-[var(--color-grey)] -z-10"></div>
      <h2 className="">{contactSchema.title}</h2>
      <p className="">{contactSchema.subText}</p>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
        {contactSchema.contactInfos?.map((person) => {
          return (
            <div key={person.phone} className="flex flex-col lg:flex-row gap-4 lg:items-end">
              {person.image && (
                <img
                  className="max-w-[250px]"
                  style={{ aspectRatio: 'auto 250 / 350' }}
                  src={urlFor(person.image).url()}
                  alt={''}
                />
              )}
              <div className="flex flex-col">
                <h4>{person.name}</h4>
                <span>{person.phone}</span>
                <span>{person.jobTitle}</span>
                <span>{person.email}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
