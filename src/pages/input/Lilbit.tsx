import { useEffect } from 'react';

interface Prop {
  handleDarkMode(isDarkMode: boolean): any
}

function Equinor({ handleDarkMode }: Prop) {
  useEffect(() => {
    handleDarkMode(true);
  }, []);

  return (
    <div id="page-project">
      <header>
      <h1>Lilbit</h1>
        <ul>
          <li>Java, Spring, Android, iOS, JavaScript, ReactJS, Tailwind</li>
        </ul>
        <p>lilbit delivers products for tracking and monitoring of pets, pursuing their goal of expanding the communication between pet and owner. With this ambition, they have achieved huge interest for current and future products and services.</p>
      </header>

      <article>
        <img className="project-image--header" src="/assets/projects/lilbit.jpg" width="1200" height="1200" alt="" />
        <section className="project-description-input">
      <p>Through long-lasting collaboration, Kodeworks has yielded consultancy and knowledge boosting, as well as development. Joachim Fasting in Kodeworks has been a central figure in this collaboration, and especially within backend development and in reducing complexity and costs in the technology stack.</p>

          <div className="project-quote">
            <p className="project-quote--content">What I have appreciated the most is the trust I have gotten from our client in choosing between different technical solutions. I have had the opportunity to work with lots of different technologies, from high-level to low-level.
            </p>
          </div>
          <p>lilbit is today a specialized company with ownership of their entire technology portfolio. An important part of the process to achieve this has been cloud rationalization. Today, lilbit cloud services are built on the principle of infrastructure as code. Setup and configurations, resource usage and costs are thus transparent, modular and easy to test, develop and hand over. Another part has been moving the chain of production to local environments, as opposed to most manufacturers.</p>

          <div className="project-quote">
            <p className="project-quote--content">As a result of working on multiple parts of the stack, the biggest challenge on my part has been keeping several balls in the air at the same time. Upholding a structured approach to the work at hand has therefore been instrumental.</p>
          </div>
        </section>

        <section className="project-output">
          <div className="project-quote">
            <p>"I have worked on a number of segments of the technology portfolio, and I hope to bring experience from all of it into further work."</p>
          </div>
        </section>


      <section className="project-description-output">
      <p>Kodeworks has also been part of putting together cross-functional teams, with fluent communication between the developer and business sides - a property that in and by itself accelerates development and growth. On the business side of lilbit, the interest shown in products and services may best be described by the results of a spread sale conducted on the public finance platform Folkeinvest, where lilbit collected 28 million NOK, and thus marking a new record in Norwegian public spread sales. Kodeworks has further provided knowledge sharing on specific domains that are involved in the development in lilbit. This also includes taking part in the hiring process of lilbit employees.</p>




      <p>lilbit CEO Morten Sæthre describes Joachim as the first truly autonomous developer he met; someone who sees weaknesses and corresponding solutions in a system, and implements these as they emerge. Today, Joachim works on developing the backend. lilbit develops and maintains backend solutions for both the IoT units and the cloud services. This is important, since lilbit units contain sensorics that will facilitate expanded communication between a dog and its owner.</p>

      <p>We at Kodeworks are thankful to be collaborating with lilbit on this, and look forward to being part of the development in the time to come.</p>
        </section>


      </article>
    </div>
  )
}

export default Equinor
