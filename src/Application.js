import "./Application.scss";

import React, { lazy as Import, Suspense, useEffect, useState } from "react";

import { Column, Content, Grid, Theme } from "@carbon/react";

import { Redirect, Route, Switch, useLocation } from "react-router-dom";

/// import { Routes, Route, Outlet, Link, Redirect } from "react-router-dom";

import { default as Menu } from "./components/Menu/Index";

import { default as BTT } from "./components/Back-To-Top/Index";

import { default as Breadcrumbs } from "./components/Breadcrumb";

import { default as Pages } from "./pages";

/***
 * Authentication Hook
 */
import * as Authentication from "./components/Authenticate";

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

const Redirection = ({ Target }) => {
    return (
        <Redirect
            to={ {
                pathname: "/login",
                state: {
                    to: Target,
                    from: Target,
                    pathname: Target
                }
            } }
        />
    );
};

const Target = (Location) => {
    console.debug("[Debug]", "Path Target", {
        Target: Location?.state?.pathname,
        Fallback: "/"
    });

    return (
        Location?.state?.pathname
    ) ? Location?.state?.pathname : "/";
};

const Home = Import(() => import("./pages/Home").then((Module) => Module));
const GitHub = Import(() => import("./pages/GitHub").then((Module) => Module));
const GitLab = Import(() => import("./pages/GitLab").then((Module) => Module));
const Pipelines = Import(() => import("./pages/Pipelines").then((Module) => Module));
const Template = Import(() => import("./pages/Template").then((Module) => Module));

const Authoritative = ({ Page, $, path, transition }) => {
    useEffect(() => {
        const Handler = Authentication.Cancellation.source();
        const Response = async () => {
            const Session = await Authentication.Token(Handler);

            console.debug("Authentication Response", Session);

            (
                Session === null
            ) ? $[1](false)
                : (
                    Session?.Status?.Code === 200
                )
                    ? $[1](true) : $[1](false);
        };

        Response().finally();
    }, []);

    return (
        <Route path={ path } sensitive={ false }>
            {
                (
                    $[0] === null
                )
                    ? (
                        <></>
                    )
                    : (
                        $[0] === true
                    )
                        ? (
                            <Page description={ transition }/>
                        )
                        : (
                            <Redirection Target={ path }/>
                        )
            }
        </Route>
    );
};

const Application = () => {
    const theme = useTheme("g100");

    const location = useLocation();

    const Authorization = useState(null);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        const Preference = event.matches ? "dark" : "light";

        theme.theme = (
            Preference === "dark"
        ) ? "g100" : "light";
    });

    useEffect(() => {
        const Token = async () => {
            const $ = await Authentication.JWT();

            return (
                $ !== null
            );
        };

        const Validate = async () => {
            const Handler = Authentication.Cancellation.source();

            const Response = async () => {
                try {
                    const $ = await Authentication.Token(Handler);

                    console.debug("Authentication Response", $);

                    (
                        $.Status.Code === 200
                    ) ? Authorization[1](true)
                        : Authorization[1](false);

                    return true;
                } catch ( e ) {
                    console.warn("[Warning]", "Unhandled Error");

                    return false;
                }
            };
            return await Response();
        };

        Token().then(($) => {
            (
                $ === true
            ) ? Validate() : Authorization[1](false);
        });
    }, []);

    const Component = () => (
        <Theme theme={ theme.theme }>
            <Menu Location={ location.pathname } Authorizer={ Authorization }/>

            <Content
                children={ (
                    <Grid>
                        <Column lg={ 16 } md={ 8 } sm={ 4 }>
                            <Suspense
                                fallback={ (
                                    <></>
                                ) }
                            >
                                <Breadcrumbs Title={ location.pathname } duration={ 1250 }/>
                                <Switch
                                    children={ null } location={ location }
                                >
                                    {/* Base Endpoint(s) */ }

                                    <Route exact path={ "/" }>
                                        <Home/>
                                    </Route>

                                    <Route path={ "/login" } sensitive={ false }>
                                        {
                                            (
                                                Authorization[0] === true
                                            ) ? (
                                                    <Redirect to={ Target(location) }/>
                                                )
                                                : (
                                                    Authorization[0] === null
                                                ) ? null : (
                                                    <Pages.Login
                                                        Authorizer={ Authorization }
                                                        description={ "Registering Secure Context ..." }
                                                    />
                                                )
                                        }
                                    </Route>

                                    {/* Authorization-Only Endpoint(s) */ }

                                    <Authoritative $={ Authorization } Page={ GitLab } path={ "/gitlab" } transition={ "Loading VCS Project(s) ..." }/>
                                    <Authoritative $={ Authorization } Page={ GitHub } path={ "/github" } transition={ "Loading Organization ..." }/>
                                    <Authoritative $={ Authorization } Page={ Pipelines } path={ "/pipelines" } transition={ "Loading CI-CD Pipelines ..." }/>

                                    <Authoritative $={ Authorization } Page={ Template } path={ "/template" } transition={ "Loading Page Template ..." }/>
                                    {/*<Authoritative $={Authorization} Page={Notifications} path={"/pipelines"} transition={"Loading Notification Component (Under Development) ..."}/>*/ }

                                    <Redirect from={ "*" } to={ "/" }/>
                                </Switch>
                            </Suspense>
                        </Column>
                    </Grid>
                ) }
            />
            <BTT/>
        </Theme>
    );

    return (
        <Component/>
    );
};

export default Application;
