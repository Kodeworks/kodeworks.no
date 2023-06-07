import { urlFor } from '../../lib/sanity';

interface Props {
  illustrationSchema: NonNullable<Sanity.Default.Schema.Illustration>;
}

export default function Illustration({ illustrationSchema }: Props) {
  return (
    <img
      src={urlFor(illustrationSchema.image).width(300).height(300).url()}
      alt={illustrationSchema.image?.alt}
    />
  );
}
