import React from "react";
import ReactDOM from "react-dom";
import App from "./client";

console.log("wena");

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept("./client", () => {
        var NextApp = require("./client").default;
        ReactDOM.render(<NextApp />, document.getElementById("app"));
    });
}