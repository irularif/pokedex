import { UPDATE_DETAIL, UPDATE_LIST } from "../constants/ActionTypes";

const initialState = {
  limit: 20,
  page: 0,
  items: [] as any[],
  detail: {} as any,
};

const pokemons = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_LIST:
      state.page = action.page;
      state.items = action.items;
      return { ...state };

    case UPDATE_DETAIL:
      const detail = state.items.find((pokemon) => pokemon.id === action.id);
      state.detail = detail || {};
      return { ...state };

    default:
      return state;
  }
};

export default pokemons;
