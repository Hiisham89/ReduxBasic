import {configureStore} from "@reduxjs/toolkit"
import counterslice from "./counter-slice";
import authenticationslice from "./authen-slice";



// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showcounter: state.showcounter };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1,       showcounter: state.showcounter };
    


//   }

//   if (action.type === "toggle") {
//     return { counter: state.counter, showcounter: !state.showcounter };
//   }
//   return state;
// };


const store = configureStore({
  reducer:{counter : counterslice, authentication: authenticationslice}

});


export default store;
