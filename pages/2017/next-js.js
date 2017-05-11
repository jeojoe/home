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
        <p>Well let's say i wanted to start creating react app in the simplest and fastest way as possible.. 
          I had 2 options. First is to google "react boilerplate" or "react starter"
          and ended up being fascinated on how beautifuly these boilerplate are to far from understandable
          "Next.js is minimalistic framework for server-rendering React application"
          Well, there are some frameworks out there that claim this "minimalistic" charateristic
          but from my personal experience
        </p>
      </div>
    </Layout>
  );
};
