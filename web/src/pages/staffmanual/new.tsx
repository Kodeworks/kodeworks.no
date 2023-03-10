import { getStaffManual, StaffManual } from '../../lib/sanity-api';
import { PortableText } from '@portabletext/react';

interface Props {
  manual: StaffManual;
}

export default function NewStaffManual({ manual }: Props): JSX.Element {
  return (
    <>
      <header className="handbook-mainheader">
        <div className="section-content section-content-narrow handbook-mainheader-content">
          <h1 className="section-header-headline">{manual.title}</h1>
          <p>{manual.intro}</p>
        </div>
      </header>
      <div className="section-content section-content-narrow handbook-wrapper">
        <nav className="handbook-sidebar">
          <ul className="list-plain handbook-sidebar-list">
            {manual.sections.map(({ title, slug }) => (
              <li key={slug.current}>
                <a href={`#${slug.current}`}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <main className="handbook-content">
          {manual.sections.map(({ title, slug, content }) => (
            <section key={slug.current} id={slug.current}>
              <h2>{title}</h2>
              <PortableText value={content} />
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const manual = await getStaffManual();

  return {
    props: { manual },
  };
}
