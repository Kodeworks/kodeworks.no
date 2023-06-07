import { PortableText } from '@portabletext/react';

interface Props {
  paragraphSchema: NonNullable<Sanity.Default.Schema.Paragraph>;
}

export default function Paragraph({ paragraphSchema }: Props) {
  if (!paragraphSchema.text) {
    return null;
  }
  return <PortableText value={paragraphSchema.text} />;
}
