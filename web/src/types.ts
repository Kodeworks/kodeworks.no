import { PortableTextBlock, Slug } from '@sanity/types';

export type Person = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  socials?: SocialUrl[];
  projects?: null[] | Project[];
};

export type Project = {
  name: DictText;
  slug?: any; // FIXME: should not be optional
  description: DictText;
  image: string;
  extras?: DictText;
  urlName: string;
  technologies?: string[];
  content?: DictProjectContents | ProjectContent[];
  published?: boolean;
  output?: string[];
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
  type: SocialMediaName;
  url: string;
};

// Dictionary Types

export type DictProjectContents = {
  [key: string]: ProjectContent[];
};

export type DictText = string | DictionaryTerm;

export type DictionaryTerm = {
  [key: string]: string;
};

export type DictionaryKey = {
  [key: string]: string;
};

export type Dictionary = {
  [key: string]: DictionaryTerm;
};

// Social stuff

export type SocialProps = {
  title?: string;
  type?: string;
  description?: string;
  url?: string;
  image?: string;
};

export interface ManualSection {
  title: string;
  label: string;
  slug: Slug;
  content: Array<PortableTextBlock>;
}

export interface StaffManual {
  title: string;
  intro: string;
  sections: Array<ManualSection>;
}

export interface JobDescription {
  title: string;
  slug: Slug;
  label: string;
  subtitle: string;
  content: Array<PortableTextBlock>;
}
