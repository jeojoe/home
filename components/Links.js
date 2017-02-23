import Link from 'next/prefetch';

export default ({ filter, data }) => (
  <div>
    {data.map((item) => {
      if (!filter || filter === 'All') {
        return <Link href={item.page} key={item.page}><a>{item.name}</a></Link>;
      }
      if (item.tags.includes(filter)) {
        return <Link href={item.page} key={item.page}><a>{item.name}</a></Link>;
      }
    })}
    <style jsx>{`
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
  </div>
);
