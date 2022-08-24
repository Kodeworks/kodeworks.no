
export type Person = {
  name: string;
  image: string;
  email: string;
  urls?: SocialUrl[];
  projects: Project[];
};

export type Project = {
  name: string;
  description: DictText;
  image: string;
  extras?: DictText;
  urlName: string;
  technologies?: string[];
  content?: DictProjectContents | ProjectContent[];
  published?: boolean;
};

export type ProjectContent = ProjectContentTexts | ProjectContentImage | ProjectContentWideImage | ProjectContentQuote | ProjectContentOutput

export type ProjectContentDescriptor = 'texts' | 'image' | 'wideimage' | 'quote' | 'output'

export type ProjectContentTexts = {
  type: 'texts';
  value: DictText[];
}

export type ProjectContentImage = {
  type: 'image';
  value: ProjectContentImageContent
}

export type ProjectContentWideImage = {
  type: 'wideimage';
  value: ProjectContentImageContent
}

export type ProjectContentImageContent = {
  src: string,
  alt?: string
}

export type ProjectContentQuote = {
  type: 'quote';
  value: ProjectContentQuoteContent
}

export type ProjectContentQuoteContent = {
  content: DictText,
  author?: string
}

export type ProjectContentOutput = {
  type: 'output',
  value: DictText
}

export type SocialUrl = {
  name: string;
  url: string;
};

// Dictionary Types

type DictProjectContents = {
  [key: string]: ProjectContent[]
}

type DictText = string | DictionaryTerm

type DictionaryTerm = {
  [key: string]: string;
};

type DictionaryKey = {
  [key: string]: string;
};

type Dictionary = {
  [key: string]: DictionaryTerm;
};
