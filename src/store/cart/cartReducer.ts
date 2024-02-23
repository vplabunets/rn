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
      if (state.find(product => product.productId === action.payload.productId)) {
        let selectedProductIndex = state.findIndex(product => product.productId === action.payload.productId);
        state[selectedProductIndex].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      if (state.find(product => product.productId === action.payload.productId)) {
        let selectedProductIndex = state.findIndex(product => product.productId === action.payload.productId);
        if (state[selectedProductIndex].quantity !== 0) {
          state[selectedProductIndex].quantity -= action.payload.quantity;
        } else {
          return state.filter(product => product.productId !== action.payload.productId);
        }
      }
    },
    removeProductCompletely: (state, action: PayloadAction<Product>) => {
      return state.filter(product => product.productId !== action.payload.productId);
    },
    cleanCart: state => (state = initialState),
  },
});

export const { addProduct, removeProductCompletely, removeProduct, cleanCart } = cartSlice.actions;
