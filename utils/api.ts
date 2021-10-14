import axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";

const api = async (config: AxiosRequestConfig<any>): Promise<any> => {
  let url = config.url;

  if (url?.indexOf("http") === -1) {
    url = `${Constants.manifest?.extra?.api}${url}`;
  }

  try {
    const res = await axios({
      ...config,
      url,
    });
    if (!!res && !!res.data) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export default api;
