import React from 'react';
import './appartmentHeading.scss';

const AppartmentHeading = (props) => {

  return (
    <div className='appartmentHeading'>
      <h1 className="title">
        { props.title }
      </h1>
      <p className="location">
        { props.location }
      </p>

        
    </div>
  );
};

export default AppartmentHeading;