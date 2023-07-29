import { createSlice } from "@reduxjs/toolkit";

const initialState = {isAuthenticated: false};

const authenticationslice = createSlice({
  name:'authenication',
  initialState,
  reducers:{
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    }

  }
});
export const authenticationActions = authenticationslice.actions;
export default authenticationslice.reducer;