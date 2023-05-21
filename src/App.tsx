import React from 'react';

import useWeather from './hooks/useWeather';

import Panel from './components/Panel';
import Weather from './components/Weather';
import Spinner from './components/Spinner';
import Error from './components/Error';

function App() {
  const { weather, setCity } = useWeather();

  if (weather.isError) return <Error />;

  return (
    <>
      {!weather.isLoading && weather.data && weather.data.current ? (
        <div
          className={`min-h-[100vh] bg-gray-700 relative text-white transition-opacity`}
        >
          <Weather
            city={weather.data.location.name}
            temp={weather.data.current.temp_c}
            condition={weather.data.current.condition.text}
            date={weather.data.location.localtime}
            iconCode={weather.data.current.condition.icon}
            forecast={weather.data.forecast}
          />

          <Panel
            cloudy={weather.data.current.cloud}
            wind={weather.data.current.wind_kph}
            humidity={weather.data.current.humidity}
            setSearchTerm={setCity}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
