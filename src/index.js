import * as System from "./Configuration";
import * as Worker from "./Worker";

import "./index.scss";

import React, {
    Profiler,
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import { default as Vitals } from "./Vitals";

import { default as Skeleton } from "./Page-Loader";

import { default as Menu } from "./components/Menu/Index";

import {
    BrowserRouter as Navigator,
    HashRouter as Router
} from "react-router-dom";

const Application = Import(() => {
    return import("./Application").then(
        (SPA) => SPA
    );
});

const DOM = () => (
    <React.StrictMode>
        <Profiler id={"Navigation"} onRender={ Vitals }>
            <Navigator forceRefresh={ false }>
                <Router>
                    <Menu/>
                    <Suspense fallback={ (<Skeleton Loader={ false } />) }>
                        <Application />
                    </Suspense>
                </Router>
            </Navigator>
        </Profiler>
    </React.StrictMode>
);

ReactDOM.render((<DOM/>), document.getElementById("Application"));

( process.env.NODE_ENV === "production" ) ? Worker.register()
    : Worker.unregister();
