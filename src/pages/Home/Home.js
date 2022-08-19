import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Gallery />
    </div>
  );
};

export default Home;