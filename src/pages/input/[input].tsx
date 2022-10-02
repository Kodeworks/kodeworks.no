import { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

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
  return (
    <>
      <div id="page-project">
        <ProjectHeaderBody project={project} />

        <footer>
          <div className="page-project-footer-description">
            <h3>Hva annet har vi gjort?</h3>
            <p>
              Ta gjerne en titt innom{' '}
              <Link href="/projects">
                <a>prosjektoversikten</a>
              </Link>{' '}
              vår for å lese mer om våre andre prosjekter.
            </p>
            <p>
              Vi ser også etter utviklere til kontorene våre i Oslo og Trondheim. Sjekk ut{' '}
              <Link href="/career">
                <a>lønnskalkulatoren</a>
              </Link>
              , og våre{' '}
              <Link href="/career">
                <a>ledige stillinger</a>
              </Link>
              .
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
  const params = api.projects.getProjects().reduce((arr, project) => {
    return [
      ...arr,
      ...locales.map((locale) => ({ params: { input: project.urlName }, locale: locale })),
    ];
  }, []);

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
