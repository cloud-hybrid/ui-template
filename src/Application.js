import React, { useEffect, useState } from "react";

import { Column, Content, Grid, Theme } from "@carbon/react";

import { Route, Routes, useLocation, Navigate, useNavigate } from "react-router-dom";

/// import { Routes, Route, Outlet, Link, Redirect } from "react-router-dom";

import { default as Menu } from "./components/Menu/Index";

import { default as BTT } from "./components/Back-To-Top/Index";

import { default as Breadcrumbs } from "./components/Breadcrumb";

import { default as Spinner } from "./components/Loader";

// import { default as Pages } from "./pages";

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

// const Login = Import(() => import("./pages/Login"));
// const Home = Import(() => import("./pages/Home"));
// const GitHub = Import(() => import("./pages/GitHub"));
// const GitLab = Import(() => import("./pages/GitLab"));
// const Pipelines = Import(() => import("./pages/Pipelines"));
// const Template = Import(() => import("./pages/Template"));

import { default as Home } from "./pages/Home";
import { default as Login } from "./pages/Login";
import { default as GitHub } from "./pages/GitHub";
import { default as GitLab } from "./pages/GitLab";
import { default as Pipelines } from "./pages/Pipelines";
import { default as Template } from "./pages/Template";

import "./Application.scss";
const Application = () => {
    const theme = useTheme("g100");
    const location = useLocation();
    const navigate = useNavigate();

    const Authorization = useState(null);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        const Preference = event.matches ? "dark" : "light";

        theme.theme = (
            Preference === "dark"
        ) ? "g100" : "light";
    });

    useEffect(() => {
        const Token = async (Authorization) => {
            const Handler = Authentication.Cancellation.source();

            const $ = await Authentication.JWT();

            const Validation = ($ !== null) ? await Authentication.Validate($, Handler) : null;

            Authorization[1](Validation?.Status?.Code === 200);
        };

        Token(Authorization);
    }, []);

    return (
        <Theme theme={ theme.theme }>
            <Menu Location={ location.pathname } Authorizer={ Authorization }/>
            <Content>
                <Grid>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Breadcrumbs Title={ location.pathname }/>
                        <Routes location={location} basename={"/"}>
                            {/* Base Endpoint(s) */}

                            <Route path={"/"} element={(<Home/>)}/>

                            <Route path={"/login"} element={
                                // (Authorization[0] !== true)
                                <Spinner timeout={1250} description={"Establishing Secure Context ..."}>
                                    <Login Authorizer={Authorization}/>
                                </Spinner>
                            }/>

                            {/* Authorized Endpoint(s) */}

                            <Route path={"/gitlab"} element={(
                                <Spinner timeout={1000} description={"Validating Authorized Session ..."}>
                                    {
                                        (Authorization[0] === true)
                                            ? (<GitLab description={"Loading VCS Project(s) ..."}/>)
                                            : (<Navigate to={ "/login" }/>)
                                    }
                                </Spinner>
                            )}/>

                            <Route path={"/github"} element={(
                                <Spinner timeout={1000} description={"Validating Authorized Session ..."}>
                                    {
                                        (Authorization[0] === true)
                                            ? (<GitHub description={"Loading Organization ..."}/>)
                                            : (<Navigate to={ "/login" }/>)
                                    }
                                </Spinner>
                            )}/>

                            <Route path={"/pipelines"} element={(
                                <Spinner timeout={1000} description={"Validating Authorized Session ..."}>
                                    {
                                        (Authorization[0] === true)
                                            ? (<Pipelines description={"Loading CI-CD Pipeline(s) ..."}/>)
                                            : (<Navigate to={ "/login" }/>)
                                    }
                                </Spinner>
                            )}/>

                            <Route path={"/template"} element={(
                                <Spinner timeout={1000} description={"Loading Template ..."}>
                                    {
                                        (Authorization[0] === true)
                                            ? (<Template description={"Loading Template ..."}/>)
                                            : (<Navigate to={ "/login" }/>)
                                    }
                                </Spinner>
                            )}/>
                            <Navigate to={"/*"} replace state={location.state}/>
                        </Routes>
                    </Column>
                </Grid>
            </Content>
            <BTT/>
        </Theme>
    );
};



export default Application;
