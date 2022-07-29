import './starRate.scss';
import Star from './star.png';

const StarRate = (props) => {
let numberOfStars = [];

for (let i = 0; i < props.rating; i++) {
  numberOfStars.push(
    <div className="starContainer">
      <img src={Star} alt="Star rate" />
    </div>
  ) 
}

  return (
    <div className='starRate'>
        { numberOfStars }
    </div>
  );
};

export default StarRate;