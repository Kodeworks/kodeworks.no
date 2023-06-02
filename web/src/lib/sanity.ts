import { createClient } from '@sanity/client';
import { JobDescription, Person, StaffManual } from '../types';

export const client = createClient({
  projectId: 'zkl0178p',
  dataset: 'production',
  apiVersion: '2023-02-06',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

export const getStaffManual = () =>
  client.fetch<StaffManual>(
    `*[_type == "staff-manual"][0]{title, intro, sections[]->{title, 'label': label->label, content, slug}}`
  );

export const getPeople = () =>
  client.fetch<Person>(
    '*[_type == "people" && !(_id in path(\'drafts.**\'))]{firstName, lastName, email, projects[] -> {name, slug}, socials, "imageUrl": image.asset->url}'
  );

export const getJobDescriptions = () =>
  client.fetch<JobDescription>(
    `*[_type == "job-description"]{ title, slug, label, subtitle, content}`
  );
export const getJobDescriptionBySlug = (slug: string) =>
  client.fetch<JobDescription>(
    `*[_type == "job-description" && slug.current == "${slug}"][0]{ title, slug, label, subtitle, content}`
  );
