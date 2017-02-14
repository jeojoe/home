import Head from 'next/head';
import Link from 'next/prefetch';
import Filters from './Filters';

export default ({ url, children, title, subHeader, filter, changeFilter }) => (
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
        {filter && <Filters pathname={url.pathname} filter={filter} changeFilter={changeFilter} />}
      </div>
      <div className="wrapper">
        {children}
      </div>
    </div>
    <style jsx>{`
      .container {
        padding-top: 128px;
      }
      @media (max-width: 550px) {
        .container {
          padding-top: 64px;
        }
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
      .wrapper {
        padding: 50px 0;
      }
    `}</style>
  </div>
);
