import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/panasia');
  return (
    <Layout url={url} title="jeojoe | Panasia Progressive Technology" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>the project was to develop a company website of Panasia Progressive Technology or PPT. PPT is rebar coupler company. The owner of the company is my friend's father. he wanted to build a new website presenting the company with modern design that have an impact on customers then, hopefully, create buying actions, so my friend came for my help.</p>
        <p>The design direction i took was bold and strong design. I tried to create a powerful look to the site so that it will consequencely build a strong company image that sells.</p>
        <p>I used React (well, of course). But i was tired of bloating React boilerplate. So i looked for new React framework that is minimalistic and easy to use. Then i found Next.js. And my React life has changed since then.</p>
        <p>This site is built on Next.js (React). It's under developement.</p>
        <a href="https://panasia.now.sh" target="_blank" rel="noopener noreferrer">ppt-coupler site (developing)</a>
      </div>
    </Layout>
  );
};
