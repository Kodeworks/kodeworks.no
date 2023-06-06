interface Props {
  ctaSchema: NonNullable<Sanity.Default.Schema.CallToAction>;
}
export default function CallToAction({ ctaSchema }: Props) {
  return (
    <a className="callToAction" href={ctaSchema.url}>
      {ctaSchema.linkText}
    </a>
  );
}
