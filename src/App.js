import React, { useState } from 'react';
import Panel from './components/Panel';
import Weather from './components/Weather';
import cloudyDay from './assets/cloudy-day.jpg';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(searchTerm);

  return (
    <div
      style={{ backgroundImage: `url(${cloudyDay})` }}
      className={`min-h-[100vh] bg-cover bg-no-repeat bg-center relative text-white transition-opacity`}
    >
      <Weather />
      <Panel setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
