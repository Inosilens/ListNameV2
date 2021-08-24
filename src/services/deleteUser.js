import axios from "axios"
import {BASE_URL} from "../helpers/contstants";

export const deleteUser = (id) => {
    return axios.delete(BASE_URL + id).then(r => r.data)
        .catch((error) => {
            if (error.response) {
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
}