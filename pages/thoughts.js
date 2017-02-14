import Link from 'next/prefetch';
import Layout from '../components/Layout';
import { thoughts } from '../data';

export default ({ url }) => (
  <Layout url={url} title="jeojoe | Thoughts" subHeader="Thoughts : ">
    <div className="wrapper">
      {thoughts.map(t => <Link href={t.page}><a>{t.name}</a></Link>)}
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
        font-size: 17px;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Layout>
);
