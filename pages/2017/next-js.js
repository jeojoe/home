import { thoughts } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/next-js');
  return (
    <Layout url={url} title={`jeojoe | ${thought.name}`} subHeader="Thoughts">
      <div className="blog">
        <Header
          name={thought.name}
          date={thought.date}
        />
        <p>Next.js blog, to be done.</p>
      </div>
    </Layout>
  );
};
