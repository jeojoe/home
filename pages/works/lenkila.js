import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/lenkila');
  return (
    <Layout url={url} title="jeojoe | lenkila.com" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>Lenkila is my friends' startup. This app will make playing sport with your friends and finding a place to play easier than ever. Mobile application is their main platform but they also want a web application for admin site. They want to outsource web application work because they don't have solid knowledge on building web application. They want to find friend who can give them suggestions on it, so they came for my help.</p>
        <p>More than consulting part. I helped them build a small website presenting Lenkila platform. I chose React because i love it and Next.js for rapid prototyping.</p>
        <p>This site is built on Next.js. It's under development.</p>
        <a href="https://lenkila-ilrsxlpxze.now.sh" target="_blank">www.lenkila.com</a>
      </div>
    </Layout>
  );
};
