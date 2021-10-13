import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./store/reducers";
import PokemonApp from "./ui";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  );
}
