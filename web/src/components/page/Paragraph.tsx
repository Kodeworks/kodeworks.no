import { PortableText } from '@portabletext/react';
import { Paragraph as ParagraphType } from '../../types/sanity.types';

interface Props {
  paragraphSchema: NonNullable<ParagraphType>;
}

export default function Paragraph({ paragraphSchema }: Props) {
  if (!paragraphSchema.text) {
    return null;
  }
  return <PortableText value={paragraphSchema.text} />;
}
