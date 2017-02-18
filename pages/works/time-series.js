import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/time-series');
  return (
    <Layout url={url} title="jeojoe | Time Series Mining" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <p>I studied Time Series Mining because i want to start learning about the concept of Data Mining and Knowledge Discovery. It was really a good decision. And there was a final project that. So i paired with <a href="https://github.com/iboss-ptk" target="_blank">my good friend</a> then start building the  project. Since we have a background on Node.js and i knew React. We decided to bootstrap this project by using Yeoman - react-generators, code raw time series algorithm (Dynamic Time Wrapping) by hands (my friend's work lol) and use React for showing time series mining result (which is my work of course).</p>
        <p>The purpose of the project is to classify 2 input strings by mapping those strings into Time Series data first. We use "keyboard position" to be input data. and then we do classification on that, using Dynamic Time Wrapping. The result was bad because we implemented it over night. But i can say that it exceeded our expectation.</p>
        <p>The project we did is in Github repo.</p>
        <a href="https://github.com/jeojoe/web-prog" target="_blank">Time Series Project Repository</a>
      </div>
    </Layout>
  );
};
