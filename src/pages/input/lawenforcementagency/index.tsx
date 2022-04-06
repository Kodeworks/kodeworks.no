import { useEffect } from 'react';

import '../project.css';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any;
}

function Lawenforcementagency({ handleDarkMode }: Prop) {
  useEffect(() => {
    handleDarkMode(true);
  }, []);

  return (
    <div id="page-project">
      <header>
        <h1>Law Enforcement Agency</h1>
        <p>
          A law enforcement agency should prevent crime and maintain our safety as
          citizens. In order to achieve this, they are dependent on reliable
          information systems that support daily operation in an agile and
          efficient manner. Kodeworks has been part of the development of two
          instrumental systems for a prominent Nordic law enforcement agency:
          System for Safety Alarm and Electronic Control; and System for Operative
          Law Enforcement. Both systems have contributed towards lowering the
          response times of the agency's operations centers, bettering the safety
          of Safety Alarm bearers and streamlining the agency's patrolling.
        </p>
      </header>

      <article>
        <img
          className="project-image--header"
          src="/assets/projects/lawenforcementagency-3.jpg"
          width="1200"
          height="1200"
          alt=""
        />
        <section className="project-description-input">
          <p>
            Kodeworks was engaged by the law enforcement agency in 2008. At this
            time, the agency's IT department was in the middle of modernizing their
            existing Safety Alarm system. In parallel, the entire IT system and
            interaction processes of the organization were receiving an increase in
            quality. The Safety Alarm had already in 2005 been proposed with an
            extension, with a corresponding legislation, by the name of Electronic
            Control. A general lack of technical solutions in the market, of the
            sort that could easily be integrated into existing operative systems,
            made it necessary for Kodeworks to assist in the integration of Safety
            Alarm and Electronic Control with the operative systems of the agency.
            This also necessitated a consideration of the case management system, as
            well as systems belonging to third party suppliers of equipment, as part
            of the development process.
          </p>

          <p>
            Kodeworks then developed the next generation of the Safety Alarm for the
            law enforcement agency. This was done by modifying the Android operative
            system, so that all peripherals were disabled, and all external
            communication was routed through an end-to-end encrypted communication
            protocol connecting to the agency's services. These modifications
            touched on firmware as well, so that even hardware buttons with existing
            functionality were reprogrammed. The adjustments enabled the agency to
            run a dedicated Safety Alarm-app on standard phones, while at the same
            time utilizing state-of-the-art positioning technology and programming
            environment. Today, all Safety Alarm units within the agency's
            jurisdiction are standard mobile phones running on software that is a
            continuation of the work that Kodeworks, together with the law
            enforcement agency, laid down during 2008-2016.
          </p>
        </section>

        <img
          className="project-image--header"
          src="/assets/projects/lawenforcementagency-2.jpg"
          width="1200"
          height="1200"
          alt=""
        />

        <section className="project-description-output">
          <p>
            The Safety Alarm and Electronic Control project went on for several
            years. Some of the time was also put in similar projects, specifically
            within the agency’s operative portfolio. Operative Law Enforcement is
            the most central of the agency’s operative systems, and was developed
            already in 1994. Before Kodeworks entered the picture, the agency had
            begun the task of mapping parts of the Operative Law Enforcement to
            separate modules, and Kodeworks extended this work by describing how
            data flow and consistency between the modules were to be ensured. Deep
            integration with distributed databases for each of the agency’s
            organizational units enabled an event-driven architecture, where the
            modules were modeled as microservices. This was the beginning of the
            modernization of the law enforcement agency’s operative portfolio that
            is used today.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Lawenforcementagency;
