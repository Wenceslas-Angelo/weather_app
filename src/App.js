import React from 'react';
import Panel from './components/Panel';
import Weather from './components/Weather';
import cloudyDay from './assets/cloudy-day.jpg';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${cloudyDay})` }}
      className={`min-h-[100vh] bg-cover bg-no-repeat bg-center relative text-white transition-opacity`}
    >
      <Weather />
      <Panel />
    </div>
  );
}

export default App;
