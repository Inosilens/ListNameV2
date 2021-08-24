import React, { useState } from "react";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";
import { ModalAddNewUser } from "../components/ModalAddNewUser";
import NotificationSystem from "react-notification-system";

export const Table = () => {
  const [activeNewUser, setActiveNewUser] = useState(false);
    const [resolve,setResolve] = useState(false)
  const notificationSystem = React.createRef();
  const redactNotification = (event) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
      message: "Сотрудник изменен",
      level: "success",
    });
  };
  const addNewUserNotification = (event) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
      message: "Сотрудник добавлен",
      level: "info",
    });
  };

  return (
    <div>
      <table className="resp-tab">
        <TableHead />
        <TableBody resolve={resolve} setResolve={setResolve} redactNotification={redactNotification} />
      </table>
      <ModalAddNewUser
        addNewUserNotification={addNewUserNotification}
        active={activeNewUser}
        setActive={setActiveNewUser}
        setResolve={setResolve}
      />
      <button id="button__add" onClick={() => setActiveNewUser(true)}>
        Добавить{" "}
      </button>
      <NotificationSystem ref={notificationSystem} />
    </div>
  );
};
