import { CallToAction as CallToActionType } from '../../types/sanity.types';
interface Props {
  ctaSchema: NonNullable<CallToActionType>;
}
export default function CallToAction({ ctaSchema }: Props) {
  return (
    <a className="callToAction" href={ctaSchema.url}>
      {ctaSchema.linkText}
    </a>
  );
}
