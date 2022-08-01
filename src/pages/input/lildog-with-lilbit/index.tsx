import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';

import api from '../../../api';

import { ReactElement } from 'react';
import ProjectLayout from '../../../components/layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function LildogWithLilbit({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} />

      <article>
        <p>
          Through long-lasting collaboration, Kodeworks has yielded consultancy and knowledge
          boosting and development. Joachim Fasting in Kodeworks has been a central figure in this
          collaboration, especially within backend development and reducing complexity and costs in
          the technology stack.
        </p>
        <div className="project-quote">
          <p className="project-quote--content">
            I have appreciated the trust I have gotten from our clients in choosing between
            different technical solutions. I have had the opportunity to work with many other
            technologies, from high-level to low-level.
          </p>
        </div>

        <p>
          lilbit is today a specialized company with ownership of its entire technology portfolio.
          An essential part of the process to achieve this has been cloud rationalization. Today,
          lilbit cloud services are built on the principle of infrastructure as code. Setup and
          configurations, resource usage and costs are thus transparent, modular and easy to test,
          develop and hand over. Another part has been moving the production chain to local
          environments, as opposed to most manufacturers.
        </p>

        <div className="project-quote">
          <p className="project-quote--content">
            The biggest challenge was keeping several parallel tasks. Upholding a structured
            approach to the work at hand has therefore been instrumental.
          </p>
        </div>
      </article>

      <div className="project-output">
        <p>
          "I have worked on several segments of the technology portfolio, and I hope to bring
          experience from all of it into further work."
        </p>
      </div>
      <article>
        <img
          src={`/static/projects/lildog-with-lilbit/lildog-with-lilbit.jpg`}
          className="project-image--floatLeft"
          alt="lildog with lilbit"
        />
        <div className="project-description-output">
          <p>
            Kodeworks has also been part of cross-functional teams, with fluent communication
            between the developer and business sides - a property that in and by itself accelerates
            development and growth. On the business side of lilbit, the interest shown in products
            and services may best be described by a spread sale conducted on the public finance
            platform Folkeinvest. Lilbit collected 28 million NOK, thus marking a new record in
            Norwegian public spread sales. Kodeworks has further provided knowledge sharing on
            specific domains involved in the development of lilbit. This includes taking part in the
            hiring process of lilbit employees.
          </p>

          <p>
            lilbit CEO Morten Sæthre describes Joachim from Kodeworks as the first truly autonomous
            developer he met who sees weaknesses and corresponding solutions in a system and
            implements these as they emerge. Today, Joachim works on developing the backend. lilbit
            develops and maintains backend solutions for both the IoT units and the cloud services.
            This is important since lilbit units contain sensors to facilitate expanded
            communication between a dog and its owner.
          </p>
          <p>
            We at Kodeworks are thankful to be collaborating with lilbit on this and look forward to
            being part of the development in the time to come.
          </p>
        </div>
      </article>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('lilbit'),
    },
  };
}

LildogWithLilbit.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
