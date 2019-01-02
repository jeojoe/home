import { works } from '../../data';
import Layout from '../../components/Layout';
import Header from '../../components/blog/Header';

export default ({ url }) => {
  const work = works.find(w => w.page === '/works/shills');
  return (
    <Layout url={url} title="jeojoe | Shills.lol" subHeader="Works">
      <div className="blog">
        <Header
          name={work.name}
          date={work.date}
          tags={work.tags}
        />
        <img src="https://shills.lol/static/lol.png" />
        <p><b>"DUDE, DID YOU BUY VECHAIN YET?"</b></p>
        <p><b>"Ahem, execuse me, do you have time to talk about our lord RaiBlocks?"</b></p>
        <p>Late 2017 and early 2018 was a weird time when shills plagued <a href="https://www.reddit.com/r/CryptoCurrency">/r/CryptoCurrency</a>. So me and <a href="https://aunnnn.com" target="_blank" rel="noopener noreferrer">my friend</a> has an idea for a place dedicated to shills! It exploded for a week then faded away though. But at least we had some really good shills that made us laugh.</p>
        <a href="https://shills.lol/" target="_blank" rel="noopener noreferrer">shills.lol</a>
        <br />
        <a href="https://github.com/aunnnn/shills.lol" target="_blank" rel="noopener noreferrer">Source Code</a>
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
