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
import { useContext, useEffect, useId } from 'react';
import { useClipText } from '../../utils/useClipText';
import { ClipContentContext } from '../../context/ClipContentContext';

interface Props {
  containerSchema: NonNullable<Sanity.Default.Schema.Container>;
}

export default function ContainerBuilder({ containerSchema }: Props) {
  const { changeClipMode } = useContext(ClipContentContext);
  const componentId = useId();
  let colorMode = getColorMode(containerSchema);

  function getColorMode(containerSchema) {
    if (containerSchema.background === '#B6FF9E') {
      return 'green-mode';
    } else if (containerSchema.background === '#E8E7E6') {
      return 'grey-mode';
    }

    return '';
  }

  let shouldClipText = useClipText([{ id: componentId, colorMode: colorMode }]);

  useEffect(() => {
    if (colorMode) {
      changeClipMode(shouldClipText);
    }
  }, [shouldClipText, changeClipMode, colorMode]);

  if (!containerSchema.content) {
    return null;
  }

  const classes = classNames('flex flex-col gap-8 relative', {
    'col-span-1 lg:col-span-2': containerSchema.fullWidth,
    [`bg-[${containerSchema.background}]`]: containerSchema.background,
  });

  return (
    <div className={classes} id={componentId}>
      {containerSchema.fullWidth && (
        <div
          style={{ backgroundColor: `${containerSchema.background}` }}
          className={`full-screen-width h-full absolute -z-10`}
        />
      )}
      <div className="py-16 gap-y-6 flex flex-col">{containerSchema.content.map(toComponent)}</div>
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
