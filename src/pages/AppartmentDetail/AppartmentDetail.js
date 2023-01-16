import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import Gallery from '../../components/Gallery';
import AppartmentHeading from '../../components/AppartmentHeading';
import Tags from '../../components/Tags';
import StarRate from '../../components/StarRate';
import Profile from '../../components/Profile';
import data from '../../assets/data.json';
import './appartmentDetail.scss';
import Collapse from '../../components/Collapse';

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
          <Gallery {...appartment} />

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
            <Collapse title="Description" content={appartment.description} />
            <Collapse title="Équipements" content={appartment.equipments} />
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