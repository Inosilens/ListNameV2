import React, {useState} from "react";
import {TableHead} from "../components/TableHead";
import {TableBody} from "../components/TableBody";
import {ModalAddNewUser} from "../components/ModalAddNewUser";
import NotificationSystem from "react-notification-system";
import {notificationSystem} from "../notifications";


export const Table = () => {
    const [activeNewUser, setActiveNewUser] = useState(false);
    const [resolve, setResolve] = useState(false)



    return (
        <div>
            <table className="resp-tab">
                <TableHead/>
                <TableBody resolve={resolve} setResolve={setResolve}/>
            </table>
            <ModalAddNewUser
                active={activeNewUser}
                setActive={setActiveNewUser}
                setResolve={setResolve}
            />
            <button id="button__add" onClick={() => setActiveNewUser(true)}>
                Добавить{" "}
            </button>
            <NotificationSystem ref={notificationSystem}/>
        </div>
    );
};
