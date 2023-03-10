import { getStaffManual, ManualSection, StaffManual } from '../../lib/sanity-api';
import { PortableText } from '@portabletext/react';

interface GroupedSectionLabel {
  [key: string]: Array<ManualSection>;
}

interface Props {
  manual: StaffManual;
}

export default function NewStaffManual({ manual }: Props): JSX.Element {
  const groupedSectionsByLabel = manual.sections.reduce<GroupedSectionLabel>((acc, curr) => {
    const currentArray = acc[curr.label] || [];
    return {
      ...acc,
      [curr.label]: [...currentArray, curr],
    };
  }, {});
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
          {Object.entries(groupedSectionsByLabel).map(([label, sections]) => (
            <>
              <h4>{label}</h4>
              <ul className="list-plain handbook-sidebar-list">
                {sections.map(({ title, slug }) => (
                  <li key={slug.current}>
                    <a href={`#${slug.current}`}>{title}</a>
                  </li>
                ))}
              </ul>
            </>
          ))}
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
