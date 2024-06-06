import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload) => {
  const response = await userApi.register(payload);

  //Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, response.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.user));

  return response.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const response = await userApi.login(payload);
  console.log(response);
  //Save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, response.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(response.user));

  return response.user;
});

// Create a slice using the createSlice function from Redux Toolkit
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
    loading: "",
  }, // Initial state of the counter
  reducers: {
    logout(state) {
      // Clear the storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      if (localStorage.getItem(StorageKeys.CART)) {
        localStorage.removeItem(StorageKeys.CART);
      }
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = "idle";
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "idle";
        state.current = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

// Extract the actions and reducer from the userSlice object
const { actions, reducer } = userSlice;

// Export the increase and decrease actions
export const { logout } = actions;

// Export the reducer as the default export
export default reducer;
