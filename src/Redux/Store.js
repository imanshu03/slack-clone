import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LoginReducer } from "./Reducer";

const reducers = combineReducers({
    user: LoginReducer
});

export const Store = createStore(reducers, composeWithDevTools());