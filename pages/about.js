import Layout from '../components/Layout';

export default () => (
  <Layout title="jeojoe | About" subHeader="About">
    <p>Born in Thailand on May 31, 1994</p>
    <p>Studying in Computer Engineering, Chulalongkorn University (Final Year)</p>
    <p>Passionate about React + ES6, clean code, optimization and bodybuilding</p>
    <p>Interested in good design, good movies, electronic music, ML</p>
    <p>Love to discuss ideas, philosophy and western history</p>
    <p>(9gag, Skyrim and fast loading site FTW btw lol)</p>
    <div>---</div>
    <div>
      <a href="https://github.com/jeojoe">Github</a>
    </div>
    <style jsx>{`
      p {
        color: #444;
      }
      a {
        font-weight: 300;
        color: #444;
        cursor: pointer;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
