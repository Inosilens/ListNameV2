import React from "react";

export const notificationSystem = React.createRef();

export const redactNotification = (event) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
        message: "Сотрудник изменен",
        level: "success",
    });
};
export const addNewUserNotification = (event) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
        message: "Сотрудник добавлен",
        level: "info",
    });
};

export const removeNotification = (event) => {
    event.preventDefault();
    const notification = notificationSystem.current;
    notification.addNotification({
        message: "Сотрудник удален",
        level: "error",
    });
};