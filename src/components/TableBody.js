import React, { useEffect, useState } from "react";
import { getListPersons } from "../services/getListPersons";

export const TableBody = (props) => {
  const [list, setList] = useState([]);



  useEffect(() => {
   getListPersons().then(data=>setList(data))
  }, []);


  if(list){
      return (
          <tbody>
          {list.map((person, i) => (
              <tr key={person.id}>
                  <td >
                      <span>Имя</span> {person.firstName}
                  </td>
                  <td >
                      <span>Фамилия</span>
                      {person.lastName}
                  </td>
                  <td>
                      <i className="fas fa-trash-alt"/>
                      <i

                          className="fas fa-edit"
                      />
                  </td>
              </tr>
          ))}
          </tbody>
      );
  }


};
