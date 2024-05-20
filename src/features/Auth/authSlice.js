import { createSlice, current } from "@reduxjs/toolkit";

// Create a slice using the createSlice function from Redux Toolkit
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState: {
    current: {},
    settings: {},
  }, // Initial state of the counter
  reducers: {},
});

// Extract the actions and reducer from the userSlice object
const { reducer } = userSlice;

// Export the reducer as the default export
export default reducer;
