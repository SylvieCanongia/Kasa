import React from 'react';

import data from '../../assets/data.json';

const AppartmentCard = (props) => {
const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = props

  return (
    <div>
      <span>{id}</span>
      <span>{title}</span>
    </div>
  );
};

export default AppartmentCard;