import axios from "axios";

const apiUrl = `/api/v1`;

const getCall = async (url: string) => {
  const response = await axios.get(apiUrl + url);
  return response;
};

const postCall = async (url: string, data: any) => {
  const res = await axios.post(apiUrl + url, data);
  return res;
};

const patchCall = async (url: string, data: any) => {
  const res = await axios.patch(apiUrl + url, data);
  return res;
};

const deleteCall = async (url: string) => {
  const res = await axios.delete(apiUrl + url);
  return res;
};

export { getCall, postCall, patchCall, deleteCall };
