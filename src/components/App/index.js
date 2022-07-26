import Routes from "../Routes";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
