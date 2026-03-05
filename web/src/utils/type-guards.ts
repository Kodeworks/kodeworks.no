import { PageContent } from '../types';
import {
  Calculator,
  CallToAction,
  Contact,
  Container,
  Hero,
  Illustration,
  ListSection,
  Paragraph,
  TextSection,
} from '../types/sanity.types';

export const isPageContent = <T>(schema: unknown): schema is PageContent<T> => {
  const object = schema as PageContent<T>;
  return Boolean(object && object._type && object._key);
};
export const isHeroPageContent = (schema: unknown): schema is PageContent<NonNullable<Hero>> =>
  isPageContent(schema) && schema._type === 'hero';
export const isTextSectionPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<TextSection>> =>
  isPageContent(schema) && schema._type === 'textSection';
export const isListSectionPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<ListSection>> =>
  isPageContent(schema) && schema._type === 'listSection';
export const isContainerPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Container>> =>
  isPageContent(schema) && schema._type === 'container';
export const isCallToActionPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<CallToAction>> =>
  isPageContent(schema) && schema._type === 'callToAction';
export const isIllustrationPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Illustration>> =>
  isPageContent(schema) && schema._type === 'illustration';
export const isParagraphPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Paragraph>> =>
  isPageContent(schema) && schema._type === 'paragraph';
export const isCalculatorPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Calculator>> =>
  isPageContent(schema) && schema._type === 'calculator';
export const isContactPageContent = (
  schema: unknown
): schema is PageContent<NonNullable<Contact>> =>
  isPageContent(schema) && schema._type === 'contact';
