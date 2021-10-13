import axios, { AxiosRequestConfig } from "axios";

const api = async (config: AxiosRequestConfig<any>): Promise<any> => {
  try {
    const res = await axios(config);
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
