import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';
import api from '../../../api';

interface Prop {
  project: Project;
}

export default function AkerBP({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <div id="page-project">
        <ProjectHeader project={project} />

        <article></article>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('akerbp'),
    },
  };
}
