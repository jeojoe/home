export default ({ name, date, tags }) => (
  <div>
    <h3>{name}</h3>
    <h6>
      {date}
      {tags && ' | '}
      {tags && tags.map((tag, i) =>
        <span key={i}>{tag}{i === tags.length - 1 ? '' : ', ' } </span>)
      }
    </h6>
  </div>
);
