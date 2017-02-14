import c from 'classnames';
import { tags } from '../data';

export default ({ pathname, filter, changeFilter }) => (
  <span>
    {tags[pathname].map(tag =>
      <a
        onClick={() => changeFilter(tag)}
        className={c({ active: filter === tag })}
      >
        {tag}
      </a>)}
    <style jsx>{`
      a {
        padding: 0 0 0 8px;
        color: #999;
        cursor: pointer;
      }
      a:hover {
        text-decoration: underline;
      }
      a.active {
        text-decoration: underline;
      }
    `}</style>
  </span>
);
