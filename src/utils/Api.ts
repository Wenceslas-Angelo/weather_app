const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

export const BASE_WEATHER_URL = `https://api.weatherapi.com/v1`;

export const FORCAST_WEATHER = `${BASE_WEATHER_URL}/forecast.json?key=${WEATHER_API_KEY}&days=5`;

export const BASE_OPENCAGE_URL = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}`;
