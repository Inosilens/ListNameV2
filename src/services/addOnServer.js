import axios from "axios";

export const addOnServer = (data) => {
  return axios.post("http://localhost:3000/persons", data).then((r) => r.data);
};
