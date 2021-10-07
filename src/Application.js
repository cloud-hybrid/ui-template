import "./Application.scss";

import React from "react";

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

//import { default as Landing } from "./content/Landing/Index";

import { default as Home        }   from "./content/Home/Index";
import { default as GitHub      }   from "./content/GitHub/Index";
import { default as GitLab      }   from  "./content/GitLab/Index";

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

    const Component = () => (
        <Theme theme={ theme.theme }>
            <Content children={(
                <Grid>
                    <Breadcrumbs/>
                    <Column lg={ 16 } md={ 8 } sm={ 4 }>
                        <Switch>
                            <Route exact path="/" component={ Home }/>
                            <Route path="/gitlab" component={ GitLab }/>
                            <Route path="/github" component={ GitHub }/>

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
