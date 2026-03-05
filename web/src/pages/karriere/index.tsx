import { usePageTitle } from '../../utils/usePageTitle';
import { GetServerSideProps } from 'next';
import { getPage } from '../../lib/sanity';
import PageBuilder from '../../components/page/PageBuilder';
import { Page } from '../../types/sanity.types';

interface Props {
  page: NonNullable<Page>;
}
export default function NewCareerPage({ page }: Props) {
  usePageTitle('Career');

  return (
    <main className="main">
      <PageBuilder pageSchema={page} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const page = await getPage('Career');

  if (!page) {
    throw new Error('Page not found');
  }

  return {
    props: { page },
  };
};
