import React, { useState, useEffect } from 'react';
import SplashScreenComponent from './components/SplashScreen/SplashScreenComponent';
import LandingPage from './components/LandingPage/LandingPage';
import axios from 'axios';
// import MapView from 'react-native-maps';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryInfo, setCountryInfo] = useState([])
  const [tempInfo, setTempInfo] = useState([]);

  const handleClickSearch = (searchText) => {
    if(searchText!==""){
      const tempData=tempInfo.filter(item=>item.name.official===searchText)
      setTempInfo(tempData)
    }
  }
  const resetData=()=>{
    setTempInfo(countryInfo);
  }

  useEffect(() => {
    // Simulate an asynchronous task (e.g., loading data)
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        // setCountryInfo(response.data)
        if (response.status === 200) {
          const data = response.data;
          // console.log(response.data)
          setCountryInfo(data);
          setTempInfo(data);
        }
      })
      .catch((error) =>{
        console.error("error:",error)
      })

    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace with your actual loading logic
  }, []);

  if (isLoading) {
    return <SplashScreenComponent />
  }

  return <LandingPage data={tempInfo} resetData={resetData} search={handleClickSearch} />
};

export default App;
