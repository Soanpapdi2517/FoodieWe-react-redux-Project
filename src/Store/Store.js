import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

const CounterStore = configureStore({
    reducer: {Cart: CartSlice}
})

export default CounterStore;