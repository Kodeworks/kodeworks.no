import { urlFor } from '../../lib/sanity';

interface Props {
  contactSchema: NonNullable<Sanity.Default.Schema.Contact>;
}

export default function Contact({ contactSchema }: Props) {
  return (
    <section className="col-span-1 lg:col-span-2 flex flex-col gap-5 relative py-16 justify-center">
      <div className="full-screen-width h-full absolute bg-[var(--color-grey)] -z-10"></div>
      <h2 className="">{contactSchema.title}</h2>
      <p className="">{contactSchema.subText}</p>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
        {contactSchema.contactInfos?.map((person) => {
          return (
            <div key={person.phone} className="flex flex-col lg:flex-row gap-4 lg:items-end">
              {person.image && (
                <img
                  className="w-[250px] h-[350px]"
                  style={{ aspectRatio: 'auto 250 / 350' }}
                  src={urlFor(person.image).height(350).width(250).url()}
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
