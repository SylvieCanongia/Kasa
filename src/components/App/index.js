import Routes from "../Routes";
import Navbar from "../Navbar";
import Hero from '../Hero';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Routes />
    </div>
  );
}

export default App;
