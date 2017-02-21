import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/platonos');
  return (
    <Layout url={url} title="jeojoe | platonos.com" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>Me and <a href="https://github.com/aunnnn" target="_blank">my friend</a> want to build a place where people can discuss about serious topics like science, art, philosophy, etc, Enabling them to connect and get to know each others.</p>
        <p>This is the first big website we did so we chose to use Meteor framework for buiding the site. Meteor is a ultra simple javascript framework that you can build the website in no time. For frontend we chose React and application stucture is heavily influenced by Meteor code style guideline. This is the first time that we use linter, ESLint (Airbnb config.), it was the best decision ever in my js journey. I use it on every js projects ever since.</p>
        <p>Meteor has taught us about fundamental concept of building real-time web application and the important of code styling. And working on this project has taught me about tranforming app ideas into a real world application, UI and UX design, and value of teamwork.</p>
        <p>This site is built on Meteor, React and MongoDB. The project isn't finish yet because studying and project stuff but it will be soon.</p>
        <a href="https://github.com/aunnnn/platonos" target="_blank" rel="noopener noreferrer">Repository</a>
        <br /><br />
        <a href="https://www.platonos.com" target="__blank" rel="noopener nonreferrer">MVP (Contact me for testing account. You know how to contact me.)</a>
      </div>
    </Layout>
  );
};
