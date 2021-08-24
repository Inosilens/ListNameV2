import React from "react";
import {useState} from "react";
import {redactUser} from "../services/redactUser";

export const RedactionWindow = ({
                                    setResolve,
                                    addNotification,
                                    activeRedact,
                                    setActiveRedact,
                                    id,
                                }) => {
    const [changeFirstName, setChangeFirstName] = useState("");
    const [changeSecondName, setChangeSecondName] = useState("");
    const changeActive = () => {
        setChangeFirstName("");
        setChangeSecondName("");
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
                            onClick={(e) => {
                                addNotification(e);
                                changeActive();
                                setResolve(true)
                                redactUser(id, changeFirstName, changeSecondName).then(()=>setResolve(false))

                            }}
                            type="submit"
                        >
                            Изменить сотрудника
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
