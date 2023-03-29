//night bg
import night_clear from '../assets/night/clear.jpg';
import night_cloud from '../assets/night/cloud.jpg';
import night_rain from '../assets/night/rain.jpg';
import night_snow from '../assets/night/snow.jpg';

//day bg
import day_clear from '../assets/day/clear.jpg';
import day_cloud from '../assets/day/cloud.jpg';
import day_rain from '../assets/day/rain.jpg';
import day_snow from '../assets/day/snow.jpg';

export const clearCode = (code) => code === 1000;

export const cloudyCode = (code) =>
  code === 1003 ||
  code === 1006 ||
  code === 1009 ||
  code === 1030 ||
  code === 1069 ||
  code === 1087 ||
  code === 1135 ||
  code === 1273 ||
  code === 1276 ||
  code === 1279 ||
  code === 1282;

export const rainyCode = (code) =>
  code === 1063 ||
  code === 1069 ||
  code === 1072 ||
  code === 1150 ||
  code === 1153 ||
  code === 1180 ||
  code === 1183 ||
  code === 1186 ||
  code === 1189 ||
  code === 1192 ||
  code === 1195 ||
  code === 1204 ||
  code === 1207 ||
  code === 1240 ||
  code === 1243 ||
  code === 1246 ||
  code === 1249 ||
  code === 1252;

export const bgImage = {
  night: {
    clear: night_clear,
    cloud: night_cloud,
    rain: night_rain,
    snow: night_snow,
  },
  day: {
    clear: day_clear,
    cloud: day_cloud,
    rain: day_rain,
    snow: day_snow,
  },
};
