import Layout from '../components/Layout';

export default () => (
  <Layout title="jeojoe | About" subHeader="About">
    <div className="bug-about">
      <div className="lol-wrapper">
        <img src="/static/memes/1.jpg" style={{ maxWidth: '300px' }} />
        {/* <sub>refresh for more lol</sub> */}
      </div>
      <p>Hello There.</p>
      <p>I'm Joe. Born and live in Thailand, what a beautiful country.</p>
      <p>Obsessed in Javascript and everything JS related, especially React.</p>
      <blockquote>
        "React is such a good idea that we will spend the rest of the decade continuing to explore its implications and applications."
        <a href="https://twitter.com/rauchg/status/801005961334943744"><cite>@rauchg</cite></a>
      </blockquote>
      <p>Totally agreed.</p>
      <p>Also like to learn other things in computer science though, such as Distributed System, Networking, Cryptography.</p>
      <p>(Or basically Blockchain, to put it simply)</p>
      <p>Interested in Dieter Rams design, good movies and also bodybuilding.</p>
      <p>Love to discuss about ideas, philosophy, western history, politics and good lores (LOTR, Skyrim).</p>
      <p></p>
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
