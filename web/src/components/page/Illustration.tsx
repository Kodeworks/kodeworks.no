import { urlFor } from '../../lib/sanity';

interface Props {
  illustrationSchema: NonNullable<Sanity.Default.Schema.Illustration>;
}

export default function Illustration({ illustrationSchema }: Props) {
  return null;
  return (
    <img
      src={urlFor(illustrationSchema.image).width(400).height(400).url()}
      alt={illustrationSchema.image?.alt}
    />
  );
}
