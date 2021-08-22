import axios from "axios";
import {BASE_URL} from "../helpers/contstants";

export const addOnServer = (data) => {
  return axios.post(BASE_URL, data).then((r) => r.data);
};
