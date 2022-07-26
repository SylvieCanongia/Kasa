import React from "react";
import data from "../../assets/data.json";
import Appartment from "../Appartment";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((appartment) => (
        <React.Fragment key={appartment.id}>
          <Appartment {...appartment} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Gallery;
