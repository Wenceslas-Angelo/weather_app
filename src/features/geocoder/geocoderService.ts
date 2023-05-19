import { BASE_OPENCAGE_URL } from '../../utils/Api';

const fetchCityLocation = async (latitude: number, longitude: number) => {
  const api = await fetch(`${BASE_OPENCAGE_URL}&q=${latitude}+${longitude}`);
  const location = await api.json();
  return location;
};

const geocoderService = { fetchCityLocation };

export default geocoderService;
