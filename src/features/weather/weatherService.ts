import { BASE_WEATHER_URL } from '../../utils/Api';

const fetchWeather = async (city: string) => {
  const api = await fetch(`${BASE_WEATHER_URL}&q=${city}`);
  const weather = await api.json();
  return weather;
};

const weatherService = { fetchWeather };

export default weatherService;
