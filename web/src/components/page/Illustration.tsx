import { urlFor } from '../../lib/sanity';

interface Props {
  illustrationSchema: NonNullable<Sanity.Default.Schema.Illustration>;
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
