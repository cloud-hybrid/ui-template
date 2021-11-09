import React, { useEffect, useState, lazy as Import, Suspense } from "react";

import { Grid, Column, Row } from "@carbon/react";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { default as Menu            } from "./components/Menu";
import { default as BTT             } from "./components/Back-To-Top";
import { default as Breadcrumbs     } from "./components/Breadcrumb";
import { default as Spinner         } from "./components/Loader";

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
const Tiles = Import(() => import("./pages/Development/Tiles"));
const List = Import(() => import("./pages/Development/Selectable-List"));

const Dashboard = {
    Index: Import(() => import("./pages/Dashboard/Pages/Index")),
    Mobile: Import(() => import("./pages/Dashboard/Pages/Mobile"))
};

import { default as Home } from "./pages/Home";

import "./Application.scss";
const Application = () => {
    // Window URL Tracking (Stateful)
    const location = useLocation();

    const Authorization = useState(null);

    useEffect(() => {
        const Token = async (Authorization) => {
            const Handler = Authentication.Cancellation.source();

            const $ = await Authentication.JWT();

            const Validation = (
                $ !== null
            ) ? await Authentication.Validate($, Handler) : null;

            /// Authorization[1](Object.assign({}, Authorization[0], { Status: (Validation?.Status?.Code === 200) }));
            Authorization[1](Validation?.Status?.Code === 200);
        };

        Token(Authorization).catch((e) => {
            throw new Error(JSON.stringify(e, null, 4));
        });
    }, []);

    return (
        <React.StrictMode>
            <Menu Authorizer={ Authorization }/>
            <Grid>
                <Column lg={ 16 } md={ 8 } sm={ 4 }>
                    <Row>
                        <Column>
                            <Breadcrumbs Title={ location.pathname }/>
                        </Column>
                    </Row>
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
                                <Route
                                    path={ "/tiles" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (Authorization[0] === true)
                                                    ? (<Tiles description={"Loading Selectable Tile(s) ..."}/>)
                                                    : (<Navigate to={ "/login" }/>)
                                            }
                                        </Spinner>
                                    ) }
                                />
                                <Route
                                    path={ "/list" }
                                    element={ (
                                        <Spinner timeout={ 1000 } description={ "Validating Authorized Session ..." }>
                                            {
                                                (Authorization[0] === true)
                                                    ? (<List description={"Loading Selectable List ..."}/>)
                                                    : (<Navigate to={ "/login" }/>)
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
            <BTT/>
        </React.StrictMode>
    );
};

export default Application;
