import data from "../../assets/data.json";
import Appartment from '../Appartment';

const Gallery = () => {
  return (
    <>
    { data.map((appartment) => (
        <>
          <Appartment {...appartment} />
        </>
        )
      )
    }
    </>
  );
}


export default Gallery;