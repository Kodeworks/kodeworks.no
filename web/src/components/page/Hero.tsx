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
      <div className="flex flex-col md:flex-row gap-10">
        <img src={urlFor(heroSchema.image).width(458).height(286).url()} />
        <div className="flex flex-col gap-20">
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
