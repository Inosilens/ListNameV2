import React, { useEffect, useState } from "react";
import { getListPersons } from "../services/getListPersons";
import "font-awesome/css/font-awesome.min.css";
import {PersonCart} from "./elements/PersonCart";


export const TableBody = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getListPersons().then((data) => setList(data));
  }, []);

  if (list) {
    return (
      <tbody>
        {list.map((person, i) => (
          <PersonCart key={person.id} person={person} index={i} />
        ))}
      </tbody>
    );
  }
};
