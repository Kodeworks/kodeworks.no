import React from 'react';

export type Person = {
  name: string;
  image: string;
  email: string;
  urls?: SocialUrl[];
  projects: Project[];
};

export type Project = {
  name: string;
  description: string;
  image: string;
  urlName: string;
  technologies?: string[];
  published?: boolean;
};

export type SocialUrl = {
  name: string;
  url: string;
};

// Dictionary Types

type DictionaryTerm = {
  [key: string]: string;
};

type DictionaryKey = {
  [key: string]: string;
};

type Dictionary = {
  [key: string]: DictionaryTerm;
};
