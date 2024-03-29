import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/authReducer';
import { useDispatch } from 'react-redux';
import { cartSlice } from './cart/cartReducer';
import { favoritesSlice } from './favorites/favoritesSlice';
import { ordersSlice } from './orders/ordersReducer';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [ordersSlice.name]: ordersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
