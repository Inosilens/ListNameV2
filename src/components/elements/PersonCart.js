import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {deleteUser} from "../../services/deleteUser";
import {redactUser} from "../../services/redactUser";
import RedactionWindow from "../RedactPersonModal";


export const PersonCart = ({ person, index }) => {
    const [activeRedact, setActiveRedact] = useState(false);
    const removeUser = (id)=>{
        deleteUser(id)
    }
    const putUser = ( )=> redactUser()
  return (
<>
    <tr key={person.id}>
      <td>
        <span>Имя</span> {person.firstName}
      </td>
      <td>
        <span>Фамилия</span>
        {person.lastName}
      </td>
      <td>
        <FontAwesomeIcon onClick={()=>setActiveRedact(true)} icon={faEdit} />
        <FontAwesomeIcon onClick={()=>removeUser(person.id)} icon={faTrash} />
      </td>
    </tr>
    <RedactionWindow
        id = {person.id}
        activeRedact={activeRedact}
        setActiveRedact={setActiveRedact}
    />
</>
  );
};
