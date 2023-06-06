import { PageContent } from '../types';

export const isPageContent = <T>(schema: unknown): schema is PageContent<T> => {
  const object = schema as PageContent<T>;
  return Boolean(object && object._type && object._key);
};
export const isHeroPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Sanity.Default.Schema.Hero>> =>
  isPageContent(schema) && schema._type === 'hero';
export const isTextSectionPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Sanity.Default.Schema.TextSection>> =>
  isPageContent(schema) && schema._type === 'textSection';
export const isListSectionPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Sanity.Default.Schema.ListSection>> =>
  isPageContent(schema) && schema._type === 'listSection';
