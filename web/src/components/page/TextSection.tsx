import { PortableText } from '@portabletext/react';

interface Props {
  textSectionSchema: NonNullable<Sanity.Default.Schema.TextSection>;
}

export default function TextSection({ textSectionSchema }: Props) {
  return (
    <section className="max-w-4xl text-section">
      <h2 className="mb-6">{textSectionSchema.heading}</h2>
      {textSectionSchema.text && <PortableText value={textSectionSchema.text} />}
    </section>
  );
}
