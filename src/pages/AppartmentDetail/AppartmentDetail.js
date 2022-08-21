import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import Carousel from '../../components/Carousel';
import AppartmentHeading from '../../components/AppartmentHeading';
import Tags from '../../components/Tags';
import StarRate from '../../components/StarRate';
import Profile from '../../components/Profile';
import data from '../../assets/data.json';
import './appartmentDetail.scss';
import Accordion from '../../components/Accordion';

const AppartmentDetail = () => {
  // match to the :id specified into the route /appartment/:id
  const { id } = useParams();

  const getAppartment = (id) => {
    const appartmentData = data.find(appartment => (appartment.id === id));
    return appartmentData;
  }
  const appartment = getAppartment(id);

  return (
    <>
      { appartment !== undefined &&
        <section className="appartmentDetail">
          <Carousel {...appartment} />



          <div className='appartmentDetailContainer'>
            <div className='titleAndTagsContainer'>
              <AppartmentHeading title={appartment.title} location={appartment.location} />
              <Tags tags={appartment.tags} />
            </div>
            <div className='rateAndProfileBlock'>
              <StarRate rating={appartment.rating} />
              <Profile profileName={appartment.host.name} profilePicture={appartment.host.picture} />
            </div>
          </div>



          <section className='sectionCollapses'>
            <Accordion title="Description" content={appartment.description} />
            <Accordion title="Équipements" content={appartment.equipments} />
          </section>
        </section>
      }
      { appartment === undefined &&
        <Navigate to="/error" replace={true} />
      }
    </>
  );
};

export default AppartmentDetail;