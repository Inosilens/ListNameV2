import React from "react";
import { useState } from "react";
import { redactUser } from "../services/redactUser";

export default function RedactionWindow({ activeRedact, setActiveRedact, id }) {
  const [changeFirstName, setChangeFirstName] = useState("");
  const [changeSecondName, setChangeSecondName] = useState("");
  const changeActive = () => {
    setActiveRedact(!activeRedact);
  };
  const getName = (e) => setChangeFirstName(e.target.value);
  const getSecondName = (e) => setChangeSecondName(e.target.value);



  return (
    <>
      <div
        onClick={changeActive}
        className={!activeRedact ? "modal" : "modal active"}
      >
        <div onClick={(e) => e.stopPropagation()} className="modal__content">
          <div className="modal__content__tittle">
            <h3> Изменение </h3>
          </div>

          <a href="" onClick={changeActive}>
            Назад к списку
          </a>
          <form className="modal__content__input">
            <input
              onChange={getName}
              value={changeFirstName}
              placeholder="Введите имя сотрудника"
            />
            <input
              onChange={getSecondName}
              value={changeSecondName}
              placeholder="Введите фамилию сотрудника"
            />
          </form>
          <div className="modal__content_button">
            <button
              disabled={!changeFirstName || !changeSecondName}
              onClick={() => redactUser(id, changeFirstName, changeSecondName)}
              type="submit"
            >
              Изменить сотрудника
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
