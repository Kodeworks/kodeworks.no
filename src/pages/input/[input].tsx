import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import api from '../../api';
import { NextPageWithLayout } from '../_app';
import { useClipContent } from '../../context/ClipContentContext';

import Layout from '../../components/Layout';
import ProjectHeaderBody from '../../components/ProjectHeaderBody';
import { Project } from '../../types';

interface Prop {
  project: Project;
}

const Input: NextPageWithLayout = ({ project }: Prop) => {
  useClipContent(true);
  return <ProjectHeaderBody project={project} />;
};

Input.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Input;

export const getStaticPaths: GetStaticPaths = async () => {
  const params = api.projects.getProjects().map((project) => {
    return { params: { input: project.urlName } };
  });

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      project: await api.projects.getProject(context.params.input),
    },
  };
};