import api from '../../../api';
import ProjectHeaderBody from '../../../components/ProjectHeaderBody';

export default ProjectHeaderBody;

export async function getStaticProps() {
  return {
    props: {
      project: await api.projects.getProject('lawenforcementagency')
    }
  };
}