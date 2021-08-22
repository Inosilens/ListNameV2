
export const  getListPersons = () => {
    return fetch("http://localhost:3000/persons").then(r=>r.json())
}