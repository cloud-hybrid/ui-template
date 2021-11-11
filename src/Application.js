import React, { useEffect, useState, lazy as Import, Suspense } from "react";

import { Grid, Column, Row } from "@carbon/react";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { default as Menu } from "./components/Menu";
import { default as BTT } from "./components/Back-To-Top";
import { default as Breadcrumbs } from "./components/Breadcrumb";
import { default as Spinner } from "./components/Loader";

/***
 * Authentication Hook
 */

import  { Authorizer, JWT, Validate, Cancellation } from "./components/Authenticate";

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
            const Handler = Cancellation.source();

            const $ = await JWT();

            const Validation = (
                $ !== null
            ) ? await Validate($, Handler) : null;

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

                                { /* Authorized Endpoint(s) */ }

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ GitLab }
                                            Session={ Authorization[0] }
                                            description={ "Loading VCS Project(s) ..." }
                                        />
                                    ) } path={ "/gitlab" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ GitHub }
                                            Session={ Authorization[0] }
                                            description={ "Loading VCS Organization ..." }
                                        />
                                    ) } path={ "/github" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ Pipelines }
                                            Session={ Authorization[0] }
                                            description={ "Loading Deployment Pipeline(s) ..." }
                                        />
                                    ) } path={ "/pipelines" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ Dashboard }
                                            Session={ Authorization[0] }
                                            description={ "Loading Administrative Dashboard ..." }
                                        />
                                    ) } path={ "/dashboard" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ Template }
                                            Session={ Authorization[0] }
                                            description={ "Loading Template Page ..." }
                                        />
                                    ) } path={ "/template" }
                                />

                                { /* Development Component(s) */ }

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ Snippet }
                                            Session={ Authorization[0] }
                                            description={ "Loading Code Snippet Component ..." }
                                        />
                                    ) } path={ "/snippet" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ Tiles }
                                            Session={ Authorization[0] }
                                            description={ "Loading Tile(s) Component ..." }
                                        />
                                    ) } path={ "/tiles" }
                                />

                                <Route
                                    element={ (
                                        <Authorizer
                                            Page={ List }
                                            Session={ Authorization[0] }
                                            description={ "Loading List Component ..." }
                                        />
                                    ) } path={ "/list" }
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
