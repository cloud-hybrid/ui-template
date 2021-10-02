import * as System from "./Configuration";

import "./index.scss";

import React, {
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

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

const DOM = () => {
    console.debug(System);

    return (
        <React.StrictMode>
            <Navigator forceRefresh={ false }>
                <Router>
                    <Menu/>
                    <Suspense fallback={ (<Skeleton Loader={ false } />) }>
                        <Application />
                    </Suspense>
                </Router>
            </Navigator>
        </React.StrictMode>
    );
};

ReactDOM.render((<DOM />), document
    .getElementById("Application")
);

/// ... import("./Service-Worker.js").then((Module) => {
/// ...     Module.unregister();
/// ... });
