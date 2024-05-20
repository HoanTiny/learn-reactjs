import { createSlice } from "@reduxjs/toolkit";

// Create a slice using the createSlice function from Redux Toolkit
const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: 0, // Initial state of the counter
  reducers: {
    // Define the "increase" action
    increase(state) {
      return state + 1; // Increment the state by 1
    },

    // Define the "decrease" action
    decrease(state) {
      return state - 1; // Decrement the state by 1
    },
  },
});

// Extract the actions and reducer from the counterSlice object
const { actions, reducer } = counterSlice;

// Export the increase and decrease actions
export const { increase, decrease } = actions;

// Export the reducer as the default export
export default reducer;
