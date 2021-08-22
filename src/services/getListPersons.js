import {BASE_URL} from "../helpers/contstants";

export const  getListPersons = () => {
    return fetch(BASE_URL).then(r=>r.json())
}