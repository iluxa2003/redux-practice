import { createSlice, configureStore } from "@reduxjs/toolkit";
const quantityState = { quantity: 5, isQuantityShown: false };

const quantSlice = createSlice({
  name: "quant",
  initialState: quantityState,
  reducers: {
    increment(state) {
      state.quantity = state.quantity + 1;
    },
    decrement(state) {
      state.quantity = state.quantity - 1;
    },
    cardShow(state) {
      state.isQuantityShown = !state.isQuantityShown;
    },
  },
});

const store = configureStore({ reducer: { quant: quantSlice.reducer } });
export const quantActions = quantSlice.actions;
export default store;
