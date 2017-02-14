import Head from 'next/head';
import Link from 'next/prefetch';
import Filters from './Filters';

export default ({ url, children, title, subHeader, filter }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
    </Head>
    <div className="container">
      <Link href="/"><h3 className="header">jeojoe</h3></Link>
      <div className="sub-wrapper">
        {subHeader}
        {filter && <Filters pathname={url.pathname} filter={filter} />}
      </div>
      {children}
    </div>
    <style jsx>{`
      .container {
        padding-top: 128px;
      }
      .header {
        cursor: pointer;
        font-weight: 300;
        color: #555;
        margin: 0 0 10px;
      }
      .sub-wrapper {
        font-size: 12px;
        color: #999;
      }
    `}</style>
  </div>
);
