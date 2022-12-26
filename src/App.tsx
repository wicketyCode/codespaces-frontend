//import axios from 'axios'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Router from './router';


const App = () => {

  return (
    <div className="App">
        <Header />
        <Router />
        <Footer />
    </div>
  );
}

export default App;
