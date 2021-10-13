import * as types from "../constants/ActionTypes";

export const setList = (items: any[], page: number) => ({
  type: types.UPDATE_LIST,
  items,
  page,
});
export const setDetail = (id: any) => ({ type: types.UPDATE_DETAIL, id });
