const Appartment = (props) => {

  return (
      <article className="appartment" key={props.id}>
        <a href={props.cover} className="appartmentLink">
          <div className="appartmentImgWrapper">
            <img
              src={props.cover}
              alt="alt text"
              className="appartmentImg"
            />
            <h1 className="appartmentTitle">{props.title}</h1>
          </div>
        </a>
      </article>
  )
};

export default Appartment;
