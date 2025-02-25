import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import  StateSlice  from "./Slices/StateSlice";

const CounterStore = configureStore({
    reducer: {Cart: CartSlice, active: StateSlice},
})

export default CounterStore;