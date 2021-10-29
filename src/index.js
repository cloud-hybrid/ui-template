import * as System from "./Configuration";

/// import * as Worker from "./Worker";

import "./index.scss";

import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter as Navigator } from "react-router-dom";

import { default as Application } from "./Application";

const DOM = () => (
    <React.StrictMode>
        <Navigator>
            <Application/>
        </Navigator>
    </React.StrictMode>
);

ReactDOM.render((
    <DOM/>
), document.getElementById("Application"));

/// ( process.env.NODE_ENV === "production" ) ? Worker.register()
///     : Worker.unregister();
