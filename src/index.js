import "react-app-polyfill/ie9"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import 'raf/polyfill';
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
