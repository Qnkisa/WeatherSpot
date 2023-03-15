import React, { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!location) {
      setErrorMessage("Please enter a location.");
      setWeatherData(null);
      return;
    }
    const apiKey = "cb698aae9ad4412bb4755635231503";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Invalid location. Please try again.");
      }
      const data = await response.json();
      setWeatherData(data);
      setErrorMessage("");
    } catch (error) {
      setWeatherData(null);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="main-container">
      <h1>Search for location</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p className="error-p">{errorMessage}</p>}
      {weatherData && 
        <div className="location-weather">
          <div className="location-weather-div">
            <h2>{weatherData.location.name}, <span>{weatherData.location.country}</span></h2>
            <p>Localtime: {weatherData.location.localtime}</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <p>Wind(km/h):  {weatherData.current.wind_kph} km/h</p>
          </div>
          <div className="location-weather-split">
            <img src={weatherData.current.condition.icon} alt="" />          
            <p>Temperature: {weatherData.current.temp_c}°C</p>
          </div>
        </div>
      }
    </div>
  );
}
