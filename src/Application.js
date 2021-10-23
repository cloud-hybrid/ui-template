import "./Application.scss";

import React, {
    useEffect,
    useState,
    Suspense,
    lazy as Import
} from "react";

import {
    Content,
    Column,
    Grid,
    Theme
} from "@carbon/react";

import {
    Redirect,
    Route,
    Switch,
    useLocation
} from "react-router-dom";

import { default as Menu } from "./components/Menu/Index";

import { default as BTT } from "./components/Back-To-Top/Index";

import { default as Breadcrumbs } from "./components/Breadcrumb/Index";

// import { default as Home        }   from "./content/Home/Index";
// import { default as GitHub      }   from "./content/GitHub/Index";
// import { default as GitLab      }   from  "./content/GitLab/Index";
// import { default as Pipelines   }   from "./content/Pipelines/Index";
// import { default as Template    }   from "./content/Template/Index";

import { default as Login } from "./content/Login-2.0/Index";

import { default as Notifications    } from "./content/Development/Notifications/Index";

/***
 * Page Loader & Awaiter
 */

import { default as Skeleton } from "./Page-Loader";

/***
 * Authentication Hook
*/

import * as Authentication from "./components/Authenticate";

/***
 *
 * @param Theme: {React.Context}
 *
 * @param theme: {String("g100" | "g90" | "g10" | "white")}
 *
 */

export const useTheme = (theme = "g100") => {
    const Theme = React.createContext(theme);

    Theme.theme = theme;

    return Theme;
};

const Home = Import(() => import("./content/Home/Index").then((Module) => Module));
const GitHub = Import(() => import("./content/GitHub/Index").then((Module) => Module));
const GitLab = Import(() => import("./content/GitLab/Index").then((Module) => Module));
const Pipelines = Import(() => import("./content/Pipelines/Index").then((Module) => Module));
const Template = Import(() => import("./content/Template/Index").then((Module) => Module));

const Application = () => {
    const theme = useTheme();
    const location = useLocation();

    console.debug("[Debug] - Location :::", location);

    const Authorization = useState(null);
    const Handler = Authentication.Cancellation.source();

    useEffect(() => {
        Authentication.Token(Handler).then((Validation) => {
            (Validation?.Content?.status === 200) ? Authorization[1](true) : Authorization[1](false);
        });
    }, [Authorization, Handler]);

    const Component = () => (
        <Theme theme={ theme.theme }>
            <Menu Target={location.pathname}/>
            <Content children={(
                <Grid>
                    <Breadcrumbs Title={location.pathname}/>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Suspense fallback={<Skeleton Loader={true}/>}>
                            <Switch>
                            {/* Base Endpoint(s) */}

                            <Route exact path={"/"}>
                                <Home/>
                            </Route>

                            <Route path={"/login"} sensitive={false}>
                                <Login/>
                            </Route>

                            {/* Development Endpoint(s) */}

                            <Route path="/template" sensitive={false}>
                                <Template/>
                            </Route>

                            <Route path="/notifications" sensitive={false}>
                                <Notifications/>
                            </Route>

                            {/* Authorization-Only Endpoint(s) */}

                            <Route path={"/gitlab"} sensitive={false}>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === true)
                                            ? (<GitLab/>)
                                            : (<Redirect to={"/login"} from={"/gitlab"} push={true}/>)
                                }
                            </Route>
                            <Route path={"/github"} sensitive={false}>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === false)
                                            ? (<GitHub/>)
                                            : (<Redirect to={"/login"} />)
                                }
                            </Route>

                            <Route path={"/pipelines"} sensitive={false}>
                                <Pipelines/>
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
