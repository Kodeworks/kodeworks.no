import { ReactElement } from "react";
import { Project } from "../../types";
import { usePageTitle } from "../../utils/usePageTitle";
import ProjectLayout from "../layouts/ProjectLayout";
import ProjectBody from "../ProjectBody";
import ProjectHeader from "../ProjectHeader";
import { useRouter } from 'next/router';
import { getLocale, fmt } from '../../utils/useTranslation';

interface Prop {
  project: Project;
}

export default function ProjectHeaderBody({ project }: Prop): JSX.Element {
  const locale = getLocale(useRouter());

  usePageTitle(fmt(project.name, locale!));
  return (
    <div id="page-project">
      <ProjectHeader project={project} />
      <ProjectBody project={project} />
    </div>
  );
}

ProjectHeaderBody.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};