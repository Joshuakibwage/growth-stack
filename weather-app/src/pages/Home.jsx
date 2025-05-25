import React, { useState } from 'react';
import Search from '../components/Search';
import { fetchWeather } from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';




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
    <main className=" min-h-screen bg-gradient-to-r from-blue-300 to-blue-600 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <Search onSearch={handleSearch}/>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-200">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </main>
  )
}

export default Home
