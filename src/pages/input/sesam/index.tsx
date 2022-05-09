import { Project } from '../../../types';
import { usePageTitle } from '../../../utils/usePageTitle';

import ProjectHeader from '../../../components/ProjectHeader';

import '../project.css';

interface Prop {
  project: Project
}

export default function Sesam({ project }: Prop): JSX.Element {
  usePageTitle(project.name);

  return (
    <div id="page-project">
      <ProjectHeader project={project} extras={`When between customer assignments in Kodeworks, the focus is on professional and academic development. At the same time, some real value creation can also be achieved. At the Kodeworks office in Oslo, Jan and Simen received an interesting task in modernizing the existing door lock system.`} />

      <article>
        <section>
          <img
            className="project-image--floatLeft"
            src="/assets/projects/sesam-1.jpg"
            /*             width="1200"
            height="800" */
            alt=""
          />
          <div className="project-description-output">
            <p>
              Using conventional keys in an office setting has multiple
              downsides. Someone needs to be in control over which physical keys
              are in whose possession, renewing these if they are somehow lost.
              Loss of keys also makes it difficult for individuals to get access
              to the office, and could potentially constitute a serious security
              risk. Today’s existing solutions for door lock control offer code
              locks, key cards, alarm control via apps and related
              functionality, but also require that one physically intervenes
              with the doors in the building. Since our goal was a solution
              tailored to our needs, while also doing as little physical changes
              as possible to the existing door lock system, the most promising
              alternative turned out to be creating the solution from the bottom
              up ourselves.
            </p>

            <p>
              Jan and Simen thus started the project with the goal of creating a
              solution that could allow for office door lock control using only
              a web app. It then became necessary to build a product from
              sketch, that on one end could join the circuits to two door locks,
              while also registering someone ringing the doorbell, and on the
              other end could offer the end user an intuitive user interface for
              this specific action. And so our own door lock system, Sesam, saw
              the light of day.
            </p>
          </div>
        </section>

        <section>
          <img
            className="project-image--floatRight"
            src="/assets/projects/sesam-2.jpg"
            /*             width="1200"
            height="800" */
            alt=""
          />

          <div className="project-description-output">
            <p>
              In the existing physical implementation, the locks for the inner
              and outer door were deactivated momentarily by joining two
              different electrical circuits. The circuit for the inner door was
              already exposed through an existing relay, and the outer door
              circuit could be accessed through the office calling system. After
              some consultation with Thomas at Kodeworks, three soldering points
              to the calling system PCB were identified. One for grounding, one
              for joining the door lock circuit and one that would receive
              voltage when the doorbell was rung. It was then decided that these
              circuits would be joined using relays controlled by
              microcontrollers, such as an Arduino model. The Arduino
              controlling the outer door, whose close proximity to the calling
              system allowed for listening to the doorbell signal, was also set
              up to register when this signal was active, communicating this to
              the Sesam backend.
            </p>
            <p>
              And so the solution for controlling the door locks and registering
              the doorbell was in place. On the local office network, three
              components were communicating - the Sesam server and two Arduinos.
              For this communication, the MQTT protocol was chosen. MQTT is
              typically preferred in IoT solutions with lots of units and large
              volumes of data, due to it being a relatively lightweight
              protocol, and since the MQTT pub/sub routine of a single unit runs
              independent of what other units are simultaneously connected. At
              the same time, MQTT offers high adjustability for parameters that
              increase the integrity of the message transmission, or keeps
              messages stored upon loss of connection. This lowers the
              performance in bigger systems, but is useful in small scale
              applications where the integrity of the message transfers must
              have some sort of guarantee.
            </p>
            <p>
              The backend uses Node.js with Express, and offers a RESTful HTTP
              API to the frontend, which is a web app written using React.
              NextJS is used to offer all pages in the web app, which follows
              the new visual profile of Kodeworks. Further on, the backend
              communicates messages to the microcontrollers. A local MQTT broker
              runs in its own Docker container, and distributes messages on
              doorbells, unlocking and locking, and heartbeat messages back and
              forth between the network components.
            </p>
          </div>
        </section>

        <section>
          <img
            className="project-image--floatLeft"
            src="/assets/projects/sesam-3.jpg"
            /* width="1200"
            height="1200" */
            alt=""
          />
          <div className="project-description-output">
            <p>
              For authentication and authorization, Google OAuth is used, so
              that only users with a valid Kodeworks mail are able to login and
              access Sesam. This was configured in Google Cloud Console, and
              Google Admin SDK was then used to check whether or not a user is
              part of either the Trondheim or the Oslo office in Kodeworks. This
              makes sure that only people with an actual connection to the
              company gains access to unlocking the doors. CI7CD Pipelines in
              Gitlab was used to automatically deploy the app to the server.
            </p>

            <p>
              When a user presses the unlock button in the app, there is an
              expectation of getting some visual clue that the process of
              opening the door has begun, and has succeeded. In Sesam, this is
              done by the backend receiving a message from the given
              microcontroller that the door has been unlocked, which the backend
              then furthers to the frontend. The unlock button is then itself
              locked until the message is passed that the door is locked. This
              communication is done using Websockets, and a natural extension of
              this was making sure that the unlock button was locked for all
              users if one user attempted to unlock the door. One can of course
              make the case that this sort of real time update for an app that
              controls two doors in the same office isn’t highly necessary, but
              on the other hand, this functionality reflects user friendliness
              as a guiding principle, and is always worth keeping in mind. An
              admin view was also developed. This gives select users access to
              statistics on the usage of Sesam, as well as the ability to
              open/close the entire service.
            </p>

            <p>
              Finally, an essential part of this project has been the effort in
              planning and describing the product before the start of the
              project. At the time of project start, Jan and Simen were
              presented with a very well prepared project description. This
              contained a clear description of the product, as well as
              functional and non-functional requirements for both the product
              and the project execution. Such a collection of requirements and
              descriptions gives the developer an excellent basis for asking
              critical questions, presenting alternative possibilities and
              creating a coherent image of the product in an early phase of the
              project. This facilitates a imperative process and productive
              communication. In summation, Jan and Simen can therefore look back
              at an instructive and well executed project.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
