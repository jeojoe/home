import Layout from '../Layout';
import Header from './Header';

export default ({ thought, url, subHeader, children }) => (
  <Layout url={url} title={`jeojoe | ${thought.name}`} subHeader={subHeader}>
    <div className="blog">
      <Header
        name={thought.name}
        date={thought.date}
        tags={thought.tags}
      />
      {children}
    </div>
  </Layout>
);
