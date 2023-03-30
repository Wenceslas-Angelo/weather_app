import React from 'react';
import errorImg from '../assets/danger.png';
import PropTypes from 'prop-types';
import Search from './Search';
import bgError from '../assets/bgError.jpg';

const Error = ({ setSearchTerm }) => {
  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${bgError})` }}
    >
      <div className="flex justify-center items-center flex-col p-5 rounded-xl shadow-2xl shadow-black/50 bg-[#181818]/80 mx-2">
        <img src={errorImg} alt="weather-error-image" className="w-60" />
        <h2 className="text-3xl font-semibold py-2 text-center text-red-600">
          Something went wrong!
        </h2>
        <Search setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};

Error.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Error;
