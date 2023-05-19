import React from 'react';

type WeatherProps = {
  city: string;
  temp: number;
  condition: string;
  date: string;
  iconCode: string;
};

function Weather({ city, temp, condition, date, iconCode }: WeatherProps) {
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
    <div className="lg:w-[60%]">
      <h2 className="text-3xl font-semibold">The Weather.</h2>

      <div className="bg-black/25 backdrop-blur p-5 my-5 w-[90%] mx-auto text-center sm:flex items-center justify-between rounded-lg">
        <h1 className=" text-8xl">{temp}&#176;</h1>
        <div className="">
          <h1 className="text-5xl font-bold">{city}</h1>
          <small className="text-2xl mt-5">{`${dayOfTheWeek()} ${date}`}</small>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={iconCode} alt="icon" width={50} height={50} />
          <span className="text-2xl text-center">{condition}</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
