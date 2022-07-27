import { Link } from "react-router-dom";
import './appartment.scss';

const Appartment = (props) => {

  return (
      <article className="appartment">
        <Link to={`appartment/${props.id}`} className="appartmentLink" data-id={props.id}>
          <div className="appartmentImgWrapper">
            <img
              src={props.cover}
              alt="alt text"
              className="appartmentImg"
            />
            <h1 className="appartmentTitle">{props.title}</h1>
          </div>
        </Link>
      </article>
  )
};

export default Appartment;
