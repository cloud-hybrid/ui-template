import * as System from "./Configuration";

import * as Worker from "./Worker";

import "./index.scss";

import React, {
    Profiler,
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import { BrowserRouter as Navigator, HashRouter as Router } from "react-router-dom";

import { default as Application } from "./Application";

const DOM = () => (
    <React.StrictMode>
        <Navigator forceRefresh={true}>
            <Router>
                <Application/>
            </Router>
        </Navigator>
    </React.StrictMode>
);

ReactDOM.render((<DOM/>), document.getElementById("Application"));

( process.env.NODE_ENV === "production" ) ? Worker.register()
    : Worker.unregister();
