import { usePageTitle } from '../../../utils/usePageTitle';
import { GetServerSideProps } from 'next';
import { getPage } from '../../../lib/sanity';
import PageBuilder from '../../../components/page/PageBuilder';

interface Props {
  page: NonNullable<Sanity.Default.Schema.Page>;
}
export default function NewCareerPage({ page }: Props) {
  usePageTitle('Career');

  // TODO We can add section for calculator and benefits under page builder
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
