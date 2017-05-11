export default ({ name, date, tags }) => (
  <div className="wrapper">
    <h6>
      {date}
      {tags && ' | '}
      {tags && tags.map((tag, i) =>
        <span key={i}>{tag}{i === tags.length - 1 ? '' : ', ' } </span>)
      }
    </h6>
    <h3>{name}</h3>
    <style jsx>{`
      .wrapper {
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);
