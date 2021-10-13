import { combineReducers } from "redux";
import pokemons from "./pokemon";

const rootReducer = combineReducers({
  pokemons,
});

export default rootReducer;
