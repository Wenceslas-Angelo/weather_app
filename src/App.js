import React, { useEffect, useState } from 'react';
import Panel from './components/Panel';
import Weather from './components/Weather';
import { BASE_URL } from './utils/Api';
import { bgImage, clearCode, cloudyCode, rainyCode } from './constants';
import Spinner from './components/Spinner';
import Error from './components/Error';

function App() {
  const [searchTerm, setSearchTerm] = useState('London');
  const [weather, setWeather] = useState({});
  const [isDay, setIsDay] = useState(1);
  const [conditionCode, setConditionCode] = useState(null);
  const [background, setBackground] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const changeBg = () => {
    if (clearCode(conditionCode)) {
      setBackground(isDay ? bgImage.day.clear : bgImage.night.clear);
    } else if (rainyCode(conditionCode)) {
      setBackground(isDay ? bgImage.day.rain : bgImage.night.rain);
    } else if (cloudyCode(conditionCode)) {
      setBackground(isDay ? bgImage.day.cloud : bgImage.night.cloud);
    } else {
      setBackground(isDay ? bgImage.day.snow : bgImage.night.snow);
    }
  };

  const fetchWeather = async () => {
    try {
      setError(false);
      setLoading(true);
      const api = await fetch(`${BASE_URL}&q=${searchTerm}`);
      const data = await api.json();
      setWeather(data);
      setIsDay(data.current.is_day);
      setConditionCode(data.current.condition.code);
      changeBg();
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, [searchTerm]);

  if (error) return <Error setSearchTerm={setSearchTerm} />;

  return (
    <>
      {!loading && background && weather.current ? (
        <div
          style={{
            backgroundImage: `url(${background})`,
          }}
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
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
