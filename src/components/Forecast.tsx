import React from 'react';

type ForecastProps = {
  date: string;
  maxTemp: number;
  minTemp: number;
  maxWind: number;
  icon: string;
  conditionText: string;
};

function Forecaste({
  date,
  maxTemp,
  minTemp,
  maxWind,
  icon,
  conditionText,
}: ForecastProps) {
  return (
    <div className="bg-black/25 backdrop-blur p-5 rounded-lg  m-2 ">
      <div className="flex flex-col justify-center items-center mb-2">
        <img src={icon} alt="weather-icon" />
        <p className="text-2xl">{conditionText}</p>
      </div>
      <h2 className="text-3xl font-semibold">{date}</h2>
      <p className="text-2xl">
        max temp:
        <span className="text-gray-300"> {maxTemp}&#176;</span>
      </p>
      <p className="text-2xl">
        min temp:
        <span className="text-gray-300"> {minTemp}&#176;</span>
      </p>
      <p className="text-2xl">
        max wind:
        <span className="text-gray-300"> {maxWind}km/h</span>
      </p>
    </div>
  );
}

export default Forecaste;
