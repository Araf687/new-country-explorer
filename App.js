import React, { useState, useEffect } from 'react';
import SplashScreenComponent from './components/SplashScreen/SplashScreenComponent';
import LandingPage from './components/LandingPage/LandingPage';
import axios from 'axios';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryInfo,setCountryInfo]=useState([])

  useEffect(() => {
    // Simulate an asynchronous task (e.g., loading data)
    axios.get("https://restcountries.com/v3.1/all")
    .then((response)=> {
      // setCountryInfo(response.data)
      if(response.status===200){
        const data=response.data;
        // console.log(response.data)
        setCountryInfo(data);
      }
    })
    .catch((error) => console.error(error))
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace with your actual loading logic
  }, []);

  if (isLoading) {
    return <SplashScreenComponent/>
  }

  return <LandingPage data={countryInfo} setData={setCountryInfo}/>
};

export default App;
