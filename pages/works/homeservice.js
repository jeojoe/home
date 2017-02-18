import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/homeservice');
  return (
    <Layout url={url} title="jeojoe | SANSIRI HomeService" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>At final year in university, i decided to work part-time at software consulting company. i worked on SANSIRI's product called Home Service, the application for your home and your smart living. i was assigned to do backend programming (PHP + MySQL) and also associated project management.</p>
        <p>I also had a responsibility on Frontend programming using JQuery.</p>
        <p>The app is on both <a href="https://itunes.apple.com/th/app/home-service/id624978116?mt=8" target="_blank" rel="noopener noreferrer">App Store</a> and <a href="https://play.google.com/store/apps/details?id=com.homeservice&hl=en" target="_blank" rel="noopener noreferrer">Play Store</a>.</p>
      </div>
    </Layout>
  );
};
