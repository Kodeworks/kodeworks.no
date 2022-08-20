import ProjectTile from '../../components/ProjectTile';

import api from '../../api';
import dictionary from '../dict';
import { useClipContent } from '../../context/ClipContentContext';
import { useTranslation } from '../../utils/useTranslation';

export default function Projects(): JSX.Element {
  useClipContent(true);
  const { t } = useTranslation(dictionary);

  return (
    <div id="page-projects" className="theme-dark">
      <header>
        <h1 className="section-header-headline">{t('what')}</h1>

        <p>{t('what_description')}</p>
      </header>

      {api.projects.getProjects().map((project) => (
        <ProjectTile key={project.name} project={project} />
      ))}
    </div>
  );
}
