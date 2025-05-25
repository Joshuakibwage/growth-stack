import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className="mt-6 p-6 bg-white text-black rounded-xl shadow-lg w-80 text-center">
      <h2 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h2>
      <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-gray-700">{weather.weather[0].description}</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt="weather icon" 
        className="mx-auto"
      />
      <div className="mt-4 text-sm text-gray-600">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed}m/s</p>
      </div>
    </div>
  )
}

export default WeatherCard
