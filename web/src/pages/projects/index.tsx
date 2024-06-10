import ProjectTile from '../../components/ProjectTile';
import dictionary from '../../utils/dict';
import { useClipContent } from '../../context/ClipContentContext';
import { fmt, getLocale, useTranslation } from '../../utils/useTranslation';
import { useRouter } from 'next/router';
import { getProjects } from '../../lib/sanity';
import { Project } from '../../types';

export default function Projects({ projects }: { projects: Project[] }): JSX.Element {
  useClipContent('dark-mode');
  const locale = getLocale(useRouter());
  const { t } = useTranslation(dictionary);

  return (
    <main className="main mt-0 pt-40">
      <section>
        <header className="flex flex-col w-full">
          <div className="flex items-center mb-16">
            <h2 className="mr-8 md:text-7xl text-4xl">Våre </h2>
            <h2 className="green-text md:text-7xl text-4xl">prosjekter</h2>
          </div>

          <p className="md:w-3/5 lg:w-1/2 xl:w-1/3 md:self-end self-start">{t('what_description')}</p>
        </header>
        <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] py-24 items-center gap-10">
          
          <div className="flex flex-col gap-y-36">
            {projects.map((project, index) => (
              <ProjectTile
                key={fmt(project.name, locale!)}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </article>
      </section>
    </main>
);
}

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}
