import {BASE_URL} from "../helpers/contstants";

export const getListPersons = () => {
    return fetch(BASE_URL).then(response => response.json())
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