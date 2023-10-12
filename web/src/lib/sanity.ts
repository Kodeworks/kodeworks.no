import { createClient } from '@sanity/client';
import { CareerValues, JobDescription, Person, Project, StaffManual } from '../types';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'zkl0178p',
  dataset: 'production',
  apiVersion: '2023-02-06',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getStaffManual = () =>
  client.fetch<StaffManual>(
    `*[_type == "staff-manual"][0]{title, intro, sections[]->{title, 'label': label->label, content, slug}}`
  );

export const getPeople = () =>
  client.fetch<Person[]>(
    '*[_type == "people" && !(_id in path(\'drafts.**\'))]{firstName, lastName, email, projects[] -> {name, "slug":slug.current}, socials, "imageUrl": image.asset->url}'
  );

export const getProjects = () =>
  client.fetch<Project[]>(
    `*
            [
              _type == "project" && !(_id in path('drafts.**'))
            ]{
              name, 
                description,
                extraDescription, 
                "slug":slug.current, 
                "imageUrl": image.asset->url, 
                technologies[], 
                showOnFrontPage, 
                content[] {
                  "type":_type,
                  "value": select(_type == 'quote' => {text, author}, _type == 'image' => asset->{url, "alt":originalFilename}, _type == 'wideimage' => asset->{url, "alt":originalFilename}, {text}),
                }
            }`
  );

export const getProject = (projectSlug: String) =>
  client.fetch<Project>(
    `*
    [
    _type == "project" && slug.current == "${projectSlug}" && !(_id in path('drafts.**'))
    ][0]
    {
      name, 
      description, 
      extraDescription,
      "slug":slug.current, 
      "imageUrl": image.asset->url, 
      technologies[], 
      showOnFrontPage, 
      content[] {
      "type":_type,
      "value": select(_type == 'quote' => {text, author}, _type == 'image' => asset->{url, "alt":originalFilename}, _type == 'wideimage' => asset->{url, "alt":originalFilename}, {text}),
    }
    }`
  );

export const getJobDescriptions = () =>
  client.fetch<JobDescription>(
    `*[_type == "job-description"]{ title, slug, label, subtitle, content}`
  );
export const getJobDescriptionBySlug = (slug: string) =>
  client.fetch<JobDescription>(
    `*[_type == "job-description" && slug.current == "${slug}"][0]{ title, slug, label, subtitle, content}`
  );

export const getPage = (title: string) =>
  client.fetch<Sanity.Default.Schema.Page>(`*[_type == "page" && title == "${title}"][0]`);

export const getCareerValues = () => client.fetch<CareerValues>(`*[_type == "career-values"][0]`);
