import "./Application.scss";

import React, {lazy as Import, Suspense, useEffect, useState} from "react";

import {Column, Content, Grid, Theme} from "@carbon/react";

import {Redirect, Route, Switch, useLocation} from "react-router-dom";

import {default as Menu} from "./components/Menu/Index";

import {default as BTT} from "./components/Back-To-Top/Index";

import {default as Breadcrumbs} from "./components/Breadcrumb/Index";

// import { default as Home        }   from "./content/Home/Index";
// import { default as GitHub      }   from "./content/GitHub/Index";
// import { default as GitLab      }   from  "./content/GitLab/Index";
// import { default as Pipelines   }   from "./content/Pipelines/Index";
// import { default as Template    }   from "./content/Template/Index";
import {default as Login} from "./content/Login-2.0/Index";

import {default as Notifications} from "./content/Development/Notifications/Index";

/***
 * Page Loader & Awaiter
 */
import {default as Skeleton} from "./Page-Loader";

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

const Redirection = ({Target}) => {
    return (
        <Redirect to={{
            pathname: "/login",
            state: {
                to: Target,
                from: Target,
                pathname: Target
            }
        }}/>
    );
};

// @Deprecated
const Direct = ({Target}) => {
    return (
        <Redirect to={{
            pathname: "/login",
            state: {
                to: Target,
                from: Target,
                pathname: Target
            }
        }}/>
    );
};

const Target = (Location) => {
    console.debug("[Debug]", "Path Target", {
        Target: Location?.state?.pathname,
        Fallback: "/"
    });

    return (Location?.state?.pathname) ? Location?.state?.pathname : "/";
};

/// @Deprecated
const Path = (Location) => {
    console.debug("[Debug]", "Path Target", {
        Target: Location?.state?.pathname,
        Fallback: "/"
    });

    return (Location?.state?.pathname) ? Location?.state?.pathname : "/";
};

const Home = Import(() => import("./content/Home/Index").then((Module) => Module));
const GitHub = Import(() => import("./content/GitHub/Index").then((Module) => Module));
const GitLab = Import(() => import("./content/GitLab/Index").then((Module) => Module));
const Pipelines = Import(() => import("./content/Pipelines/Index").then((Module) => Module));
const Template = Import(() => import("./content/Template/Index").then((Module) => Module));

const Authoritative = ({Page, $, path, transition}) => {
    useEffect(() => {
        const Handler = Authentication.Cancellation.source();
        const Response = async () => {
            const Session = await Authentication.Token(Handler);

            console.debug("Authentication Response", Session);

            (Session === null) ? $[1](false)
                : (Session?.Status?.Code === 200)
                    ? $[1](true) : $[1](false);
        }

        Response().finally();
    }, []);

    return (
        <Route path={path} sensitive={false}>
            {
                ($[0] === null)
                    ? (<Skeleton Loader={false}/>)
                    : ($[0] === true)
                        ? (<Page description={transition}/>)
                        : (<Redirection Target={path}/>)
            }
        </Route>
    );
}

const Application = () => {
    const theme = useTheme();
    const location = useLocation();

    const Authorization = useState(null);

    useEffect(() => {
        const Token = async () => {
            const $ = await Authentication.JWT();

            return ($ !== null);
        };

        const Validate = async () => {
            const Handler = Authentication.Cancellation.source();

            const Response = async () => {
                try {
                    const $ = await Authentication.Token(Handler);

                    console.debug("Authentication Response", $);

                    ($.Status.Code === 200) ? Authorization[1](true)
                        : Authorization[1](false);

                    return true;
                } catch (e) {
                    console.warn("[Warning]", "Unhandled Error");

                    return false
                }
            }
            return await Response();
        }

        Token().then(($) => {
            ($ === true) ? Validate() : Authorization[1](false);
        });
    }, []);

    const Component = () => (
        <Theme theme={ theme.theme }>
            <Menu Target={location.pathname} Authorizer={Authorization}/>
            <Content children={(
                <Grid>
                    <Breadcrumbs Title={location.pathname}/>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Suspense fallback={<Skeleton Loader={false}/>}>
                            <Switch>
                                {/* Base Endpoint(s) */}

                                <Route exact path={"/"}>
                                    <Home/>
                                </Route>

                                <Route path={"/login"} sensitive={false}>
                                    {
                                        (Authorization[0] === true)
                                            ? (<Redirect to={Path(location)}/>)
                                            : (Authorization[0] === null)
                                                ? (<Skeleton Loader={false}/>)
                                                : (<Login Authorizer={Authorization} description={"Registering Secure Context ..."}/>)
                                            // (Authorization[0] === false)
                                            //     ? (<Login Authorizer={Authorization} description={"Registering Secure Context ..."}/>)
                                            //     : (<Redirect to={Path(location)}/>)
                                    }
                                </Route>

                                {/* Development Endpoint(s) */}

                                <Route path="/template" sensitive={false}>
                                    <Template/>
                                </Route>

                                <Route path="/notifications" sensitive={false}>
                                    <Notifications/>
                                </Route>

                                {/* Authorization-Only Endpoint(s) */}

                                <Authoritative $={Authorization} Page={GitLab} path={"/gitlab"} transition={"Loading VCS Project(s) ..."}/>
                                {/*<Route path={"/gitlab"} sensitive={false}>*/}
                                {/*    {*/}
                                {/*        (Authorization[0] === null)*/}
                                {/*            ? (<Skeleton Loader={false}/>)*/}
                                {/*            : (Authorization[0] === true)*/}
                                {/*                ? (<GitLab description={"Loading VCS Project(s) ..."}/>)*/}
                                {/*                : (<Redirection Target={"/github"}/>)*/}
                                {/*    }*/}
                                {/*</Route>*/}
                                {/*<Route path={"/gitlab"} sensitive={false}>*/}
                                {/*    {*/}
                                {/*        (Authorization[0] === null)*/}
                                {/*            ? (<Skeleton Loader={false}/>)*/}
                                {/*            : (Authorization[0] === true)*/}
                                {/*                ? (<GitLab description={"Loading GitLab Project(s) ..."}/>)*/}
                                {/*                : (<Direct Target={"/gitlab"}/>)*/}
                                {/*    }*/}
                                {/*</Route>*/}
                                <Route path={"/github"} sensitive={false}>
                                    {
                                        (Authorization[0] === null)
                                            ? (<Skeleton Loader={false}/>)
                                            : (Authorization[0] === true)
                                                ? (<GitHub description={"Loading GitHub Organization ..."}/>)
                                                : (<Direct Target={"/github"}/>)
                                    }
                                </Route>

                                <Route path={"/pipelines"} sensitive={false}>
                                    {
                                        (Authorization[0] === null)
                                            ? (<Skeleton Loader={false}/>)
                                            : (Authorization[0] === true)
                                                ? (<Pipelines description={"Loading Available Pipeline(s) ..."}/>)
                                                : (<Direct Target={"/pipelines"}/>)
                                    }
                                </Route>

                                <Redirect from={"*"} to={"/"}/>
                            </Switch>
                        </Suspense>
                    </Column>
                </Grid>
            )}/>
            <BTT/>
        </Theme>
    );

    return (<Component />);
};

export default Application;
