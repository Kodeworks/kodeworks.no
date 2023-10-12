import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';
import { useClipContent } from '../../context/ClipContentContext';

import Layout from '../../components/Layout';
import ProjectHeaderBody from '../../components/ProjectHeaderBody';

import { Project } from '../../types';
import { getProject, getProjects } from '../../lib/sanity';

interface Prop {
  project: Project;
}

const Input: NextPageWithLayout = ({ project }: Prop) => {
  useClipContent('dark-mode');
  return (
    <>
      <div id="page-project">
        <ProjectHeaderBody project={project} />

        <footer>
          <div className="page-project-footer-description">
            <h3>Hva annet har vi gjort?</h3>
            <p>
              Ta gjerne en titt innom <Link href="/projects">prosjektoversikten</Link> vår for å
              lese mer om våre andre prosjekter.
            </p>
            <p>
              Vi ser også etter utviklere til kontorene våre i Oslo og Trondheim. Sjekk ut{' '}
              <Link href="/career">lønnskalkulatoren</Link>, og våre{' '}
              <Link href="/career">ledige stillinger</Link>.
            </p>
          </div>
          <div className="page-project-footer-contact">
            <div className="page-project-footer-contact-column">
              <div>
                <strong>Oslo</strong>
                <br /> Grønnegata 10, 0380 Oslo
              </div>
              <div>
                <strong>Trondheim</strong>
                <br /> Fjordgata 30, 7010 Trondheim
              </div>
            </div>
            <div className="page-project-footer-contact-column">
              <div>
                <br />
                <a href="mailto:post@kodeworks.no">post@kodeworks.no</a>
                <br />
                +47 405 45 500
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

Input.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Input;

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['no', 'en'];

  const projects = await getProjects();
  const params = projects.reduce((arr, project) => {
    return [
      ...arr,
      ...locales.map((locale) => ({ params: { input: project.slug }, locale: locale })),
    ];
  }, []);

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Prop, { input: string }> = async (context) => {
  if (!context.params) {
    throw new Error('Params missing');
  }
  return {
    props: {
      project: await getProject(context.params.input),
    },
    revalidate: 10,
  };
};
