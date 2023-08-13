import React, { useState, useEffect } from 'react';
import authService from './api-authorization/AuthorizeService';

function FetchData() {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    populateWeatherData();
  }, []);

  async function populateWeatherData() {
    try {
      const token = await authService.getAccessToken();
      const response = await fetch('weatherforecast', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setForecasts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  function renderForecastsTable() {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const contents = loading ? (
    <p><em>Loading...</em></p>
  ) : (
    renderForecastsTable()
  );

  return (
    <div>
      <h1 id="tableLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

export default FetchData;
