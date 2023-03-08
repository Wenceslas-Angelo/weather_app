import React from 'react';

function Weather() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start flex-col pl-5 pt-5 pb-20">
      <h2 className="text-5xl font-semibold">The Weather.</h2>

      <div className="flex justify-center items-center">
        <h1 className="mx-5 text-8xl">16&#176;</h1>
        <div>
          <h1 className="mx-5 text-5xl font-bold mb-3">London</h1>
          <small className="text-3xl p-5">
            <span>06:09</span>-<span>Monday Sep 19</span>
          </small>
        </div>
        <div className="flex justify-center items-center mx-5">
          {/* <img src="" alt="icon" width={50} height={50} /> */}
          <span className="text-3xl">Cloudy</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
