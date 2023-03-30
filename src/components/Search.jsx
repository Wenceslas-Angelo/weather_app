import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Search({ setSearchTerm }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      setSearchTerm(query);
    }
  };

  return (
    <form
      className="my-4 flex justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search Location..."
        className="bg-transparent outline-none px-5 py-2 text-[20px] border-b-2 w-full text-white font-semibold placeholder:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="submit"
        className="
        p-5 bg-[#181818]"
      >
        <FaSearch fontSize={20} color="#fff" />
      </button>
    </form>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Search;
