import React from 'react';
import PropTypes from 'prop-types';

function Weather({ city, temp, condition, date, iconCode }) {
  const dayOfTheWeek = () => {
    const y = parseInt(date.substr(0, 4));
    const m = parseInt(date.substr(5, 2));
    const d = parseInt(date.substr(8, 2));
    const weekDay = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return weekDay[new Date(`${m}/${d}/${y}`).getDay()];
  };

  return (
    <div className="lg:absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col pl-5 pt-5 pb-20">
      <h2 className="text-3xl font-semibold">The Weather.</h2>

      <div className="flex justify-center items-center">
        <h1 className=" text-8xl">{temp}&#176;</h1>
        <div className="mx-10 flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mb-3">{city}</h1>
          <small className="text-2xl">{`${dayOfTheWeek()} ${date}`}</small>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={iconCode} alt="icon" width={50} height={50} />
          <span className="text-3xl">{condition}</span>
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  condition: PropTypes.string,
  date: PropTypes.string,
  iconCode: PropTypes.string,
};

export default Weather;
