import React from "react";
import {useState} from "react";
import {redactUser} from "../services/redactUser";
import { redactNotification} from "../notifications";

export const RedactionWindow = ({   firstName,
                                    lastName,
                                    setResolve,
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
                            maxLength="10"
                            defaultValue={firstName}
                            onChange={getName}
                            placeholder="Введите имя сотрудника"
                        />
                        <input
                            maxLength="10"
                            onChange={getSecondName}
                            defaultValue={lastName}
                            placeholder="Введите фамилию сотрудника"
                        />
                    </form>
                    <div className="modal__content_button">
                        <button
                            onClick={(e) => {
                                redactNotification(e);
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
