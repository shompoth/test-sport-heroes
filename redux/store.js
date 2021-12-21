import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducerData from "./reducers/reducerData";
import reducerStyles from "./reducers/reducerStyles";

const rootReducer = combineReducers({
    data: reducerData,
    styles: reducerStyles,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
