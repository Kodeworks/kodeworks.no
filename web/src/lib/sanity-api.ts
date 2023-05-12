import { client } from './client';
import { PortableTextBlock, Slug } from '@sanity/types';
import { Person } from '../types';

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

export const getStaffManual = () =>
  client.fetch<StaffManual>(
    `*[_type == "staff-manual"][0]{title, intro, sections[]->{title, 'label': label->label, content, slug}}`
  );

export const getPeople = () =>
  client.fetch<Person>(
    '*[_type == "people" && !(_id in path(\'drafts.**\'))]{firstName, lastName, email, projects[] -> {name, slug}, socials, "imageUrl": image.asset->url}'
  );
