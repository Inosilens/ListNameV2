import React, { useEffect, useState } from "react";
import { getListPersons } from "../services/getListPersons";
import { PersonCart } from "./elements/PersonCart";

export const TableBody = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getListPersons().then((data) => setList(data));
  }, [list]);

  if (list) {
    return (
      <>
        <tbody>
          {list.map((person, i) => (
            <PersonCart key={person.id} person={person} index={i} />
          ))}
        </tbody>
      </>
    );
  }
};
