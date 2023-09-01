import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { Project, ProjectV2 } from '../../types';
import { getLocale, fmt } from '../../utils/useTranslation';
import { usePageTitle } from '../../utils/usePageTitle';

import ProjectBody from '../ProjectBody';
import ProjectHeader from '../ProjectHeader';
import ProjectLayout from '../layouts/ProjectLayout';

interface Prop {
  project: ProjectV2;
}

export default function ProjectHeaderBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());
  usePageTitle(project.name);

  return (
    <>
      <ProjectHeader project={project} />
      {/*<ProjectBody project={project} />*/}
    </>
  );
}

ProjectHeaderBody.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
