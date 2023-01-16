import Hero from '../../components/Hero';
import AppartmentList from '../../components/AppartmentList';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <AppartmentList />
    </div>
  );
};

export default Home;