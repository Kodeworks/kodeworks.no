import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';

import api from '../../../api';
import { ReactElement } from 'react';
import ProjectLayout from '../../../components/layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function Lawenforcementagency({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} />
      <article>
        <p>
          Kodeworks was engaged by the law enforcement agency in 2008. At this time, the agency's IT
          department was in the middle of modernizing their existing Safety Alarm system. In
          parallel, the entire IT system and interaction processes of the organization were
          receiving an increase in quality. The Safety Alarm had already in 2005 been proposed with
          an extension, with a corresponding legislation, by the name of Electronic Control. A
          general lack of technical solutions in the market, of the sort that could easily be
          integrated into existing operative systems, made it necessary for Kodeworks to assist in
          the integration of Safety Alarm and Electronic Control with the operative systems of the
          agency. This also necessitated a consideration of the case management system, as well as
          systems belonging to third party suppliers of equipment, as part of the development
          process.
        </p>

        <p>
          Kodeworks then developed the next generation of the Safety Alarm for the law enforcement
          agency. This was done by modifying the Android operative system, so that all peripherals
          were disabled, and all external communication was routed through an end-to-end encrypted
          communication protocol connecting to the agency's services. These modifications touched on
          firmware as well, so that even hardware buttons with existing functionality were
          reprogrammed. The adjustments enabled the agency to run a dedicated Safety Alarm-app on
          standard phones, while at the same time utilizing state-of-the-art positioning technology
          and programming environment. Today, all Safety Alarm units within the agency's
          jurisdiction are standard mobile phones running on software that is a continuation of the
          work that Kodeworks, together with the law enforcement agency, laid down during 2008-2016.
        </p>
      </article>
      p{' '}
      <img
        className="project-image-wide"
        src="/static/photos/projects/lawenforcementagency-2.jpg"
        width="320"
        height="200"
        alt=""
      />
      <article>
        <p>
          The Safety Alarm and Electronic Control project went on for several years. Some of the
          time was also put in similar projects, specifically within the agency’s operative
          portfolio. Operative Law Enforcement is the most central of the agency’s operative
          systems, and was developed already in 1994. Before Kodeworks entered the picture, the
          agency had begun the task of mapping parts of the Operative Law Enforcement to separate
          modules, and Kodeworks extended this work by describing how data flow and consistency
          between the modules were to be ensured. Deep integration with distributed databases for
          each of the agency’s organizational units enabled an event-driven architecture, where the
          modules were modeled as microservices. This was the beginning of the modernization of the
          law enforcement agency’s operative portfolio that is used today.
        </p>
      </article>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('lawenforcementagency'),
    },
  };
}

Lawenforcementagency.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
