import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import geocoderService from './geocoderService';

interface geocoderState {
  isLoading: boolean;
  isError: boolean;
  userLocation: {
    results: [
      {
        components: {
          city: string;
        };
      }
    ];
  } | null;
}

const initialState: geocoderState = {
  isLoading: false,
  isError: false,
  userLocation: null,
};

type Location = {
  latitude: number;
  longitude: number;
};

export const fetchUserLocation = createAsyncThunk(
  'geocoder/fetch',
  async ({ latitude, longitude }: Location, thunkApi) => {
    try {
      return await geocoderService.fetchCityLocation(latitude, longitude);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const geocoderSlice = createSlice({
  name: 'geocoder',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userLocation = action.payload;
      })
      .addCase(fetchUserLocation.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { resetState } = geocoderSlice.actions;

export default geocoderSlice.reducer;
