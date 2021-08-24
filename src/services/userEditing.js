import axios from 'axios'
import {BASE_URL} from "../helpers/contstants";

export const userEditing = (id, firstname, secondName) => {
    return axios.put(BASE_URL + id, {
        firstName: firstname,
        lastName: secondName
    })
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