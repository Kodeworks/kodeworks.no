import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import '../project.css';

interface Prop {
  project: Project
}

export default function Statkraft({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <header>
        <h1>Equinor</h1>
        <ul>
          <li>Java, Spring, JavaScript, ReactJS</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet dapibus nisl, eu molestie odio. Cras egestas lorem sed mauris dapibus viverra. Praesent quis iaculis augue, sit amet porta lacus..</p>
      </header>

      <article>
        <img src="assets/projects/project1.jpg" width="1200" height="1200" alt="" />
        <section className="project-description-input">
          <p>Vestibulum suscipit libero non justo interdum bibendum. Integer elit dui, aliquet eget lectus nec, imperdiet lacinia massa. Morbi varius tellus sapien, sit amet elementum erat pulvinar lacinia.</p>
          <p>Maecenas consequat dictum nibh, ac ultrices ipsum facilisis sed. Maecenas pretium turpis tortor, eu blandit sapien egestas quis. Ut vitae nibh ultrices, ornare tellus eu, tincidunt turpis. Nullam sed commodo lectus. In tristique, mi ut iaculis malesuada, augue mi iaculis ex, sed fermentum risus neque a quam.</p>
        </section>

        <section className="project-output">
          <h4>Output</h4>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet dapibus nisl, eu molestie odio. Cras egestas lorem sed mauris dapibus viverra. Praesent quis iaculis augue, sit amet porta lacus.</p>
        </section>


        <section className="project-description-output">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus feugiat velit eget dapibus. Integer malesuada, eros et tempus ornare, neque tellus posuere nisl, quis porttitor ligula sapien quis orci. Aenean fringilla pretium placerat. In vel laoreet urna, nec maximus nisl. Cras nisi nisi, facilisis ac justo vel, lobortis dapibus nibh. Vivamus et arcu sed turpis lobortis suscipit.</p>
          <p>Nunc mollis nunc vitae augue imperdiet maximus non non risus. Curabitur massa dui, placerat quis leo et, efficitur efficitur nisi. Curabitur semper commodo eros, porttitor ultrices lacus. Donec semper vitae tortor id tincidunt. Praesent ac diam ullamcorper, aliquam enim eget, tincidunt erat. Integer et lacus nibh. Aenean tincidunt urna a arcu fringilla, id rutrum orci accumsan. Quisque sollicitudin accumsan dui et accumsan. </p>
        </section>


      </article>
    </div>
  )
}
