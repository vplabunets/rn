import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductItem {
  id: any;
  quantity: number;
}

interface Order {
  user: string;
  id: string;
  products: ProductItem[];
}
const initialState: Order[] = [];

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
