import { PortableText } from '@portabletext/react';
import StaffManualNavigation from '../../components/StaffManual/StaffManualNavigation';
import { StaffManual } from '../../types';
import { getStaffManual } from '../../lib/sanity';
import { useClipContent } from '../../context/ClipContentContext';

interface Props {
  manual: StaffManual;
}

export default function NewStaffManual({ manual }: Props): JSX.Element {
  useClipContent('');

  return (
    <>
      <header className="handbook-mainheader">
        <div className="section-content section-content-narrow handbook-mainheader-content">
          <h1 className="section-header-headline">{manual.title}</h1>
          <p>{manual.intro}</p>
        </div>
      </header>
      <div className="section-content section-content-narrow handbook-wrapper">
        <StaffManualNavigation manual={manual} />
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
