import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchWeather } from '../features/weather/weatherSlice';
import { fetchUserLocation } from '../features/geocoder/geocoderSlice';

import { clearCode, rainyCode, cloudyCode } from '../constants';

const useWeather = () => {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);
  const { userLocation } = useAppSelector((state) => state.userLocation);

  if (city.length === 0) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          dispatch(fetchUserLocation({ latitude, longitude }));
          userLocation && setCity(userLocation.results[0].components.city);
        },
        (error) => {
          setCity('London');
          console.error(error.message);
        }
      );
    } else {
      setCity('London');
    }
  }

  useEffect(() => {
    console.log(city);
    city && dispatch(fetchWeather(city));
  }, [city, dispatch]);

  console.log(city);

  const conditionCode = weather.data?.current.condition.code;
  const dayValue = weather.data?.current.is_day ? 'day' : 'night';
  let weatherBgClassName = '';

  if (conditionCode) {
    if (clearCode(conditionCode)) {
      weatherBgClassName = `clear-${dayValue}`;
    } else if (cloudyCode(conditionCode)) {
      weatherBgClassName = `cloudy-${dayValue}`;
    } else if (rainyCode(conditionCode)) {
      weatherBgClassName = `rainy-${dayValue}`;
    } else {
      weatherBgClassName = `snowy-${dayValue}`;
    }
  }
  return { city, weather, setCity, weatherBgClassName };
};

export default useWeather;
