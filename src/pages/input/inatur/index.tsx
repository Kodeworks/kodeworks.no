import { useEffect } from "react";

import "../project.css";

interface Prop {
  handleDarkMode(isDarkMode: boolean): any;
}

function Inatur({ handleDarkMode }: Prop) {
  useEffect(() => {
    handleDarkMode(true);
  }, []);

  return (
    <div id="page-project">
      <header>
        <h1>Inatur</h1>
        <div className="project__technologies">
          Java, Spring, MongoDB, JavaScript, React
        </div>
        <p>
          Inatur is Norway's largest online platform for selling hunting and
          fishing licenses, having offered their services for more than ten
          years. On their website, larger municipal bodies as well as hunting
          associations and ground owners can put hunting and fishing licenses
          out for sale. In this context, Inatur also offers the ability to put
          cabins out for rent, both for hunting and vacationing. Today, there
          are more than 1200 cabins registered for renting on Inatur's website.
        </p>
      </header>

      <article>
        <img
          className="project-image--header"
          src="/assets/projects/inatur-2.jpg"
          width="1200"
          height="1200"
          alt=""
        />
        <section className="project-description-input">
          <p>
            Inatur has built a solid platform for delivering their services, and
            since 2019, Kodeworks has been a part of their modernizing process.
            Here, Kodeworks has further developed and modernized their already
            existing Java Spring backend. Using tools like React and Storybook,
            the frontend has been modularized, removing a lot of the strong
            couplings in the code base. This makes further development quicker,
            as well as easier to document and maintain.
          </p>

          <p>
            Technical consultancy is often a major part of our input to the
            projects we run. As consultants and developers, the people at
            Kodeworks have a good understanding of how to meet the expectations
            and needs of the end user, while still keeping the technical
            integrity of the code base and technical solutions in general at a
            high standard. Communicating the link between customer needs and
            technical integrity is key in enabling our clients to set goals that
            are ambitious, achievable and that serve a purpose. This is an
            important contribution in creating an environment where the business
            part and the technical part of Inatur builds on and strengthens each
            other - a requirement for furthering the process and accelerating
            development.
          </p>
        </section>

        <img
          className="project-image--header"
          src="/assets/projects/inatur-3.jpg"
          width="1200"
          height="1200"
          alt=""
        />

        <section className="project-description-output">
          <p>
            Today, Kodeworks drives the process of further modernization within
            Inatur's technological portfolio. In this process, there is a
            balance in the usage of resources, between renewing existing
            solutions, and developing entirely new features. Kodeworks has been
            central in a comprehensive renewal across Inatur's tech stack, and
            laid a robust base for both the current operation and further
            development of Inatur's services. We wish to thank Inatur for a
            great collaboration, and look forward to continuing the process.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Inatur;
