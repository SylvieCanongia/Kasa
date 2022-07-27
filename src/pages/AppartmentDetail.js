import React from 'react';
import { useParams } from "react-router-dom";
import data from './../assets/data.json';

const AppartmentDetail = () => {
  // match to the :id specified into the route /appartment/:id
  const { id } = useParams();

  const getAppartment = (id) => {
    const appartmentData = data.find(appartment => (appartment.id === id));
    return appartmentData; 
  }

  const appartment = getAppartment(id);
  // console.log(appartment);

  return (
    <div>
      <h1>{appartment.id}</h1>
      <p>{appartment.title}</p>
    </div>
  );
};

export default AppartmentDetail;