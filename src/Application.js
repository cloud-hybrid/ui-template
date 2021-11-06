import React, { useEffect, useState, lazy as Import, Suspense } from "react";

import { Grid, Column } from "@carbon/react";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { default as Menu } from "./components/Menu/Index";

import { default as BTT } from "./components/Back-To-Top/Index";

import { default as Breadcrumbs } from "./components/Breadcrumb";

import { default as Spinner } from "./components/Loader";

/***
 * Authentication Hook
 */

import * as Authentication from "./components/Authenticate";

const Login = Import(() => import("./pages/Login"));
const GitHub = Import(() => import("./pages/GitHub"));
const GitLab = Import(() => import("./pages/GitLab"));
const Pipelines = Import(() => import("./pages/Pipelines"));
const Template = Import(() => import("./pages/Template"));
const Snippet = Import(() => import("./pages/Development/Code-Snippet-Awaitable"));

const Dashboard = {
    Index: Import(() => import("./pages/Dashboard/Pages/Index")),
    Mobile: Import(() => import("./pages/Dashboard/Pages/Mobile"))
};

import { default as Home } from "./pages/Home";

/// import { default as Home } from "./pages/Home";
/// import { default as Login } from "./pages/Login";
/// import { default as GitHub } from "./pages/GitHub";
/// import { default as GitLab } from "./pages/GitLab";
/// import { default as Pipelines } from "./pages/Pipelines";
/// import { default as Template } from "./pages/Template";

import "./Application.scss";

const Application = () => {
    // Window URL Tracking (Stateful)
    const location = useLocation();

    // Authorization Route State
    const Authorization = useState(null);

    useEffect(() => {
        const Token = async (Authorization) => {
            const Handler = Authentication.Cancellation.source();

            const $ = await Authentication.JWT();

            const Validation = (
                $ !== null
            ) ? await Authentication.Validate($, Handler) : null;

            Authorization[1](Validation?.Status?.Code === 200);
        };

        Token(Authorization);
    }, []);

    return (
        <React.StrictMode>
            <Menu Authorizer={ Authorization }/>
            <Grid>
                <Column lg={ 16 } md={ 8 } sm={ 4 }>
                    <Breadcrumbs Title={ location.pathname }/>
                    <Suspense fallback={ null }>
                        <Spinner timeout={ 1000 } description={ "" }>
                            <Routes location={ location } basename={ "/" }>
                                {/* Base Endpoint(s) */ }

                                <Route
                                    path={ "/" }
                                    element={
                                        (
                                            <Home/>
                                        )
                                    }
                                />

                                <Route
                                    path={ "/login" } element={
                                    <Spinner timeout={ 1250 } description={ "Establishing Secure Context ..." }>
                                        <Login Authorizer={ Authorization }/>
                                    </Spinner>
                                }
                                />

                                {/* Authorized Endpoint(s) */ }

                                <Route
                                    path={ "/gitlab" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <GitLab description={ "Loading VCS Project(s) ..." }/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />

                                <Route
                                    path={ "/github" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <GitHub description={ "Loading Organization ..." }/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />

                                <Route
                                    path={ "/pipelines" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <Pipelines description={ "Loading CI-CD Pipeline(s) ..." }/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />

                                <Route
                                    path={ "/template" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Loading Template ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <Template description={ "Loading Template ..." }/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />
                                <Route
                                    path={ "/snippet" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <Snippet description={ "Loading Code-Snippet ..." }/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />
                                <Route
                                    path={ "/dashboard" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (
                                                    Authorization[0] === true
                                                )
                                                    ? (
                                                        <Dashboard.Mobile/>
                                                    )
                                                    : (
                                                        <Navigate to={ "/login" }/>
                                                    )
                                            }
                                        </Spinner>
                                    ) }
                                />
                                <Route path={ "/*" } element={ (<Navigate to={ "/" }/>) }/>
                            </Routes>
                        </Spinner>
                    </Suspense>
                </Column>
            </Grid>
            <BTT/>;
        </React.StrictMode>
    )
        ;
};

export default Application;
