import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
interface CartItemState {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}
interface CartState {
  cartItem: CartItemState[];
  amount: number;
  total: number;
}

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
