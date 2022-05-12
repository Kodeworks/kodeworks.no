import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';

import '../project.css';

interface Prop {
  project: Project
}

export default function Statkraft({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} />

      <article>

      </article>
    </div>
  )
}
