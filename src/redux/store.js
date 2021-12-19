import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import houseReducers from "./reducers/houseReducers";

const rootReducer = combineReducers({
    houses: houseReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
