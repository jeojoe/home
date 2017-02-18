import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/ppt-coupler');
  return (
    <Layout url={url} title="jeojoe | ppt-coupler.com" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>ppt-coupler.com is a company website of Panasia Progressive Technology or PPT. PPT is rebar coupler company. The owner of the company is my friend's father. he wants to build a new website presenting the company with modern design that have an impact on customers then hopefully create buying actions, so my friend came for my help.</p>
        <p>The design direction i took is bold and strong design. I tried to create a powerful look to the site so that it will consequencely build a strong company image that sells.</p>
        <p>I used React (well, of course). But i was tired of bloating React boilerplate. So i looked for new React framework that is minimalistic and easy to use. Then i found Next.js. And my React life has changed since then.</p>
        <p>This site is built on Next.js (React). It's under developement.</p>
        <a href="https://panasia-qchxbevgop.now.sh" target="_blank">www.ppt-coupler</a>
      </div>
    </Layout>
  );
};
