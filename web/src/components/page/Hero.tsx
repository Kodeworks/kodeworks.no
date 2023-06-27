import { urlFor } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import CallToAction from './CallToAction';

interface Props {
  heroSchema: NonNullable<Sanity.Default.Schema.Hero>;
}

export default function Hero({ heroSchema }: Props) {
  return (
    <section className="col-span-1 lg:col-span-2 flex flex-col gap-10">
      <h1>{heroSchema.heading}</h1>
      <div className="flex flex-col lg:flex-row gap-10 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] ">
        <img
          style={{ maxWidth: '100%' }}
          src={urlFor(heroSchema.image).url()}
          alt={heroSchema.image?.alt}
        />
        <div className="flex flex-col gap-10">
          {heroSchema.text && (
            <div className="max-w-lg">
              <PortableText value={heroSchema.text} />
            </div>
          )}
          {heroSchema.callToAction && <CallToAction ctaSchema={heroSchema.callToAction} />}
        </div>
      </div>
    </section>
  );
}
