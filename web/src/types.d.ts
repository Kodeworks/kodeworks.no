import { Image } from './lib/client';

export type Person = {
  name: string;
  image: string;
  email: string;
  urls?: SocialUrl[];
  projects: Project[];
};

export type Project = {
  name: DictText;
  description: DictText;
  image: string;
  extras?: DictText;
  urlName: string;
  technologies?: string[];
  content?: DictProjectContents | ProjectContent[];
  published?: boolean;
  output?: string[];
};

type SanityImage = {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
};

export type SanityProject = {
  name: string;
  description: DictText;
  image: SanityImage;
  slug: { current: string };
  technologies?: string[];
  content?: { en: any; no: any };
};

// New type from sanity. TODO remove the old Project type when it's phased out, and rename Projectv2 to Project
export type Projectv2 = {
  _id: string;
  name: string;
  description: {
    en: string;
    no: string;
  };
  image: Image;
  slug: {
    current: string;
  };
  technologies: string[];
};

export type ProjectContent =
  | ProjectContentTexts
  | ProjectContentHeading
  | ProjectContentImage
  | ProjectContentWideImage
  | ProjectContentQuote
  | ProjectContentOutput;

export type ProjectContentDescriptor =
  | 'texts'
  | 'heading'
  | 'image'
  | 'wideimage'
  | 'quote'
  | 'output';

export type ProjectContentHeading = {
  type: 'heading';
  value: DictText;
};

export type ProjectContentTexts = {
  type: 'texts';
  value: DictText[];
};

export type ProjectContentImage = {
  type: 'image';
  value: ProjectContentImageContent;
};

export type ProjectContentWideImage = {
  type: 'wideimage';
  value: ProjectContentImageContent;
};

export type ProjectContentImageContent = {
  src: string;
  alt?: string;
};

export type ProjectContentQuote = {
  type: 'quote';
  value: ProjectContentQuoteContent;
};

export type ProjectContentQuoteContent = {
  content: DictText;
  author?: string;
};

export type ProjectContentOutput = {
  type: 'output';
  value: DictText;
};

type SocialMediaName = 'twitter' | 'linkedin' | 'github';
export type SocialUrl = {
  name: SocialMediaName;
  url: string;
};

// Dictionary Types

type DictProjectContents = {
  [key: string]: ProjectContent[];
};

type DictText = string | DictionaryTerm;

type DictionaryTerm = {
  [key: string]: string;
};

type DictionaryKey = {
  [key: string]: string;
};

type Dictionary = {
  [key: string]: DictionaryTerm;
};

// Social stuff

type SocialProps = {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  image?: string;
};
