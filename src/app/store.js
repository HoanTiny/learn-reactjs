import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
import cartReducer from "../features/Cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

console.log(rootReducer);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
