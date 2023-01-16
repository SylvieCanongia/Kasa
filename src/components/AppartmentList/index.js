import React from "react";
import data from "../../assets/data.json";
import Appartment from "../Appartment";
import "./appartmentList.scss";

const AppartmentList = () => {
  return (
    <div className="appartmentList">
      {data.map((appartment) => (
        <React.Fragment key={appartment.id}>
          <Appartment {...appartment} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default AppartmentList;
