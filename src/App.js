import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './about';
import Menu from './menu';

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>We'd love to hear from you!</p>
    </>
  );
}

function Home() {
  return (
    <div>Home</div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>      
      <Menu />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

