import Routes from "../Routes";
import Navbar from "../Navbar";
import Home from '../../pages/Home';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
