import "react-app-polyfill/stable";

import "./Configuration";

import ReactDOM from "react-dom";
import React, { lazy as Import, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import { Theme, Content } from "@carbon/react";

/***
 *
 * @param theme: {String("g100" | "g90" | "g10" | "white")}
 *
 */

export const useTheme = (theme = "g100") => {
    const Theme = React.createContext(theme);

    Theme.theme = theme;

    return Theme;
};

const Application = Import(() => import("./Application.js"));
const DOM = () => {
    const theme = useTheme();

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        const Preference = event.matches ? "dark" : "light";

        theme.theme = (
            Preference === "dark"
        ) ? "g100" : "light";
    });

    return (
        <Theme theme={ theme.theme }>
            <Content>
                <Router>
                    <Suspense
                        fallback={ null }
                        children={ (
                            <Application/>
                        ) }
                    />
                </Router>
            </Content>
        </Theme>
    );
};

ReactDOM.render((
    <DOM/>
), document.getElementById("Application"));

(
    process.env.NODE_ENV === "production"
)
    ? import("./Worker.js").then((Module) => Module.register())
    : import("./Worker.js").then((Module) => Module.unregister());
