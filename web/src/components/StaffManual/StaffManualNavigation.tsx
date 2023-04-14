import React from 'react';
import { ManualSection, StaffManual } from '../../lib/sanity-api';

interface GroupedSectionLabel {
  [key: string]: Array<ManualSection>;
}
interface Props {
  manual: StaffManual;
}

const StaffManualNavigation = ({ manual }: Props) => {
  const groupedSectionsByLabel = manual.sections.reduce<GroupedSectionLabel>((acc, curr) => {
    const currentArray = acc[curr.label] || [];
    return {
      ...acc,
      [curr.label]: [...currentArray, curr],
    };
  }, {});

  return (
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
  );
};

export default StaffManualNavigation;
