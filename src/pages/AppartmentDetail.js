import React from 'react';
import { useParams } from "react-router-dom";
import Carousel from '../components/Carousel';
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
    <Carousel {...appartment }/>
  );
};

export default AppartmentDetail;