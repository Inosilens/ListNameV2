import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteUser } from "../../services/deleteUser";
import { RedactionWindow } from "../RedactPersonModal";
export const PersonCart = ({ setResolve, person, redactNotification }) => {
  const [activeRedact, setActiveRedact] = useState(false);
  const removeUser = (id) => {
    deleteUser(id).then(()=>setResolve(false));
  };

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
          <FontAwesomeIcon
            onClick={() => setActiveRedact(true)}
            icon={faEdit}
          />
          <FontAwesomeIcon
            onClick={() => {
                setResolve(true)
              removeUser(person.id)

            }}
            icon={faTrash}
          />
        </td>
      </tr>
      <RedactionWindow
        addNotification={redactNotification}
        id={person.id}
        setResolve={setResolve}
        activeRedact={activeRedact}
        setActiveRedact={setActiveRedact}
      />
    </>
  );
};
