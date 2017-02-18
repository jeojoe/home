import { thoughts } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const thought = thoughts.find(w => w.page === '/2017/good-design');
  return (
    <Layout url={url} title={`jeojoe | ${thought.name}`} subHeader="Thoughts">
      <div className="blog">
        <Header
          name={thought.name}
          date={thought.date}
        />
        <p>Good Design blog, to be done.</p>
      </div>
    </Layout>
  );
};
