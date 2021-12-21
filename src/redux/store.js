import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import houseReducers from "./reducers/houseReducers";
import alertReducer from "../redux/reducers/alertReducer";

const rootReducer = combineReducers({
    houses: houseReducers,
    alertMsg: alertReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
