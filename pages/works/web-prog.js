import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/web-prog');
  return (
    <Layout url={url} title="jeojoe | Web Programming Assignment" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>Around March 2016, i studied Web Programming. There were weekly assignments occasionally through out the course. Instructor of this course wants every student to learn the fundamental of building web application (focus on frontend dev.). So he chose very mature tech like jQuery for lecturing and demo. And focus on teaching in-depth basic such as new feature on HTML5 and CSS3, Javascript scope and its asynchronous behaviour, etc.</p>
        <p>All assignments i did are in Github repo. Some of them might not work because of expired free API thought.</p>
        <a href="https://github.com/jeojoe/web-prog" target="_blank" rel="noopener noreferrer">Web Prog Repository (Warning: political sarcastic jokes are strong with resume work !!)</a>
        <br /><br />
        <a href="http://fuqdissheet.now.sh" target="__blank" rel="noopener noreferrer">Final Project Demo</a>
      </div>
    </Layout>
  );
};
