import React from "react";
import { Provider } from "react-redux";
import store from "./store/reducers";
import PokemonApp from "./ui";

export default function App() {
  return (
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  );
}
