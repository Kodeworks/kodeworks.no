import { useEffect } from 'react';

import ImageVaskehjelp from '../../assets/images/vaskehjelp.jpg';

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
        <h1>Vaskehjelp</h1>
        <ul>
      <li>iOS, Android, .NET</li>
      </ul>
      <p>Vaskehjelp is a marketplace that connects cleaning personell and a customer, as well as taking care of payment and other paperwork. Kodeworks has assisted in the development of the iOS and Android application.</p>
      </header>

      <article>
      <img className="project-image--header" src={'/assets/projects/vaskehjelp.jpg'} width="1200" height="1200" alt="" />


      <section className="">
      <img alt="Developer Team at Vaskehjelp" src={ImageVaskehjelp} className="project-image--floatRight" />
<div className="project-description-input">
            <p>Peter Ringset in Kodeworks joined us last year, but we already knew him well from the time at Vaskehjelp, where we worked on a project together. Vaskehjelp is a marketplace that connects professional cleaners and customers. They offer a unique approach to digitizing cleaning services, and Peter is here to tell us a bit about what it was like working on this project.</p>

<p>After trying different solutions for their web application, Kodeworks were brought onboard during the summer of 2018. At this point in time, Vaskehjelp was already underway with the development of the web app, and had great ambitions of bringing their solution on the market in the not too distant future.</p>

<div className="project-quote">
      <p className="project-quote--content">Some of the best parts of working with the Vaskehjelp application was seeing just how much we achieved in a short amount of time, and that feeling of accomplishment that emerged from collaboration. Especially in that time where we worked towards the release date, it was satisfying to see how the pieces fell into place one by one.</p>
<span className="project-quote--author">- Peter Ringset</span>
</div>

<p>In Vaskehjelp, have been central in both Android and iOS development. Peter has for the most part worked with iOS, while Tri from Kodeworks worked with Android development.</p>













</div>
        </section>

        <section className="project-output">
<p>Together with developers in Vaskehjelp, the developers then entered an intense period, where well-thought priorities ended in release of the application before Christmas the same year.</p>
        </section>


        <section className="project-description-output">



      <div className="project-quote">
<p className="project-quote--content">The biggest challenge we faced was the amount of time we had to deliver. We wanted to get a lot done in a relatively short amount of time, with only a few months from starting fresh with a full crew, until the first version was to be released. Like most projects with intense final days, the intensity of the work increased as we moved towards the release date. Luckily, the team was communicating excellently, and we were able to make agile prioritizations, enabling us to emerge at the release date with a well-functioning application.</p>
<span className="project-quote--author">- Peter Ringset</span>
</div>

      <p>After the release of the first version, Kodeworks continued the work with Vaskehjelp, and became a source of continuity regarding the improvement and expansion of the app. The combination of Vaskehjelp setting high goals and providing market analysis, with the developers’ competence, became the key to create and further develop the product.</p>

      <div className="project-quote">
<p className="project-quote--content">The people in Vaskehjelp were experienced in analytics and looking at usage data extracted from the app. By looking at how it was being done, I learned a lot about it myself in terms of using the insight from data in order to improve both the app and the service itself.</p>
<span className="project-quote--author">- Peter Ringset</span>
      </div>

<p>Over time, Vaskehjelp has utilized the .NET platform for their whole solution. By using Xamarin for app development and Blazor for web development, Vaskehjelp achieves reuse of business logic while at the same time using core competence in C# for development and maintenance of the whole solution.</p>

<p>Vaskehjelp continues to be a central player as a cleaning service platform, and Kodeworks says thanks for the opportunity to be a part of the commercialization of a very exciting startup.</p>
        </section>


      </article>
    </div>
  )
}

export default Equinor
