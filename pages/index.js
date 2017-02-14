import Layout from '../components/Layout';
import Links from '../components/Links';

export default ({ url }) => (
  <Layout url={url} title="jeojoe" subHeader="¯\(ツ)/¯">
    <Links
      data={[
        { name: 'Thoughts', page: '/thoughts' },
        { name: 'Works', page: '/works' },
        { name: 'About', page: '/about' },
      ]}
    />
  </Layout>
);
