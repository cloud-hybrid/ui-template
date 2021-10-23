import "./Application.scss";

import React, {
    useEffect,
    useState
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
    useHistory,
    useLocation
} from "react-router-dom";

import { default as Menu } from "./components/Menu/Index";

import { default as BTT } from "./components/Back-To-Top/Index";

import { Simulation as Breadcrumbs } from "./components/Breadcrumb/Index";

import { default as Home        }   from "./content/Home/Index";
import { default as GitHub      }   from "./content/GitHub/Index";
import { default as GitLab      }   from  "./content/GitLab/Index";
import { default as Pipelines   }   from "./content/Pipelines/Index";
import { default as Template    }   from "./content/Template/Index";

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

/*****
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

const Application = () => {
    const theme = useTheme();

    const Authorization = useState(null);
    const Handler = Authentication.Cancellation.source();

    useEffect(() => {
        try {
            Authentication.Token(Handler).then((Value) => {
                (Value && Value.Content && Value.Content.status === 200) ? Authorization[1](true)
                    : Authorization[1](false);
            });
        } catch (error) {
            console.warning("Exception" + ":", Authorization, error);
            Authorization[1](false);
        }
    }, []);

    const Component = () => (
        <Theme theme={ theme.theme }>
            <Menu/>
            <Content children={(
                <Grid>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Switch>
                            {/* Base Endpoint(s) */}

                            <Route exact path={"/"}>
                                <Breadcrumbs/>
                                <Home/>
                            </Route>

                            <Route path={"/login"} sensitive={false}>
                                <Breadcrumbs/>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === false)
                                            ? (<Login/>)
                                            : (<Redirect to={"/"}/>)
                                }
                            </Route>

                            {/* Development Endpoint(s) */}

                            <Route path="/template" sensitive={false}>
                                <Breadcrumbs/>
                                <Template/>
                            </Route>

                            <Route path="/notifications" sensitive={false}>
                                <Breadcrumbs/>
                                <Notifications/>
                            </Route>

                            {/* Authorization-Only Endpoint(s) */}

                            <Route path={"/gitlab"} sensitive={false}>
                                <Breadcrumbs/>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === false)
                                            ? (<GitLab/>)
                                            : (<Redirect to={"/login"} push={true} from={"/gitlab"}/>)
                                }
                            </Route>

                            <Route path={"/github"} sensitive={false}>
                                <Breadcrumbs/>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === false)
                                            ? (<GitHub/>)
                                            : (<Redirect to={"/login"} push={true} from={"/github"}/>)
                                }
                            </Route>

                            <Route path={"/pipelines"} sensitive={false}>
                                <Breadcrumbs/>
                                {
                                    (Authorization[0] === null)
                                        ? (<Skeleton Loader={false}/>)
                                        : (Authorization[0] === false)
                                            ? (<Pipelines/>)
                                            : (<Redirect to={"/login"} push={true} from={"/pipelines"}/>)
                                }
                            </Route>

                            <Redirect from={"*"} to={"/"}/>
                        </Switch>
                    </Column>
                </Grid>
            )}/>
            <BTT/>
        </Theme>
    );

    return (<Component />);
};

export default Application;
