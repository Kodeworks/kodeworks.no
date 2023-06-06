import {
  isHeroPageContent,
  isListSectionPageContent,
  isTextSectionPageContent,
} from '../../utils/type-guards';
import Hero from './Hero';
import TextSection from './TextSection';
import ListSection from './ListSection';

interface Props {
  pageSchema: NonNullable<Sanity.Default.Schema.Page>;
}

export default function PageBuilder({ pageSchema }: Props) {
  return (
    <article className="grid grid-cols-2 gap-20">{pageSchema.content?.map(toComponent)}</article>
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
  return null;
};
