import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


const App = () => {
  const location = useLocation()

  //const [pageData, setPageData] = useState<pageModel>({})
  
  const getContent = (url: string) => {
    axios.get(`https://localhost:40300/api/ab/v3/content?contentUrl=${encodeURIComponent(url)}&matchExact=true&config=`)
      .then(response => {
        //setPageData(response.data)
      })
  }

  useEffect(() => {
    getContent(location.pathname)
  }, [location])

  return (
    <div className="App">
        <Header />
        <Footer />
    </div>
  );
}

export default App;
