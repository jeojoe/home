import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/senior-project');
  return (
    <Layout url={url} title="jeojoe | Senior Project" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>Unfortunately, i couldn't talk much about senior project because i signed NDA lol. But i can tell you that it is a big data mining project between Chulalongkorn University and one of the big 3 telecom companies in Thailand.</p>
        <p>I use R, Impala, Spark, and data mining and visualization techniques to implement data analysis for knowledge discovering which is mainly about classification of Point of Interests in Thailand and user's mobility patterns.</p>
        <p>The project isn't finished yet. It is due on May 2017.</p>
      </div>
    </Layout>
  );
};
