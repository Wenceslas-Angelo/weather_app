import React, { useEffect, useState } from 'react';
import Panel from './components/Panel';
import Weather from './components/Weather';
import cloudy from './assets/day/cloudy.jpg';
import { BASE_URL } from './utils/Api';

function App() {
  const [searchTerm, setSearchTerm] = useState('London');
  const [weather, setWeather] = useState({});

  const fetchWeather = async () => {
    const api = await fetch(`${BASE_URL}&q=${searchTerm}`);
    const data = await api.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [searchTerm]);

  return (
    <>
      {weather.current && (
        <div
          style={{ backgroundImage: `url(${cloudy})` }}
          className={`min-h-[100vh] bg-cover bg-no-repeat bg-center relative text-white transition-opacity`}
        >
          <Weather
            city={weather.location.name}
            temp={weather.current.temp_c}
            condition={weather.current.condition.text}
            date={weather.location.localtime}
            iconCode={weather.current.condition.icon}
          />

          <Panel
            setSearchTerm={setSearchTerm}
            cloudy={weather.current.cloud}
            wind={weather.current.wind_kph}
            humidity={weather.current.humidity}
          />
        </div>
      )}
    </>
  );
}

export default App;
