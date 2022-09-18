import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { Project } from '../../types';
import { getLocale, fmt } from '../../utils/useTranslation';
import { usePageTitle } from '../../utils/usePageTitle';

import ProjectBody from '../ProjectBody';
import ProjectHeader from '../ProjectHeader';
import ProjectLayout from '../layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function ProjectHeaderBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  usePageTitle(fmt(project.name, locale!));

  return (
    <div id="page-project">
      <ProjectHeader project={project} />
      <ProjectBody project={project} />
    </div>
  );
}

ProjectHeaderBody.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
