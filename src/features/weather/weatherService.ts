import { FORCAST_WEATHER } from '../../utils/Api';

const fetchWeather = async (city: string) => {
  const api = await fetch(`${FORCAST_WEATHER}&q=${city}`);
  const weather = await api.json();
  return weather;
};

const weatherService = { fetchWeather };

export default weatherService;
