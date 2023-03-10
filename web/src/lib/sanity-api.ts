import { client } from './client';
import { PortableTextBlock, Slug } from '@sanity/types';

export interface ManualSection {
  title: string;
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
    '*[_type == "staff-manual"][0]{title, intro, sections[]->{title, content, slug}}'
  );
