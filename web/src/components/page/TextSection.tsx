import { PortableText } from '@portabletext/react';

interface Props {
  textSectionSchema: NonNullable<Sanity.Default.Schema.TextSection>;
}

export default function TextSection({ textSectionSchema }: Props) {
  return (
    <section className="max-w-4xl">
      <h2>{textSectionSchema.heading}</h2>
      {textSectionSchema.text && <PortableText value={textSectionSchema.text} />}
    </section>
  );
}
