import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ErrorHandler } from "./reusable-components/error";
import * as serviceWorker from "./serviceWorker";


const rootId = document.getElementById("root");

ReactDOM.render(
        <ErrorHandler>
            <App />
        </ErrorHandler>,
    rootId
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
