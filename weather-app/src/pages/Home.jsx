import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchWeather } from '../services/weatherService';




const Home = () => {


  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }finally {
      setLoading(false)
    }
  }


  return (
    <main className=" min-h-screen bg-black">
      <Navbar onSearch={handleSearch}/>
    </main>
  )
}

export default Home
