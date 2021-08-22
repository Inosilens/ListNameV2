import React, { useState } from "react";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";
import { ModalAddNewUser } from "../components/ModalAddNewUser";


export const Table = () => {
  const [activeNewUser, setActiveNewUser] = useState(false);


  return (
    <div>
      <table className="resp-tab">
        <TableHead />
        <TableBody  />
      </table>
      <ModalAddNewUser active={activeNewUser} setActive={setActiveNewUser} />
      <button id="button__add" onClick={() => setActiveNewUser(true)}>
        Добавить{" "}
      </button>
    </div>
  );
};
