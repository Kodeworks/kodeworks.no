import { GetServerSideProps } from 'next';
import { PortableText } from '@portabletext/react';
import { usePageTitle } from '../../../utils/usePageTitle';
import { JobDescription } from '../../../types';
import { getJobDescriptionBySlug } from '../../../lib/sanity';

interface Props {
  job: JobDescription;
}
export default function Job({ job }: Props): JSX.Element {
  usePageTitle(job.title);

  return (
    <main>
      <header className="section-hero section-content section-content-narrow container">
        <div className={`career-mainheader`}>
          <h1>{job.title}</h1>
          <span>{job.label}</span>
        </div>
      </header>
      <section className="seciton section-content section-content-narrow container">
        <article className="article">
          <p>{job.subtitle}</p>
        </article>

        <article className="article">
          <PortableText value={job.content} />
        </article>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props, { slug: string }> = async (context) => {
  const job = await getJobDescriptionBySlug(context.params.slug);

  return {
    props: { job },
  };
};
