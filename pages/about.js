import Layout from '../components/Layout';

export default () => (
  <Layout title="jeojoe | About" subHeader="About">
    <div className="bug-about">
      <div className="lol-wrapper">
        <img src="/static/memes/1.jpg" style={{ maxWidth: '300px' }} />
        {/* <sub>refresh for more lol</sub> */}
      </div>
      <p>Born in Thailand on May 31, 1994.</p>
      <p>Studying in Computer Engineering, Chulalongkorn University (Final Year).</p>
      <p>Passionate about React + ES6, clean code, optimization and bodybuilding.</p>
      <p>Interested in good design and movies, electronic music, ML, and learning German.</p>
      <p>Love to discuss ideas, philosophy and western history.</p>
      <p>Always find time to practice coding.</p>
      <p>(9gag, Skyrim and fast loading site FTW btw)</p>
      <div>---</div>
      <div>
        <a href="https://github.com/jeojoe" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://github.com/jeojoe/home" target="_blank" rel="noopener noreferrer">Source Code</a>
      </div>
    </div>
    <style jsx>{`
      .lol-wrapper {
        padding: 0 0 30px;
      }
      .lol-wrapper sub {
        margin-left: 10px;
      }
      .bug-about a {
        margin-right: 10px;
      }
    `}</style>
  </Layout>
);
