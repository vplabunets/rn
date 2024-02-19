import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  productId: any;
  quantity: number;
}
const initialState: Product[] = [];
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      console.log('action.payload)', action.payload);

      if (state.find(product => product.productId === action.payload.productId)) {
        let selectedProductIndex = state.findIndex(product => product.productId === action.payload.productId);
        state[selectedProductIndex].quantity += action.payload.quantity;
      } else {
        console.log(action.payload);

        state.push(action.payload);
      }
      console.log(state);
    },
  },
});

export const { addProduct } = cartSlice.actions;
