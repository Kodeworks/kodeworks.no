import { ReactElement } from 'react';

import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';
import api from '../../../api';

import ProjectHeader from '../../../components/ProjectHeader';
import ProjectLayout from '../../../components/layouts/ProjectLayout';

interface Prop {
  project: Project;
}

export default function Sunlitsea({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} />

      <article>
        <p>
          With their extensive ambitions, Sunlit Sea is a central player in the field of floating
          solar power. A glance at the evolution they have undergone across their entire technology
          stack supports this.
        </p>

        <p>
          A team from Kodeworks has been central to this development, and is today working on
          segments like hardware design and software development for monitoring, maintenance and
          optimization of power production. Rune in Kodeworks has worked on the electronics and
          sensorics of the float modules, and shares his experience in Sunlit Sea
        </p>

        <div className="project-quote">
          <p className="project-quote--content">
            In Sunlit Sea, I’ve gotten the chance to discover solutions to problems. I’m not just
            implementing a function to satisfy a unit test, but instead I get to solve real
            problems, which requires me to utilize my full professional knowledge. I’m quite simply
            an inventor, producing real stuff. Here, I’m free to explore possible solutions and
            together with my colleagues, we find out how to e. g. establish a data stream of
            moisture measurements from the inside of a metal construction.
          </p>
        </div>

        <p>
          As co-founder of Sunlit Sea, Kodeworks has been part of the picture from the very
          beginning, in 2019. As a startup with huge ambitions, and in a demanding,
          interdisciplinary field that has yet to mature, there are a number of challenges that need
          to be overcome in order to write a success story.
        </p>
      </article>
      <div className="project-output">
        <p>
          As co-founder of Sunlit Sea, Kodeworks has been part of the picture from the very
          beginning, in 2019.
        </p>
      </div>

      <article>
        <div className="project-description-output">
          <p>
            Sunlit Sea has on several occasions worked with Kodeworks on this, and we have
            contributed in a broad range of areas. From 3D renderings of production and deployment,
            and a website with Sunlit Sea’s Smart Quoter service, down to the sensor- and
            communication electronics put on every module, Kodeworks has designed and implemented
            necessary solutions from the ground up.
          </p>

          <p>
            Through a collaborative partnership and mutual knowledge sharing, Kodeworks has been
            essential for Sunlit Sea’s technological edge.
          </p>

          <div className="project-quote">
            <p className="project-quote--content">
              In Sunlit Sea, I am solely accountable for the quality of the solutions I develop, and
              there is a lot of responsibility on the shoulders of each developer. There is no
              relying on other team members to catch weaknesses in my solutions, unless I
              specifically ask for a peer review of the systems. We all simply have to identify
              possible weaknesses in the systems and procedures that we develop, and ensure that
              more than one set of eyes are scanning it all for flaws.
            </p>
          </div>

          <p>
            The engineering solutions that make up the base for the solar module, must meet
            requirements that evolve as the product moves towards the commercialization stage. That
            also applies for the processing and presentation of collected sensor data, and the use
            of data for further prediction of performance and behavior in various environments. This
            goes on in parallel with how Sunlit Sea pushes forward in competitiveness and scaling of
            production.
          </p>

          <div className="project-quote">
            <p className="project-quote--content">
              Before Sunlit Sea, I had little experience with how to define systems and procedures
              for getting the production of an actual product up and running. It has been very
              interesting to learn what works when designing a handful of prototypes, and what needs
              to be changed when moving towards mass production of the same product. An extremely
              important tool I keep in my mental toolbox is the ability to design a product in a way
              that allows a factory to produce it, without me being involved in the actual
              production.
            </p>
          </div>

          <p>
            Broad and documentable domain expertise is important in a relatively young industry. For
            the purpose of extending specific domain knowledge, Sunlit Sea today works towards
            identifying the performance ratio of the solar panels in different sea states given a
            set of waves, in a collaboration between Kodeworks and IFE to combine historical weather
            data with bespoke sensorics and processing technology. This work is part of
            state-of-the-art research within the field, and is laying the foundation for speveral
            scientific publications from IFE.
          </p>

          <p>
            Kodeworks continues to develop solutions for Sunlit Sea, and looks forward to
            collaborating on solving many exciting challenges in the future.
          </p>
        </div>
        <img src={`/static/projects/sunlitsea/sunlitsea.jpg`} alt="" width="320" height="200" />
      </article>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('sunlitsea'),
    },
  };
}

Sunlitsea.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
