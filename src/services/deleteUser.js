import axios from "axios"
import {BASE_URL} from "../helpers/contstants";

export const deleteUser = (id) => {
   return axios.delete(BASE_URL+id).then(r => r.data)
}