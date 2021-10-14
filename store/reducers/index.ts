import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import pokemons from "./pokemon";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  pokemons,
});

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  // other store enhancers if any
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
