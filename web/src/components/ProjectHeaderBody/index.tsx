import { ReactElement } from 'react';

import { Project } from '../../types';
import { usePageTitle } from '../../utils/usePageTitle';

import ProjectBody from '../ProjectBody';
import ProjectHeader from '../ProjectHeader';
import ProjectLayout from '../layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function ProjectHeaderBody({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <>
      <ProjectHeader project={project} />
      {<ProjectBody project={project} />}
    </>
  );
}

ProjectHeaderBody.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
