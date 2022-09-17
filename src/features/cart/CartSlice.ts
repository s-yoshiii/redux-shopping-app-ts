import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import cartItems from "../../cartItems";
interface CartItemState {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}
interface CartState {
  cartItems: CartItemState[];
  amount: number;
  total: number;
}

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId: number = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem?.amount === undefined) {
        return;
      }
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem?.amount === undefined) {
        return;
      }
      cartItem.amount = cartItem.amount - 1;
    },
  },
});
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
