import { KeyedObject, PortableTextBlock, Slug, TypedObject } from '@sanity/types';

export type CareerValues = {
  basicPensionAmount: object;
  estimatedSalaryIncrease: number;
  salaryStpes: Array<number>;
  yearlyPensionSaving: number;
};
export type Person = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  socials?: SocialUrl[];
  projects?: Array<Project | null>;
};

export type Project = {
  name: string;
  slug: string;
  description?: DictText;
  extraDescription?: string;
  imageUrl: string;
  technologies?: string[];
  showOnFrontPage?: boolean;
  content?: Content[];
};

export type Content = {
  type: string;
  value: TextContent | QuoteContent | ImageContent;
};

export type TextContent = {
  text: string;
};

export type QuoteContent = {
  text: string;
  author?: string;
};

export type ImageContent = {
  url: string;
  alt: string;
};

type SocialMediaName = 'twitter' | 'linkedin' | 'github';
export type SocialUrl = {
  type: SocialMediaName;
  url: string;
};

// Dictionary Types

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

export type PageContent<T> = TypedObject & KeyedObject & T;
