import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/emplist');
  return (
    <Layout url={url} title="jeojoe | emplist.com" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>Emplist is an effective way to find talents that suit your company. It's a place where you can present what your company is about, how's your working environment, colleagues, why people want to work with you, etc. Then job finder can find a company to work for by the culture. not just job description. As a result, you will have much greater chance of finding people that fit your company.</p>
        <p>Me and my friend implemented this using MERN.io. By that time it was not in active development anymore but we found that this is the most understandable React boilerplate out there. Others are too complicated.</p>
        <p>This site is built on React, Redux, Express.js and MongoDB.</p>
        <a href="https://emplist.com/" target="_blank">www.emplist.com</a>
      </div>
    </Layout>
  );
};
