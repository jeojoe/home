import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/kene');
  return (
    <Layout url={url} title="jeojoe | kene.co.th" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>KENE Laboratory Co., Ltd. is skincare brand i did with my friend since freshman year. kene.co.th is brand's e-commerce website that me and 2 of my engineering olympiad-genius-level friends team up building it together in junior year.</p>
        <p>Frankly i didn't touch any code. It was a work of genius by my friends who built it from the first line of code. (Yeah, they didn't use any e-commerce library, just learning e-commerce good practice and security fundamental then built everthing from nothing by their skills). But since i'm project manager i had to design UX/UI, what looks and feels of the site that suit my brand identity and maximize conversion rate. And then managed the team to get the project done.</p>
        <p>Although i now quit working on this company, it leaves me fundamental skills of building a brand, design, project management, marketing and most importantly, teamwork and friendship. It was one of the best experience in my life.</p>
        <p>This site is built on Angular, Laravel and MySQL.</p>
        <a href="https://kene.co.th/" target="_blank" rel="noopener noreferrer">www.kene.co.th</a>
        <img src="/static/works/kene.jpg" alt="kene.co.th screenshot" />
      </div>
    </Layout>
  );
};
