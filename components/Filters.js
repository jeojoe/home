import { tags } from '../data';

export default ({ pathname }) => (
  <span>
    {tags[pathname].map(tag => <a>{tag}</a>)}
    <style jsx>{`
      a {
        padding: 0 0 0 8px;
        color: #999;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </span>
);
