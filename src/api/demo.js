// import { get, post } from "./request";
import { get } from './request'

export const getList = params => {
  return get('/Advertorial/GetList', params)
}

// export const postList = (params) => {
//   return post("/Advertorial/GetList", params);
// };
