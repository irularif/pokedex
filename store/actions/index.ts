import pokemonApi from "../api/pokemonApi";
import * as types from "../constants/ActionTypes";

export const setList = (items: any[], page: number) => ({
  type: types.UPDATE_LIST,
  items,
  page,
});
export const pushList = (items: any[], page: number) => ({
  type: types.UPDATE_LIST,
  items,
  page,
});
export const setDetail = (id: any) => ({ type: types.UPDATE_DETAIL, id });
export const getList = (page: any, limit: any) => async (dispatch: any) => {
  let npage = page + 1;
  let offset = npage * limit;
  const newItems = await pokemonApi.getList(limit, offset);
  dispatch(pushList(newItems, npage));
};
