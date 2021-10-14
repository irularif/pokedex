import api from "../../utils/api";

const getList = async (limit: number, offset: number) => {
  const res = await api({
    method: "GET",
    url: `pokemon?limit=${limit}&offset=${offset}`,
  });

  if (Array.isArray(res.results)) {
    for (let value of res.results) {
      let url = value.url;
      const detail = await getDetail(url);
      Object.assign(value, detail);
    }
    return res.results;
  }
  return [];
};

const getDetail = async (url: string) => {
  const res = await api({
    method: "GET",
    url,
  });
  if (!!res?.id) {
    return res;
  }
  return {};
};

const getCharacter = async (id: number) => {
  const res = await api({
    method: "GET",
    url: `characteristic/${id}/`,
  });

  if (!!res?.id) {
    return res;
  }
  return {};
};

export default {
  getList,
  getCharacter,
};
