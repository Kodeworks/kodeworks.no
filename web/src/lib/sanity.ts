import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { defineQuery } from 'groq';

export const client = createClient({
  projectId: 'zkl0178p',
  dataset: 'production',
  apiVersion: '2023-02-06',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getStaffManual = () => {
  const getStaffManualQuery = defineQuery(
    `*[_type == "staff-manual"][0]{title, intro, sections[]->{title, 'label': label->label, content, slug}}`
  );
  return client.fetch(getStaffManualQuery);
};

export const getPeople = () => {
  const getPeopleQuery = defineQuery(
    `*[_type == "people" && !(_id in path('drafts.**'))]{firstName, lastName, email, projects[] -> {name, "slug":slug.current}, socials, "imageUrl": image.asset->url}`
  );
  return client.fetch(getPeopleQuery);
};

export const getProjects = () => {
  const getProjectsQuery = defineQuery(
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
  return client.fetch(getProjectsQuery);
};

export const getProject = (projectSlug: string) => {
  const getProjectQuery = defineQuery(
    `*
    [
    _type == "project" && slug.current == $projectSlug && !(_id in path('drafts.**'))
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
  return client.fetch(getProjectQuery, { projectSlug });
};

export const getJobDescriptions = () => {
  const getJobDescriptionsQuery = defineQuery(
    `*[_type == "job-description"]{ title, slug, label, subtitle, content}`
  );
  return client.fetch(getJobDescriptionsQuery);
};
export const getJobDescriptionBySlug = (slug: string) => {
  const getJobDescriptionBySlugQuery = defineQuery(
    `*[_type == "job-description" && slug.current == $slug][0]{ title, slug, label, subtitle, content}`
  );
  return client.fetch(getJobDescriptionBySlugQuery, { slug });
};

export const getPage = (title: string) => {
  const getPageQuery = defineQuery(`*[_type == "page" && title == $title][0]`);
  return client.fetch(getPageQuery, { title });
};

export const getCareerValues = () => {
  const getCareerValuesQuery = defineQuery(`*[_type == "career-values"][0]`);
  return client.fetch(getCareerValuesQuery);
};
