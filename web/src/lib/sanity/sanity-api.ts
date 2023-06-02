import { client } from './client';
import { JobDescription, Person, StaffManual } from '../../types';

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
    `*[_type == "job-description"][0]{ title, slug, label, subtitle, description}`
  );
