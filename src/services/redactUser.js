import axios from 'axios'

export const redactUser = (id,firstname,secondname) => {
    return axios.put(`http://localhost:3000/persons/${id}`,{
        firstName: firstname,
        lastName : secondname
    })
}