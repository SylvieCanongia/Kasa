import React from 'react';
import { useParams } from "react-router-dom";
import Carousel from '../components/Carousel';
import AppartmentHeading from '../components/AppartmentHeading';
import Tags from '../components/Tags';
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
    <>
      <Carousel {...appartment }/>
      <AppartmentHeading title={appartment.title} location={appartment.location} />
      <Tags tags={appartment.tags} />
    </>
  );
};

export default AppartmentDetail;