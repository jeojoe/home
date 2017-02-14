import Link from 'next/prefetch';
import Layout from '../components/Layout';

export default ({ url }) => (
  <Layout url={url} title="jeojoe" subHeader="¯\(ツ)/¯">
    <Link href="thoughts"><a>Thoughts</a></Link>
    <Link href="works"><a>Works</a></Link>
    <Link href="about"><a>About</a></Link>
    <style jsx>{`
      .wrapper {
        padding: 50px 0;
      }
      a {
        font-weight: 300;
        display: block;
        margin: 0 0 15px;
        color: #444;
        font-size: 17px;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
