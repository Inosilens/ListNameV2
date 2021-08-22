import axios from "axios"

export const deleteUser = (id) => {
   return axios.delete(`http://localhost:3000/persons/${id}`).then(r => r.data)
}