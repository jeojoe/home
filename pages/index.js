import Layout from '../components/Layout';
import Link from 'next/prefetch';

export default ({ url }) => (
  <Layout url={url} title="jeojoe" subHeader="¯\(ツ)/¯" noFilter>
    <div className="wrapper">
      <Link href="thoughts"><a>Thoughts</a></Link>
      <Link href="works"><a>Works</a></Link>
      <Link href="about"><a>About</a></Link>
    </div>
    <style jsx>{`
      .wrapper {
        padding: 50px 0;
      }
      a {
        font-weight: 300;
        display: block;
        margin: 0 0 15px;
        color: #444;
        font-size: 18px;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
