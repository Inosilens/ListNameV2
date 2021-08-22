import React, { useState } from "react";
import { addOnServer } from "../services/addOnServer";

export const ModalAddNewUser = ({ active, setActive }) => {
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const DATA = {
    firstName: firstName,
    lastName: secondName,
  };

  const changeActive = () => {
    setFirstName("");
    setSecondName("");
    setActive(!active);
  };

  const getName = (e) => {
    setFirstName(e.target.value);
    e.preventDefault();
  };
  const getSecondName = (e) => {
    setSecondName(e.target.value);
    e.preventDefault();
  };

  return (
    <div onClick={changeActive} className={active ? "modal active" : "modal"}>
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <div className="modal__content__tittle">
          <h3> Создание сотрудника </h3>
        </div>
        <form className="modal__content__input">
          <input
            onChange={getName}
            value={firstName}
            placeholder="Введите имя сотрудника"
          />
          <input
            onChange={getSecondName}
            value={secondName}
            placeholder="Введите фамилию сотрудника"
          />
        </form>
        <div className="modal__content_button">
          <button
            onClick={() => {
              changeActive();
              addOnServer(DATA);
            }}
            disabled={!firstName || !secondName}
            type="button"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
