import React, {useEffect, useState} from "react";
import {getListPersons} from "../services/getListPersons";
import {PersonCart} from "./elements/PersonCart";

export const TableBody = ({resolve, setResolve, redactNotification, deleteUserNotification}) => {
    const [list, setList] = useState([]);


    useEffect(() => {
        getListPersons().then((data) => setList(data));
    }, [resolve]);

    if (list) {
        return (
            <>
                <tbody>
                {list.map((person, i) => (
                    <PersonCart
                        setResolve={setResolve}
                        deleteUserNotification={deleteUserNotification}
                        redactNotification={redactNotification}
                        key={person.id}
                        person={person}
                        index={i}
                    />
                ))}
                </tbody>
            </>
        );
    }
};
