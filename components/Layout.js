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
      <link rel="stylesheet" type="text/css" href="/static/skeleton.css" />
    </Head>
    <div className="container">
      <Link href="/"><h3 className="layout-bug header">jeojoe</h3></Link>
      <div className="sub-wrapper">
        {subHeader.indexOf('Works') !== -1 || subHeader.indexOf('Thoughts') !== -1 ?
          <Link
            href={subHeader.indexOf('Works') !== -1 ? '/works' : '/thoughts'}
          >
            <span>{subHeader}</span>
          </Link>
          :
          <span>{subHeader}</span>
        }
        {filter &&
          <Filters pathname={url.pathname} filter={filter} changeFilter={changeFilter} />}
      </div>
      <div className="wrapper">
        {children}
      </div>
    </div>
    <style jsx>{`
      .container {
        padding-top: 100px;
      }
      .sub-wrapper {
        font-size: 12px;
        color: #999;
      }
      .sub-wrapper span {
        cursor: pointer;
      }
      .wrapper {
        padding: 50px 0 128px;
      }
      @media (max-width: 550px) {
        .container {
          padding-top: 60px;
        }
        .wrapper {
          padding: 50px 0 64px;
        }
      }
    `}</style>
    <style jsx global>{`
      .layout-bug.header {
        cursor: pointer;
        font-weight: 300;
        color: #555;
        margin: 0 0 10px;
      }
      // .blog {
      //   position: relative;
      // }
      // .blog .back {
      //   position: absolute;
      //   top: -110px;
      //   left: -100px;
      //   color: #999;
      //   // font-size: 20px;
      // }
      .blog img {
        width: 100%;
        margin: 30px 0;
      }
      .blog p {
        color: #444;
      }
      .blog h6 {
        font-size: 13px;
      }
    `}</style>
  </div>
);
