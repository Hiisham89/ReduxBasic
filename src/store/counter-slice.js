import { createSlice } from "@reduxjs/toolkit";

const counterinitialState = { counter: 0, showcounter: true , isAuthenticated: false};
const counterslice = createSlice({
  name:'counter',
  initialState:counterinitialState,
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    toggle(state){
      state.showcounter = !state.showcounter;
    },
    authentication(state){
      state.isAuthenticated = !state.isAuthenticated;
    }

  }
});

export const counterActions = counterslice.actions;
export default counterslice.reducer;