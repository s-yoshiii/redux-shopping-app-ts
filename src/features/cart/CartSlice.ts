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
      state.cartItems = [];
    },
  },
});
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
