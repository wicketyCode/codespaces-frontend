//import axios from 'axios'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-center items-center">
        <div className="mb-24 mt-24">
          <Router />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
