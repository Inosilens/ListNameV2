import axios from "axios";
import {BASE_URL} from "../helpers/contstants";

export const addOnServer = (data) => {
    return axios.post(BASE_URL, data).then((r) => r.data)
        .catch((error) => {
            if (error.response) {
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
};
