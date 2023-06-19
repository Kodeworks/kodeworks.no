import {
  isCallToActionPageContent,
  isContainerPageContent,
  isHeroPageContent,
  isIllustrationPageContent,
  isListSectionPageContent,
  isParagraphPageContent,
  isTextSectionPageContent,
  isCalculatorPageContent,
} from '../../utils/type-guards';
import Hero from './Hero';
import TextSection from './TextSection';
import ListSection from './ListSection';
import ContainerBuilder from './ContainerBuilder';
import CallToAction from './CallToAction';
import Illustration from './Illustration';
import Paragraph from './Paragraph';
import Calculator from './Calculator';

interface Props {
  pageSchema: NonNullable<Sanity.Default.Schema.Page>;
}

export default function PageBuilder({ pageSchema }: Props) {
  if (!pageSchema.content) {
    return null;
  }
  // TODO: We should tweak the layouts and styling when benefits and calculator is in place.
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      {pageSchema.content.map(toComponent)}
    </article>
  );
}

const toComponent = (schema: unknown) => {
  if (isHeroPageContent(schema)) {
    return <Hero key={schema._key} heroSchema={schema} />;
  }
  if (isTextSectionPageContent(schema)) {
    return <TextSection key={schema._key} textSectionSchema={schema} />;
  }
  if (isListSectionPageContent(schema)) {
    return <ListSection key={schema._key} listSectionSchema={schema} />;
  }
  if (isContainerPageContent(schema)) {
    return <ContainerBuilder key={schema._key} containerSchema={schema} />;
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
  if (isCalculatorPageContent(schema)) {
    return <Calculator key={schema._key} careerSchema={schema} />;
  }
  return null;
};
