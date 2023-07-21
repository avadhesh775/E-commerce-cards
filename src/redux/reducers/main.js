import { combineReducers } from "redux";
import { cartReducer } from "./reducers";
// import {connectRouter}

const reducers = combineReducers({
  cartReducer,
});
export default reducers;

// const createRootReducer = (history) =>
//   combineReducers({
//     router: connectRouter(history),
//     createUser: cartreducer,
//   });

// export default createRootReducer;
