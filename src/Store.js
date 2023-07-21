import { createStore } from "redux";
// import { cartreducer } from "./redux/reducers/reducers";
// import createRootReducer from "./redux/reducers/main";
import reducers from "./redux/reducers/main";

const Store = createStore(reducers);

export default Store;
