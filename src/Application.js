import React from "react";

import styles from "./Application.scss";

import PropTypes from "prop-types";

import {
    Content,
    Theme
} from "@carbon/react";

import {
    Route,
    Switch,
    useHistory, useLocation
} from "react-router-dom";

import { default as Landing } from "./content/Landing/Index";
import { default as GitHub } from "./content/GitHub/Index";
import { default as GitLab } from "./content/GitLab/Index";

/*****
 *
 * @param Theme: {React.Context}
 *
 * @param theme: {String("g100" | "g90" | "g10" | "white")}
 *
 */

export const useTheme = (theme = "g100" ) => {
    const Theme = React.createContext(theme);

    Theme.theme = theme;

    if (Theme.theme === "g100") {
        Theme.className = styles.cdsG100;
    } else if (Theme.theme === "g90") {
        Theme.className = styles.cdsG90;
    } else if (Theme.theme === "g10") {
        Theme.className = styles.cdsG10;
    } else {
        Theme.className = styles.cdsWhite;
    }

    return Theme;
};

const Application = () => {
    const theme = useTheme();
    const history = useHistory();
    const location = useLocation();

    const Component = () => (
        <Theme theme={ theme.theme } className={theme.className}>
            <Content children={(
                <Switch>
                    <Route exact path="/" component={ Landing }/>
                    <Route path="/repositories" component={ GitHub }/>
                    <Route path="/gitlab" component={ GitLab }/>
                </Switch>
            )}/>
        </Theme>
    );

    return (<Component />);
};

export default Application;
