import React from 'react';
import Search from './Search';

type PanelProps = {
  cloudy: number;
  wind: number;
  humidity: number;
  setSearchTerm: (term: string) => void;
};

function Panel({ setSearchTerm, cloudy, wind, humidity }: PanelProps) {
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

export default Panel;
