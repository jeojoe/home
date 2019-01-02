import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/platonos');
  return (
    <Layout url={url} title="jeojoe | Platonos" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <div>
          <img src="https://platonos.com/static/plato-red.jpg" />
          <img src="https://platonos.com/static/plato.jpg" />
        </div>
        <p>Me and <a href="https://github.com/aunnnn" target="_blank" rel="noopener noreferrer">my friend</a> at first wanted to build a place where people could discuss about serious topics like science, art, philosophy, etc. Enabling them to connect and get to know each others. Then we decided to built it using Meteor.. worst choice ever made. So we decided to create more lighter version with Next.js and Graph Cool (GraphQL BaaS like Firebase). And also changed from public profile to be completely anonymous. Everybody is Plato (Grey and Red Plato to be specific) talking to each other 1-1 and every discussions are public.</p>
        <a href="https://platonos.com/welcome" target="__blank" rel="noopener nonreferrer">platonos.com</a>
        <br />
        <a href="https://github.com/aunnnn/platonos" target="_blank" rel="noopener noreferrer">Source Code</a>
        <br /><br />
      </div>
      <style jsx>
        {`
          img {
            width: initial !important;
            height: 128px;
          }
        `}
      </style>
    </Layout>
  );
};
