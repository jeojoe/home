import Head from 'next/head';
import Filters from './Filters';

export default ({ url, children, title, subHeader }) => (
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
      <h2 className="header">jeojoe</h2>
      <div className="sub-wrapper">
        {subHeader}
        <Filters />
      </div>
      {children}
    </div>
    <style jsx>{`
      .container {
        padding-top: 150px;
      }
      .header {
        font-weight: 300;
        color: #444;
      }
    `}</style>
  </div>
);
