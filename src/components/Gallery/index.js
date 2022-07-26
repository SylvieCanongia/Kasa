import data from "../../assets/data.json";
import Appartment from "../Appartment";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((appartment) => (
        <>
          <Appartment {...appartment} />
        </>
      ))}
    </div>
  );
};

export default Gallery;
