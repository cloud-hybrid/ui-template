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
    const history = useHistory();
    const location = useLocation();

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
            <Content children={(
                <Grid>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Breadcrumbs/>
                        <Switch>
                            {/* Base Endpoint(s) */ }
                            <Route exact path={ "/" } component={ Home }/>
                            <Route
                                path={ "/login" } sensitive={ false } children={
                                (Authorization[0] === null)
                                    ? (<Skeleton Loader={ false }/>)
                                    : (Authorization[0] === false)
                                        ? (<Login/>)
                                        : (<Redirect to={ "/" }/>)
                            }
                            />

                            {/* Development Endpoint(s) */ }
                            <Route path="/template" component={ Template }/>
                            <Route path="/notifications" component={ Notifications }/>

                            {/* Authorization-Only Endpoint(s) */ }
                            <Route
                                path={ "/gitlab" } sensitive={ false } children={
                                (Authorization[0] === null)
                                    ? (<Skeleton Loader={ false }/>)
                                    : (Authorization[0] === true)
                                        ? (<GitLab/>)
                                        : (<Redirect to={ "/login" }/>)
                            }
                            />
                            <Route path="/github" component={ GitHub }/>
                            <Route path="/pipelines" component={ Pipelines }/>
                            <Redirect from={ "*" } to={ "/" }/>
                        </Switch>
                    </Column>
                </Grid>
            )}/>
        </Theme>
    );

    return (<Component />);
};

export default Application;
