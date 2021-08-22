import axios from 'axios'
import {BASE_URL} from "../helpers/contstants";

export const redactUser = (id,firstname,secondname) => {
    return axios.put(BASE_URL+id,{
        firstName: firstname,
        lastName : secondname
    })
}