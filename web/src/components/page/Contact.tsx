import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import style from './calculator.module.css';

interface Props {
  contactSchema: NonNullable<Sanity.Default.Schema.Contact>;
}

export default function Contact({ contactSchema }: Props) {
  return (
    <section className="col-span-1 lg:col-span-2 flex flex-col gap-5 relative py-5 justify-center">
      <div className="full-screen-width h-full absolute bg-[#E8E7E6] -z-10"></div>
      <h2 className="">{contactSchema.title}</h2>
      <p className="">{contactSchema.subText}</p>
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4">
        {contactSchema.contactInfos?.map((person, index) => {
          return (
            <div key={index} className="flex flex-col lg:flex-row gap-x-4 lg:items-end">
              <img
                className="w-[250px] h-[350px]"
                style={{ aspectRatio: 'auto 250 / 350' }}
                src={urlFor(person.image).height(350).width(250).url()}
                alt={''}
              />
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
