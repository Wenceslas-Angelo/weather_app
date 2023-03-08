import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [query, setQuery] = useState('');
  return (
    <form className="my-4">
      <input
        type="text"
        placeholder="search location..."
        className="bg-transparent outline-none px-5 py-2 text-[20px] border-b-2 w-full text-white font-semibold placeholder:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="absolute top-0 right-0 p-5 bg-[#fa6d1b]">
        <FaSearch fontSize={20} />
      </button>
    </form>
  );
}

export default Search;
