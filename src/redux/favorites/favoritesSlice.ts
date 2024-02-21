import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as number[],
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      return state.filter(item => item !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
