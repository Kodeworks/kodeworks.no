import ProjectTile from '../../components/ProjectTile';

import api from '../../api';
import dictionary from '../dict';
import { useClipContent } from '../../context/ClipContentContext';
import { useTranslation } from '../../utils/useTranslation';
import { useRouter } from 'next/router';
import { getLocale, fmt } from '../../utils/useTranslation';
import { client } from '../../lib/client';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FC } from 'react';
import { Projectv2 } from '../../types';

export const getStaticProps: GetStaticProps<{ projects: Projectv2[] }> = async () => {
  const projects = (await client.fetch("* [_type == 'project' && !(hidden == true)]")).sort((a, b) =>
    a < b ? -1 : b < a ? 1 : 0
  );
  return { props: { projects } };
};
const Projects: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  console.log('api.projects', JSON.stringify(api.projects.getProjects(), null, 4));
  console.log('props projects', JSON.stringify(props.projects, null, 4));
  useClipContent(true);
  const locale = getLocale(useRouter());
  const { t } = useTranslation(dictionary);

  return (
    <div id="page-projects" className="theme-dark">
      <header>
        <h1 className="section-header-headline">{t('what')}</h1>

        <p>{t('what_description')}</p>
      </header>

      {props.projects.map((project) => (
        <ProjectTile project={project} key={project._id} />
      ))}
      {/*{api.projects.getProjects().map((project) => (*/}
      {/*  <ProjectTile key={fmt(project.name, locale!)} project={project} />*/}
      {/*))}*/}
    </div>
  );
};

export default Projects;
