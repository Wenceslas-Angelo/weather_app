import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchWeather } from '../features/weather/weatherSlice';
import { fetchUserLocation } from '../features/geocoder/geocoderSlice';

const useWeather = () => {
  const [city, setCity] = useState('London');
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);
  const { userLocation } = useAppSelector((state) => state.userLocation);

  useEffect(() => {
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

    console.log(city);
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  return { city, weather, setCity };
};

export default useWeather;
