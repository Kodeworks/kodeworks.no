import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';

import api from '../../../api';
import { ReactElement } from 'react';
import ProjectLayout from '../../../components/layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function Inatur({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} />

      <article>
        <p>
          Inatur has built a solid platform for delivering their services, and since 2019, Kodeworks
          has been a part of their modernizing process. Here, Kodeworks has further developed and
          modernized their already existing Java Spring backend. Using tools like React and
          Storybook, the frontend has been modularized, removing a lot of the strong couplings in
          the code base. This makes further development quicker, as well as easier to document and
          maintain.
        </p>

        <p>
          Technical consultancy is often a major part of our input to the projects we run. As
          consultants and developers, the people at Kodeworks have a good understanding of how to
          meet the expectations and needs of the end user, while still keeping the technical
          integrity of the code base and technical solutions in general at a high standard.
          Communicating the link between customer needs and technical integrity is key in enabling
          our clients to set goals that are ambitious, achievable and that serve a purpose. This is
          an important contribution in creating an environment where the business part and the
          technical part of Inatur builds on and strengthens each other - a requirement for
          furthering the process and accelerating development.
        </p>
      </article>
      <img
        className="project-image-wide"
        src="/static/photos/projects/inatur-3.jpg"
        width="320"
        height="200"
        alt=""
      />
      <article>
        <p>
          Today, Kodeworks drives the process of further modernization within Inatur's technological
          portfolio. In this process, there is a balance in the usage of resources, between renewing
          existing solutions, and developing entirely new features. Kodeworks has been central in a
          comprehensive renewal across Inatur's tech stack, and laid a robust base for both the
          current operation and further development of Inatur's services. We wish to thank Inatur
          for a great collaboration, and look forward to continuing the process.
        </p>
      </article>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('inatur'),
    },
  };
}

Inatur.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
