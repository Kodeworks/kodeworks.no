import ProjectTile from '../../components/ProjectTile';

import api from '../../api';
import dictionary from '../../utils/dict';
import { useClipContent } from '../../context/ClipContentContext';
import { useTranslation } from '../../utils/useTranslation';
import { useRouter } from 'next/router';
import { getLocale, fmt } from '../../utils/useTranslation';

export default function Projects(): JSX.Element {
  useClipContent(true);
  const locale = getLocale(useRouter());
  const { t } = useTranslation(dictionary);

  return (
    <div className='bg-[#000] text-white'>
    <main className='main bg-[#000] mt-0 pt-40'>
      <section className={`grid grid-cols-1 lg:grid-cols-2 `}>
        <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] flex py-24 items-center gap-10">
        <header>
          <h1 className="section-header-headline">{t('what')}</h1>

          <p>{t('what_description')}</p>
        </header>
        <div className='flex flex-col gap-y-36'>
          {api.projects.getProjects().map((project, index) => (
            <ProjectTile key={fmt(project.name, locale!)} project={project} reverse={index % 2 === 0}/>
          ))}
        </div>
        </article>
      </section>
    </main>
    </div>
  );
}
