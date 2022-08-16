import './starRate.scss';

const StarRate = (props) => {

  return (
    <div className='starRate star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
              
        return (
          <div className="starContainer" key={index} >
            <span className = {index <= props.rating ? "starOn" : "starOff"} >&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRate;