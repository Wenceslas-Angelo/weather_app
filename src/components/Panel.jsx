import React from 'react';
import Search from './Search';

function Panel() {
  return (
    <div className="absolute w-[40%] h-full top-0 right-0 bg-black/25 backdrop-blur">
      <Search />

      <ul className="my-5 p-5 text-2xl border-b-2 border-gray-100">
        <li className="my-3">New York</li>
        <li className="my-3">California</li>
        <li className="my-3">Paris</li>
        <li className="my-3">Tokyo</li>
      </ul>

      <ul className="my-5 px-5 text-2xl border-b-2 border-gray-100">
        <h3 className="text-center font-semibold text-3xl">Weather Details</h3>
        <li className="my-4 flex justify-between items-center">
          <span>Cloudy</span>
          <span>89%</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span>Wind</span>
          <span>8km/h</span>
        </li>
        <li className="my-4 flex justify-between items-center">
          <span>Humidity</span>
          <span>64%</span>
        </li>
      </ul>
    </div>
  );
}

export default Panel;
