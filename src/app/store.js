import counterReducer from "../features/Counter/counterSlice";
import userREducer from "../features/Auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  counter: counterReducer,
  user: userREducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
