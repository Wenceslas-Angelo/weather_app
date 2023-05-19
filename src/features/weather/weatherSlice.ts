import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Weather } from '../../types';
import weatherService from './weatherService';

interface WeatherState {
  isLoading: boolean;
  isError: boolean;
  data: Weather | null;
}

const initialState: WeatherState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async (city: string, thunkApi) => {
    try {
      return await weatherService.fetchWeather(city);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { resetState } = weatherSlice.actions;

export default weatherSlice.reducer;
