import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

function Panel({ setSearchTerm, cloudy, wind, humidity }) {
  const cities = ['New York', 'California', 'Paris', 'Tokyo'];
  return (
    <div className="lg:absolute lg:w-[40%] h-full top-0 right-0 bg-black/25 backdrop-blur">
      <Search setSearchTerm={setSearchTerm} />

      <ul className="my-5 p-5 text-2xl border-b-2 border-gray-100">
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => setSearchTerm(city)}
            className="my-3 cursor-pointer"
          >
            {city}
          </li>
        ))}
      </ul>

      <ul className="my-5 px-5 text-2xl border-b-2 border-gray-100">
        <h3 className="text-center font-semibold text-3xl">Weather Details</h3>
        <li className="my-4 flex justify-between items-center">
          <span>Cloudy</span>
          <span>{cloudy}%</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span>Wind</span>
          <span>{wind}km/h</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span>Humidity</span>
          <span>{humidity}%</span>
        </li>
      </ul>
    </div>
  );
}

Panel.propTypes = {
  setSearchTerm: PropTypes.func,
  cloudy: PropTypes.number,
  wind: PropTypes.number,
  humidity: PropTypes.number,
};

export default Panel;
