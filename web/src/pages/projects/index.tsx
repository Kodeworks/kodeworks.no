import ProjectTile from '../../components/ProjectTile';
import dictionary from '../../utils/dict';
import { useClipContent } from '../../context/ClipContentContext';
import { fmt, getLocale, useTranslation } from '../../utils/useTranslation';
import { useRouter } from 'next/router';
import { getProjects } from '../../lib/sanity';
import { ProjectV2 } from '../../types';

export default function Projects({ projects }: { projects: ProjectV2[] }): JSX.Element {
  useClipContent('dark-mode');
  const locale = getLocale(useRouter());
  const { t } = useTranslation(dictionary);

  return (
    <div className="bg-black text-white">
      <main className="main bg-black mt-0 pt-40">
        <section className={`grid grid-cols-1 lg:grid-cols-2 `}>
          <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] flex py-24 items-center gap-10">
            <header>
              <h1 className="section-header-headline">{t('what')}</h1>

              <p>{t('what_description')}</p>
            </header>
            <div className="flex flex-col gap-y-36">
              {projects.map((project, index) => (
                <ProjectTile
                  key={fmt(project.name, locale!)}
                  project={project}
                  reverse={index % 2 === 0}
                />
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
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
