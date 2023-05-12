import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { Project, SanityProject } from '../../types';
import { getLocale, fmt } from '../../utils/useTranslation';
import { usePageTitle } from '../../utils/usePageTitle';

import ProjectBody from '../ProjectBody';
import ProjectHeader from '../ProjectHeader';
import ProjectLayout from '../layouts/ProjectLayout';

interface Prop {
  project: SanityProject;
}

export default function ProjectHeaderBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  usePageTitle(fmt(project.name, locale!));

  return (
    <>
      <ProjectHeader project={project} />
      {/* <ProjectBody project={project} /> */}
    </>
  );
}

ProjectHeaderBody.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
