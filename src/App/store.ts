import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import geocoderReducer from '../features/geocoder/geocoderSlice';

export const store = configureStore({
  reducer: { weather: weatherReducer, userLocation: geocoderReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
