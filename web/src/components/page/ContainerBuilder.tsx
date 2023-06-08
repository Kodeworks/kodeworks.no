import {
  isCallToActionPageContent,
  isIllustrationPageContent,
  isListSectionPageContent,
  isParagraphPageContent,
  isTextSectionPageContent,
} from '../../utils/type-guards';
import TextSection from './TextSection';
import ListSection from './ListSection';
import CallToAction from './CallToAction';
import Illustration from './Illustration';
import Paragraph from './Paragraph';
import classNames from 'classnames';

interface Props {
  containerSchema: NonNullable<Sanity.Default.Schema.Container>;
}

export default function ContainerBuilder({ containerSchema }: Props) {
  if (!containerSchema.content) {
    return null;
  }

  const classes = classNames('flex flex-col gap-8 relative', {
    'col-span-1 lg:col-span-2': containerSchema.fullWidth,
    'w-min': !containerSchema.fullWidth,
    [`bg-[${containerSchema.background}]`]: containerSchema.background,
  });

  return (
    <div className={classes}>
      {containerSchema.fullWidth && (
        <div
          className={`full-screen-width h-full absolute bg-[${containerSchema.background}] -z-10`}
        />
      )}
      <div className="p-8">{containerSchema.content.map(toComponent)}</div>
    </div>
  );
}

const toComponent = (schema: unknown) => {
  if (isTextSectionPageContent(schema)) {
    return <TextSection key={schema._key} textSectionSchema={schema} />;
  }
  if (isListSectionPageContent(schema)) {
    return <ListSection key={schema._key} listSectionSchema={schema} />;
  }
  if (isCallToActionPageContent(schema)) {
    return <CallToAction key={schema._key} ctaSchema={schema} />;
  }
  if (isIllustrationPageContent(schema)) {
    return <Illustration key={schema._key} illustrationSchema={schema} />;
  }
  if (isParagraphPageContent(schema)) {
    return <Paragraph key={schema._key} paragraphSchema={schema} />;
  }

  return null;
};
