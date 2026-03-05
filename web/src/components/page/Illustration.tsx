import { urlFor } from '../../lib/sanity';
import { Illustration as IllustrationType } from '../../types/sanity.types';

interface Props {
  illustrationSchema: NonNullable<IllustrationType>;
}

export default function Illustration({ illustrationSchema }: Props) {
  return (
    <img
      style={{ maxWidth: '100%' }}
      src={urlFor(illustrationSchema.image).url()}
      alt={illustrationSchema.image?.alt}
    />
  );
}
