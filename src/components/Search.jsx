import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { GEO_API_URL, GEO_API_OPTIONS } from '../utils/Api';

function Search() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestion] = useState(false);
  const [cities, setCities] = useState([]);
  const initial = useRef(true);

  const fetchCities = () => {
    fetch(`${GEO_API_URL}/cities?namePrefix=${query}`, GEO_API_OPTIONS)
      .then((response) => response.json())
      .then((response) => setCities(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return undefined;
    }
    if (query.length > 2) {
      const timer = setTimeout(() => {
        fetchCities();
        setShowSuggestion(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShowSuggestion(false);
    }
  }, [query]);

  return (
    <form className="my-4">
      <input
        type="text"
        placeholder="Search Location..."
        className="bg-transparent outline-none px-5 py-2 text-[20px] border-b-2 w-full text-white font-semibold placeholder:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {showSuggestions && (
        <ul className="absolute bg-white text-black w-full">
          {cities.map((city) => (
            <li
              key={city.id}
              className="p-2 flex justify-between items-center font-medium text-md cursor-pointer hover:bg-black/10"
              onClick={() => {
                setQuery(city.name);
                setShowSuggestion(false);
              }}
            >
              <span>{city.city}</span>
              <span>{city.country}</span>
            </li>
          ))}
        </ul>
      )}
      <button type="submit" className="absolute top-0 right-0 p-5 bg-[#fa6d1b]">
        <FaSearch fontSize={20} />
      </button>
    </form>
  );
}

export default Search;
