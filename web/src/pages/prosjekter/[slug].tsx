import {ReactElement} from 'react';
import {GetStaticPaths, GetStaticProps} from 'next';
import Link from 'next/link';
import {NextPageWithLayout} from '../_app';

import Layout from '../../components/Layout';
import {Project} from '../../types';
import {getProject, getProjects} from '../../lib/sanity';
import ProjectHeader from '../../components/ProjectHeader';
import ProjectBody from '../../components/ProjectBody';
import { usePageTitle } from '../../utils/usePageTitle';

interface Prop {
    project: Project;
}

const ProjectPage: NextPageWithLayout = ({project}: Prop) => {
    usePageTitle(project.name || '');

    return (
        <div className="section-padding">
            { project ?  (
                <>
                    <ProjectHeader project={project} />
                    <ProjectBody project={project} />
                </>
             ) : "404 Not found"}
            <footer>
                <div className="page-project-footer-description">
                    <h3>Hva annet har vi gjort?</h3>
                    <p>
                        Ta gjerne en titt innom <Link href="/prosjekter">prosjektoversikten</Link> vår for å
                        lese mer om våre andre prosjekter.
                    </p>
                    {/* <p>
                        Vi ser også etter utviklere til kontorene våre i Oslo og Trondheim. Sjekk ut{' '}
                        <Link href="/karriere">lønnskalkulatoren</Link>, og våre{' '}
                        <Link href="/karriere">ledige stillinger</Link>.
                    </p> */}
                </div>
                <div className="page-project-footer-contact">
                    <div className="page-project-footer-contact-column">
                        <div>
                            <strong>Oslo</strong>
                            <br/> Grønnegata 10, 0380 Oslo
                        </div>
                        <div>
                            <strong>Trondheim</strong>
                            <br/> Fjordgata 30, 7010 Trondheim
                        </div>
                    </div>
                    <div className="page-project-footer-contact-column">
                        <div>
                            <br/>
                            <a href="mailto:post@kodeworks.no">post@kodeworks.no</a>
                            <br/>
                            +47 405 45 500
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

ProjectPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await getProjects();
    return {
        paths: projects.map((project) => ({params: {slug: project.slug}})),
        fallback: "blocking"
    };
};

export const getStaticProps: GetStaticProps<Prop, { slug: string }> = async (context) => {
    if (!context.params) {
        throw new Error('Params missing');
    }

    return {
        props: {
            project: await getProject(context.params.slug),
        },
        revalidate: 10,
    };
};
